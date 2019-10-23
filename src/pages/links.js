import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import logo from '../img/selfmadedeveloper.png'
import selfmadedev from '../img/selfmadedev2.png'
import logrocket from '../img/logrocket2.png'
import me from '../img/me2.jpg'
import InstagramIcon from '../img/InstagramIcon'
import GithubIcon from '../img/GithubIcon'
import TwitterIcon from '../img/TwitterIcon'
import YoutubeIcon from '../img/YoutubeIcon'

class LinksRoute extends React.Component {
  render() {
    return (
      <Layout shouldRenderFooter={false} shouldRenderNavigation={false}>
        <div className="section links-page">
          <Helmet title="Links" />
          <Link to="/" title="Logo" className="links-Logo">
            <img alt="selfmade developer logo" src={logo} />
          </Link>
          <figure className="image is-128x128">
            <img
              alt="selfmade developer logo"
              src={me}
              className="is-rounded"
            />
          </figure>
          <h1 className="links-title">Pawel Karniej</h1>
          <p className="links-paragraph">
            <span className="colored">React Native </span>developer <br />{' '}
            working
            <span className="colored"> remotely</span>
          </p>
          <hr />
          <p className="links-paragraph">
            Latest <span className="colored">articles </span>
          </p>
          <a
            href="https://blog.logrocket.com/designing-a-ui-with-custom-theming-using-react-native-paper/"
            id="logrocket"
          >
            <div className="links-article-container">
              <img className="logrocket" alt="logrocket logo" src={logrocket} />
              <p className="links-paragraph">
                Designing a UI with custom theming using
                <span className="colored"> react-native-paper </span>
              </p>
            </div>
          </a>
          <Link to="/blog/2019-10/2019-10.23-learning-react-native/">
            <div className="links-article-container">
              <img id="selfmadedev" alt="selfmadev logo" src={selfmadedev} />
              <p className="links-paragraph">
                Learning
                <span className="colored"> React Native</span>
              </p>
            </div>
          </Link>
          <a href="https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/">
            <div className="links-article-container">
              <img className="logrocket" alt="logrocket logo" src={logrocket} />
              <p className="links-paragraph">
                How to make Tinder-like card animations with
                <span className="colored"> React Native</span>
              </p>
            </div>
          </a>

          <div className="icons-container">
            <a href="https://twitter.com/pawe_kar">
              <span className="icon">
                <TwitterIcon />
              </span>
            </a>
            <a href="https://www.instagram.com/selfmadedeveloper/">
              <span className="icon">
                <InstagramIcon />
              </span>
            </a>
            <a href="https://github.com/Karniej/selfmadedeveloper">
              <span className="icon">
                <GithubIcon />
              </span>
            </a>
            <a href="https://www.youtube.com/channel/UCZFNvtnHjY_8pIEQmD16qiA">
              <span className="icon">
                <YoutubeIcon />
              </span>
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}

export default LinksRoute
