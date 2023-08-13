import {Link} from 'react-router-dom'
import Logo from '../images/logo5.jpg'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const Footer = () => { 
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="" />
                </Link>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est qui numquam sint vero cumque autem at quod assumenda ipsam adipisci.
                </p>
                <div className="footer__socials">
                    <a href='https://linkedin.com/in/AyobamiOlanrewaju229509' target='blank' rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href='https://github.com/hiyrol' target='blank' rel='noreferrer noopener'><FaGithub/></a>
                    <a href='https://https://twitter.com/H4hiyrol' target='blank' rel='noreferrer noopener'><FaTwitter/></a>
                    <a href='https://www.instagram.com/hiyrol' target='blank' rel='noreferrer noopener'><FaInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to='/about'>About</Link>
                <Link to='/plans'>Plans</Link>
                <Link to='/trainers'>Trainers</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/contact'>Contact</Link>
               
            </article>
            <article>
                <h4>Insights</h4>
                <Link to='/s'>Blog</Link>
                <Link to='/s'>Case Studies</Link>
                <Link to='/s'>Events</Link>
                <Link to='/s'>Communities</Link>
                <Link to='/s'>FAQs</Link>
               
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to='/contact'>Contact Us</Link>
                <Link to='/s'>Support</Link>
            
               
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 DevbyHiyrol &copy; All Rights Reserved </small>
        </div>
    </footer>
  )
}

export default Footer