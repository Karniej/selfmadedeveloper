import React from 'react'
import { useMediaQuery } from 'react-responsive'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import { kebabCase } from 'lodash'
import Layout from '../components/Layout'
import Form from '../components/Form'
import Sidebar from '../components/Sidebar'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Layout>
      <section className='section'>
        <div className='container content content-container'>
          <Form />
          <div className='columns'>
            <div className='column'>
              {posts.map(({ node: post }, index) => {
                const isIndex0 = index === 0
                const classNames = isIndex0 ? 'post-thumbnail is-index-0' : 'post-thumbnail'

                const postThumbnail = () => (
                  <img
                    className={classNames}
                    alt='post thumbnail'
                    src={post.frontmatter.thumbnail.childImageSharp.fluid.src}
                  />
                )

                return (
                  <div key={post.id} className='post'>
                    {!isTabletOrMobile && isIndex0 && postThumbnail()}
                    <a href={post.fields.slug}>
                      <h1 className='post-title'>{post.frontmatter.title}</h1>
                    </a>
                    {isTabletOrMobile && isIndex0 && postThumbnail()}
                    <a href={post.fields.slug}>
                      <div className='post-inner'>
                        {!isIndex0 && postThumbnail()}
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

export default IndexPage
