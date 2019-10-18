import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  thumbnail
}) => {
  const PostContent = contentComponent || Content
  console.log('thumbnail: ', thumbnail)

  return (
    <section className="section blog-post-container">
      {helmet || ''}
      <div className="container content content-container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <figure className="image is-centered">
              <img className="post-inside-thumbnail" alt="post thumbnail" src={thumbnail} />
            </figure>
            <h2 className="blog-post-title">{title}</h2>
            <PostContent content={content} />
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
  helmet: PropTypes.object
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('data: ', data)

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        thumbnail={post.frontmatter.thumbnail.childImageSharp.fluid.src}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
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
