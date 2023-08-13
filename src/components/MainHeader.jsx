import {Link} from 'react-router-dom'
import Image from '../images/mainheader1.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Intense Workout Session</h4>
          <h1>Journey to Perfect Body</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo dolores saepe iusto mollitia esse accusantium!</p>
          <Link to='/plans' className='btn lg'>Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader