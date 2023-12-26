import Header from '../../components/Header'
import Mainheader2 from '../../images/Mainheader2.webp'
import Mainheader11 from '../../images/mainheader11.jpg'
import Mainheader9 from '../../images/mainheader9.jpg'
import Mainheader10 from '../../images/mainheader10.jpg'
import './about.css'


const About = () => {
  return (
    <>
       <Header title='About Us' image={Mainheader2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate quas iure rerum obcaecati itaque, nam saepe. Ipsum, magni quasi. Ratione suscipit ea unde. Temporibus dicta impedit a dignissimos itaque repellendus. 
       </Header>
       <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={Mainheader11} alt="" className='story__image' />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, non cum. Ad temporibus tempora quos, assumenda a incidunt eos totam maiores magnam enim! Temporibus nam aliquid omnis laudantium nobis illum est quo repudiandae magni officia error, iusto ipsa tempora laborum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore illum voluptates natus tenetur eum, maxime laborum exercitationem ipsum vero adipisci in consequatur suscipit quidem cum accusamus consequuntur libero debitis fuga quas quam quo nesciunt?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati optio eius sequi nobis. Iure!</p>
          </div>
        </div>
       </section>

       <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, non cum. Ad temporibus tempora quos, assumenda a incidunt eos totam maiores magnam enim! Temporibus nam aliquid omnis laudantium nobis illum est quo repudiandae magni officia error, iusto ipsa tempora laborum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore illum voluptates natus tenetur eum, maxime laborum exercitationem ipsum vero adipisci in consequatur suscipit quidem cum accusamus consequuntur libero debitis fuga quas quam quo nesciunt?</p>
          </div>
          <div className="about__section-image">
            <img src={Mainheader9} alt="" />
          </div>
        </div>
       </section>

       <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={Mainheader10} alt="" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, non cum. Ad temporibus tempora quos, assumenda a incidunt eos totam maiores magnam enim! Temporibus nam aliquid omnis laudantium nobis illum est quo repudiandae magni officia error, iusto ipsa tempora laborum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus tempore illum voluptates natus tenetur eum, maxime laborum exercitationem ipsum vero adipisci in consequatur suscipit quidem cum accusamus consequuntur libero debitis fuga quas quam quo nesciunt?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati optio eius sequi nobis. Iure!</p>
          </div>
        </div>
       </section>

    </>
  )
}

export default About