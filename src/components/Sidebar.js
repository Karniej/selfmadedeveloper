import React from 'react'
import selfmadedev from '../img/selfmadedev2.png'
import me from '../img/me2.jpg'
import logrocket from '../img/logrocket2.png'
import celebrateAppLogo from '../../static/img/app-icon.png'
import { Link } from 'gatsby'
import InstagramIcon from '../img/InstagramIcon'
import GithubIcon from '../img/GithubIcon'
import TwitterIcon from '../img/TwitterIcon'
import YoutubeIcon from '../img/YoutubeIcon'

const Sidebar = () => (
  <div className='sidebar'>
    <div className='section links-page'>
      <a href='https://www.instagram.com/selfmadedeveloper/' target='_blank' rel='noreferrer'>
        <figure className='image is-128x128'>
          <img alt='selfmade developer logo' src={me} className='is-rounded' />
        </figure>
      </a>
      <p className='links-title'>
        Hi! I'm Pawel,<span className='colored'> I share</span> what I learn from my{' '}
        <span className='colored'>everyday work</span> as a{' '}
        <span className='colored'>React Native</span> developer.
      </p>
      <div className='icons-container'>
        <a href='https://twitter.com/pawe_kar' target='_blank' rel='noreferrer'>
          <span className='icon'>
            <TwitterIcon />
          </span>
        </a>
        <a href='https://www.instagram.com/selfmadedeveloper/' target='_blank' rel='noreferrer'>
          <span className='icon'>
            <InstagramIcon />
          </span>
        </a>
        <a href='https://github.com/Karniej/selfmadedeveloper' target='_blank' rel='noreferrer'>
          <span className='icon'>
            <GithubIcon />
          </span>
        </a>
        <a
          href='https://www.youtube.com/channel/UCZFNvtnHjY_8pIEQmD16qiA'
          target='_blank'
          rel='noreferrer'
        >
          <span className='icon'>
            <YoutubeIcon />
          </span>
        </a>
      </div>
      <hr style={{ marginBottom: '1.25em' }} />
      <p className='links-paragraph-title'>
        Latest <span className='colored'>articles </span>
      </p>
      <div className='links-articles-container'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://blog.logrocket.com/common-bugs-react-native-scrollview/'
          id='logrocket'
        >
          <img className='logrocket' alt='logrocket logo' src={logrocket} />
          <p className='links-paragraph'>
            Common bugs in
            <span className='colored'> React Native ScrollView </span>
            and how to fix them
          </p>
        </a>
        <a
          target='_blank'
          rel='noreferrer'
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
          rel='noreferrer'
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
      </div>
      <hr style={{ marginBottom: '1.25em', marginTop: '1.25em' }} />
      <p className='links-paragraph-title'>
        Current <span className='colored'>project:</span>
      </p>
      <div className='links-articles-container'>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://apps.apple.com/gb/app/celebrate-share-photo-video/id1453163913?l=pl'
        >
          <img className='image is-48x48' alt='celebrate app logo' src={celebrateAppLogo} />
          <p className='links-paragraph'>Celebrate App</p>
        </a>
      </div>
      <hr style={{ marginBottom: '1.25em', marginTop: '1.25em' }} />
      <p className='links-paragraph-title'>
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
    </div>
  </div>
)

export default Sidebar
