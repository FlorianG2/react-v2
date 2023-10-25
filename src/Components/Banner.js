import './Banner.css';
import './Logo.css';
import NegreAVL from '../Negre-AVL.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function Banner() {
  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  return(
    <div className="banner">
      <div className="banner-side">
        <select className="custom-select"  onChange={changeLanguageHandler}>
          <option value="en" >🇬🇧 English</option>
          <option value="es" >🇪🇸 Español</option>
        </select>
      </div>
      <div className="banner-center">
        <Link to="/">
          <img src={NegreAVL} className="logo" alt="logo" />
        </Link>
      </div>
      <div className="banner-side">
        <Link to="/about" className='banner-link'>
          <p className='link-p'>
            {t('about')}
          </p>
        </Link>
        <Link to="/contact" className='banner-link'>
          <p className='link-p'>
            {t('contact')}
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Banner
