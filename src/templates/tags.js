import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map((post) => (
      <div key={post.node.id} className="post">
        <a href={post.node.fields.slug}>
          <h1 className="post-title">{post.node.frontmatter.title}</h1>
        </a>
        <a href={post.node.fields.slug}>
          <div className="post-inner">
            <img
              className="post-thumbnail"
              alt="post thumbnail"
              src={post.node.frontmatter.thumbnail.childImageSharp.fluid.src}
            />
            <p className="post-excerpt">{post.node.excerpt}</p>
          </div>
        </a>
        <div className="post-footer">
          {post.node.frontmatter.tags && (
            <ul className="post-tags">
              {post.node.frontmatter.tags.map((tag) => (
                <li key={tag + `tag`}>
                  <span className="tag is-primary post-tag">
                    <Link className="link" to={`/tags/${kebabCase(tag)}/`}>
                      # {tag}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          )}
          <small className="post-date">{post.node.frontmatter.date}</small>
        </div>
      </div>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged “${tag}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content content-container">
            <div className="columns">
              <div className="column">
                <h2 className="subtitle tags-header">{tagHeader}</h2>
                <div className="posts-container">{postLinks}</div>
                <hr />
                <span className="tag is-primary is-large tag-header">
                  <Link className="link" to="/tags/">
                    Browse all tags
                  </Link>
                </span>
              </div>
              <div className="column is-3">
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
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
    }
  }
`
