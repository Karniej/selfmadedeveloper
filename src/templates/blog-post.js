import React from 'react'
import PropTypes from 'prop-types'
import { Disqus, CommentCount } from 'gatsby-plugin-disqus'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Sidebar from '../components/Sidebar'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  date,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  let disqusConfig = {
    title: title,
  }
  return (
    <section className="section">
      {helmet || ''}
      <div className="container content content-container">
        <div className="columns">
          <div className="column">
            <h2 className="blog-post-title">{title}</h2>
            <PostContent content={content} />
            <p className="post-date">{date}</p>
            <hr />
            <CommentCount config={disqusConfig} />
            <Disqus config={disqusConfig} />
            <hr />
            {tags && (
              <div className="taglist-container">
                <h4 className="taglist-header">Tags:</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
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
            )}
          </div>
          <div className="column is-3">
            <Sidebar />
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
