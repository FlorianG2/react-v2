import './Banner.css';
import './Logo.css';
import NegreAVL from '../Negre-AVL.svg';
import { Link } from 'react-router-dom';


function Banner() {
  return(
    <div className="banner">
      <div className="banner-side">
        EN
        ES
      </div>
      <div className="banner-center">
        <Link to="/">
          <img src={NegreAVL} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="banner-side">
        <Link to="/about">About</Link>
        Contact
      </div>
    </div>
  )
}

export default Banner
