import Header from '../../components/Header'
import MainHeader3 from '../../images/Mainheader3.webp'
import { gallery } from '../../data'
import './gallery.css'




const Gallery = () => {

  return (
    <>
      <Header title='Our Gallery' image={MainHeader3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque incidunt mollitia earum molestias dolore.
      </Header>
      <section className="gallery">
        <container className="gallery__container">
          {
            gallery.map((image, index) => {
              return <article key={index}>
                <img src={image} alt=''/>
              </article>
            })
          }
        </container>
      </section>
    </>
  )
}

export default Gallery
