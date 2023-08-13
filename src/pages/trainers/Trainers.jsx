import Header from '../../components/Header'
import MainHeader3 from '../../images/Trainer7.jpg'
import { trainers } from '../../data'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
      <Header title='Our Trainers' image={MainHeader3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur laborum facilis cumque atque laudantium pariatur dolore eligendi consectetur eos.
      </Header>
      <section className="trainers">
        <div className="container trainers__container">
          {
            trainers.map(({id, image, name, job, socials}) => {
              return  <Trainer key={id} image={image} name={name} job={job} socials={
                [
                  {icon: <FaInstagram/>, link: socials[0]},
                  {icon: <FaTwitter/>, link: socials[1]},
                  {icon: <FaLinkedin/>, link: socials[2]}
                ]
               } />

            
            })
          }
        </div>
      </section>
    </>
  )
}

export default Trainers
              