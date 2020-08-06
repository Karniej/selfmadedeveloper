import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import Form from '../components/Form'
import Sidebar from '../components/Sidebar'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className='section'>
          <Form />
          <div className='container content content-container'>
            <div className='columns'>
              <div className='column'>
                {posts.map(({ node: post }) => {
                  return (
                    <div key={post.id} className='post'>
                      <a href={post.fields.slug}>
                        <h1 className='post-title'>{post.frontmatter.title}</h1>
                      </a>
                      <a href={post.fields.slug}>
                      <div className='post-inner'>
                        <img
                          className='post-thumbnail'
                          alt='post thumbnail'
                          src={post.frontmatter.thumbnail.childImageSharp.fluid.src}
                        />
                        <p className='post-excerpt'>{post.excerpt}</p>
                      </div>
                      </a>
                      <div className='post-footer'>
                        {post.frontmatter.tags && (
                          <ul className='post-tags'>
                            {post.frontmatter.tags.map((tag) => (
                              <li key={tag + `tag`}>
                                <span className='tag is-primary post-tag'>
                                  <Link className='link' to={`/tags/${kebabCase(tag)}/`}>
                                    # {tag}
                                  </Link>
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}
                        <small className='post-date'>{post.frontmatter.date}</small>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='column is-3'>
                <Sidebar />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
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
