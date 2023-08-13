import Header from '../../components/Header'
import MainHeader5 from '../../images/Mainheader5.webp'
import {MdEmail} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import './contact.css'


const Contact = () => {
  return (
    <>
      <Header title='Get In Touch' image={MainHeader5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, voluptates vitae natus veniam provident voluptas aliquid perferendis consequatur?
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href='mailto:Olanrewajuayobami1995@gmail.com' target='_blank' rel='noreferrer noopener'>{<MdEmail/>}</a>
            <a href='https://twitter.com/H4hiyrol' target='_blank' rel='noreferrer noopener'>{<FaTwitter/>}</a>
            <a href='https://wa.me/+2349032295584' target='_blank' rel='noreferrer noopener'>{<FaWhatsapp/>}</a>
          </div>
        </div>
      </section>
    </>
   
  )
}

export default Contact