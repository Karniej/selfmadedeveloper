import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
      <a href={post.node.fields.slug} className="post-container">
      <div className="post" key={post.node.id}>
        <div>
          <Link
            className="post-title"
            to={post.node.fields.slug}
          >
            {post.node.frontmatter.title}
          </Link>
        </div>
        <figure className="image is-centered">
          <img
            className="post-thumbnail"
            alt="post thumbnail"
            src={post.node.frontmatter.thumbnail.childImageSharp.fluid.src}
          />
        </figure>
        <p>
          {post.node.excerpt}
        </p>
        <small className="post-date">{post.node.frontmatter.date}</small>
      </div>
      </a>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="section blog-post-container">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container">
            <h3 className="is-size-3 blog-post-title">{tagHeader}</h3>
            <div className="posts-container">
            {postLinks}
            </div>
            </div>
            <p>
              <Link to="/tags/">Browse all tags</Link>
            </p>
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
          }
        }
      }
    }
  }
`
