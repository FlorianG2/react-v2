import './Banner.css';
import './Logo.css';
import NegreAVL from '../Negre-AVL.svg';


function Banner() {
  return(
    <div className="banner">
      <div className="banner-side">
        EN
        ES
      </div>
      <div className="banner-center">
        <img src={NegreAVL} className="logo" alt="logo" />
      </div>
      <div className="banner-side">
        About Us
        Contact
      </div>
    </div>
  )
}

export default Banner
