import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section">
          <div className="container content-container">
            <div className="posts-container">
              {posts.map(({ node: post }) => (
                <a
                  href={post.fields.slug}
                  key={post.id}
                  className="post-container"
                >
                  <div className="post">
                    <h1 className="post-title">{post.frontmatter.title}</h1>
                    <figure className="image is-centered">
                      <img
                        className="post-thumbnail"
                        alt="post thumbnail"
                        src={
                          post.frontmatter.thumbnail.childImageSharp.fluid.src
                        }
                      />
                    </figure>
                    <p>{post.excerpt}</p>
                    <small className="post-date">{post.frontmatter.date}</small>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

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
          }
        }
      }
    }
  }
`;
