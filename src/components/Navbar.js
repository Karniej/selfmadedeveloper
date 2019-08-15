import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/selfmadedeveloper.png'
import InstagramIcon from '../img/InstagramIcon'
import GithubIcon from '../img/GithubIcon'
import TwitterIcon from '../img/TwitterIcon'

class Navbar extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0
    )
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav
        className="navbar is-black is-fixed-top"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img
                alt="selfmade developer logo"
                src={logo}
                className="hero-logo"
              />
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu ">
            <div className="navbar-start has-text-centered ">
              <Link
                className="navbar-item"
                activeStyle={{ color: '#FDBB0B' }}
                to="/"
              >
                Home
              </Link>
              <Link
                className="navbar-item"
                activeStyle={{ color: '#FDBB0B' }}
                to="/about"
              >
                About me
              </Link>
              <Link
                className="navbar-item"
                activeStyle={{ color: '#FDBB0B' }}
                to="/tags/react-native/"
              >
                React Native
              </Link>
              <Link
                className="navbar-item"
                activeStyle={{ color: '#FDBB0B' }}
                to="/tags/javascript"
              >
                JavaScript
              </Link>
              <Link
                className="navbar-item"
                activeStyle={{ color: '#FDBB0B' }}
                to="/tags/out-of-scope/"
              >
                Out of Scope
              </Link>
              <Link
                className="navbar-item"
                activeStyle={{ color: '#FDBB0B' }}
                to="/tags/learning-programming"
              >
                Learning Programming
              </Link>
            </div>
            <div className="navbar-end">
              <div className="icons-container">
                <a
                  href="https://twitter.com/pawe_kar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <TwitterIcon />
                  </span>
                </a>
                <a
                  href="https://www.instagram.com/selfmadedeveloper/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <InstagramIcon />
                  </span>
                </a>
                <a
                  href="https://github.com/Karniej"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <GithubIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
