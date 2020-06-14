import React from 'react'
import PropTypes from 'prop-types'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import selfmadedev from '../img/selfmadedev2.png'
import me from '../img/me2.jpg'
import logrocket from '../img/logrocket2.png'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  date,
  tags,
  title,
  helmet,
  thumbnail,
}) => {
  const PostContent = contentComponent || Content
  let disqusConfig = {
    title: title,
  }
  return (
    <section className="section blog-post-container">
      {helmet || ''}
      <div className="container content content-container">
        <div className="columns">
          <div className="column is-8">
            <h2 className="blog-post-title">{title}</h2>
            <PostContent content={content} />
            <p className="post-date">{date}</p>
            <hr />
            <CommentCount config={disqusConfig} c />
            <Disqus config={disqusConfig} />
            <hr />
            {tags && tags.length ? (
              <div className="taglist-container">
                <h4 className="taglist-header">Tags:</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <span className="tag is-primary">
                        <Link className="link" to={`/tags/${kebabCase(tag)}/`}>
                          {tag}
                        </Link>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <div className="column is-3">
            <div>
              <hr />
              <div className="section links-page">
                <figure className="image is-128x128">
                  <img
                    alt="selfmade developer logo"
                    src={me}
                    className="is-rounded"
                  />
                </figure>
                <h2 className="links-title">Pawel Karniej</h2>
                <p className="links-paragraph">
                  <span className="colored">React Native </span>developer <br />{' '}
                  working
                  <span className="colored"> remotely</span>
                </p>
                <hr style={{ marginBottom: '1.25em' }} />
                <p className="links-paragraph">
                  Latest <span className="colored">articles </span>
                </p>
                <div className="links-articles-container">
                  <a
                    href="https://blog.logrocket.com/choosing-the-right-react-native-date-picker/"
                    id="logrocket"
                  >
                    <img
                      className="logrocket"
                      alt="logrocket logo"
                      src={logrocket}
                    />
                    <p className="links-paragraph">
                      Choosing the right
                      <span className="colored"> React Native datepicker</span>
                    </p>
                  </a>
                  <a
                    href="https://blog.logrocket.com/designing-a-ui-with-custom-theming-using-react-native-paper/"
                    id="logrocket"
                  >
                    <img
                      className="logrocket"
                      alt="logrocket logo"
                      src={logrocket}
                    />
                    <p className="links-paragraph">
                      Designing a UI with custom theming using
                      <span className="colored"> react-native-paper </span>
                    </p>
                  </a>
                  <Link to="/blog/2019-10/2019-10.23-learning-react-native/">
                    <img
                      id="selfmadedev"
                      alt="selfmadev logo"
                      src={selfmadedev}
                    />
                    <p className="links-paragraph">
                      Learning
                      <span className="colored"> React Native</span>
                    </p>
                  </Link>
                  <a href="https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/">
                    <img
                      className="logrocket"
                      alt="logrocket logo"
                      src={logrocket}
                    />
                    <p className="links-paragraph">
                      How to make Tinder-like card animations with
                      <span className="colored"> React Native</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        thumbnail={post.frontmatter.thumbnail.childImageSharp.fluid.src}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 1000) {
              src
            }
          }
        }
        tags
      }
    }
  }
`
