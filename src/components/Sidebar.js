import React from 'react'
import selfmadedev from '../img/selfmadedev2.png'
import me from '../img/me2.jpg'
import logrocket from '../img/logrocket2.png'
import celebrateAppLogo from '../../static/img/app-icon.png'
import { Link } from 'gatsby'

const Sidebar = () => (
  <div className="sidebar">
    <div className='section links-page'>
      <a href='https://www.instagram.com/selfmadedeveloper/' target='_blank'>
        <figure className='image is-128x128'>
          <img alt='selfmade developer logo' src={me} className='is-rounded' />
        </figure>
      </a>
      <h2 className='links-title'>
        Pawel Karniej <br />
        <span className='colored'>React Native </span>developer
      </h2>
      <hr style={{ marginBottom: '1.25em' }} />
      <p className='links-paragraph'>
        Latest <span className='colored'>articles </span>
      </p>
      <div className='links-articles-container'>
        <a
          target='_blank'
          href='https://blog.logrocket.com/choosing-the-right-react-native-date-picker/'
          id='logrocket'
        >
          <img className='logrocket' alt='logrocket logo' src={logrocket} />
          <p className='links-paragraph'>
            Choosing the right
            <span className='colored'> React Native datepicker</span>
          </p>
        </a>
        <a
          target='_blank'
          href='https://blog.logrocket.com/designing-a-ui-with-custom-theming-using-react-native-paper/'
          id='logrocket'
        >
          <img className='logrocket' alt='logrocket logo' src={logrocket} />
          <p className='links-paragraph'>
            Designing a UI with custom theming using
            <span className='colored'> react-native-paper </span>
          </p>
        </a>
        <Link to='/blog/2019-10/2019-10.23-learning-react-native/'>
          <img id='selfmadedev' alt='selfmadev logo' src={selfmadedev} />
          <p className='links-paragraph'>
            Learning
            <span className='colored'> React Native</span>
          </p>
        </Link>
        <a
          target='_blank'
          href='https://blog.logrocket.com/how-to-make-tinder-like-card-animations-with-react-native/'
        >
          <img className='logrocket' alt='logrocket logo' src={logrocket} />
          <p className='links-paragraph'>
            How to make Tinder-like card animations with
            <span className='colored'> React Native</span>
          </p>
        </a>
      </div>
      <hr style={{ marginBottom: '1.25em', marginTop: '1.25em' }} />
      <p className='links-paragraph'>
        Desk <span className='colored'>setup:</span>
      </p>
      <div className='setup-container'>
        <p className='links-paragraph'>
          Macbook Pro <span className='colored'>16" </span>
          <span className='colored'>6-Core </span>Intel Core i7 32GB RAM,{' '}
          <span className='colored'>512 SSD</span>
        </p>
        <p className='links-paragraph'>
          G-Master <span className='colored'>GB2760QSU</span> monitor
        </p>
        <p className='links-paragraph'>
          Apple <span className='colored'>Magic Mouse</span> 2
        </p>
        <p className='links-paragraph'>
          <span className='colored'>Keychron</span> K1 keyboard
        </p>
      </div>
      <hr style={{ marginBottom: '1.25em', marginTop: '1.25em' }} />
      <p className='links-paragraph'>
        Current <span className='colored'>project:</span>
      </p>
      <div className='links-articles-container'>
        <a
          target='_blank'
          href='https://apps.apple.com/gb/app/celebrate-share-photo-video/id1453163913?l=pl'
        >
          <img className='image is-48x48' alt='celebrate app logo' src={celebrateAppLogo} />
          <p className='links-paragraph'>
            Celebrate App
            <span className='colored'> React Native</span>
          </p>
        </a>
      </div>
    </div>
  </div>
)

export default Sidebar
