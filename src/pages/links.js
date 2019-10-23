import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import logo from '../img/selfmadedeveloper.png'
import logrocket from '../img/logrocket.png'
import me from '../img/me2.jpg'
import InstagramIcon from '../img/InstagramIcon'
import GithubIcon from '../img/GithubIcon'
import TwitterIcon from '../img/TwitterIcon'
import YoutubeIcon from '../img/YoutubeIcon'

class LinksRoute extends React.Component {
  render() {
    return (
      <div className="section links-page">
        <Helmet title="Links" />
        <figure className="image is-128x128">
          <img alt="selfmade developer logo" src={me} className="is-rounded" />
        </figure>
        <h1 className="links-title">Pawel Karniej</h1>
        <p className="links-paragraph">
          <span className="colored">React Native </span>developer
        </p>
        <p className="links-paragraph">
          Working <span className="colored">remotely</span>
        </p>
        <p className="links-paragraph">
          Writing <span className="colored">technical articles</span>
        </p>
        <p className="links-paragraph">
          <span className="colored">Streaming live</span> coding sessions
        </p>
        <Link to="/" title="Logo" className="links-Logo">
          <img alt="selfmade developer logo" src={logo} />
        </Link>
        <a
          className="links-Logo"
          href="https://blog.logrocket.com/author/pawelkarniej/"
          target="_blank"
          rel="noopener noreferrer"
          id="logrocket"
        >
          <img alt="logrocket logo" src={logrocket} />
        </a>
        <div className="navbar-end">
          <div className="icons-container">
            <a href="https://twitter.com/pawe_kar" target="_blank" rel="noopener noreferrer">
              <span className="icon">
                <TwitterIcon fill="#FDBB0B" />
              </span>
            </a>
            <a
              href="https://www.instagram.com/selfmadedeveloper/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <InstagramIcon fill="#FDBB0B" />
              </span>
            </a>
            <a
              href="https://github.com/Karniej/selfmadedeveloper"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <GithubIcon />
              </span>
            </a>
            <a
              href="https://www.youtube.com/channel/UCZFNvtnHjY_8pIEQmD16qiA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <YoutubeIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default LinksRoute
