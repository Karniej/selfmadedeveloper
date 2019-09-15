import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta
            name="description"
            content={data.site.siteMetadata.description}
          />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/logo.png" />
          <link
            rel="icon"
            type="image/png"
            href="/img/logo.png"
            sizes="32x32"
          />

          <link rel="mask-icon" href="/img/logo.png" />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/selfmadedeveloper.png" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <footer className="footer">
          <Form />
          <p className="copyright">© Copyright 2019 Pawel Karniej</p>
        </footer>
      </div>
    )}
  />
)

export default TemplateWrapper
