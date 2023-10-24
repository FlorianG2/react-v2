import './Tier.css';
import Sport from '../Sport.avif';
import Music from '../music.jpg';
import Art from '../art.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function Tier() {
  const { t, i18n } = useTranslation();
  return(
    <div className="content">
        <div className="category_card">
          <Link to="/sport">
            <img src={Sport} className="photo" alt="sport" />
            <div className="title">
              <p>
                {t('sport').toUpperCase()}
              </p>
            </div>
          </Link>
        </div>
        <div className="category_card_center">
          <Link to="/music">
            <img src={Music} className="photo" alt="music" />
            <div className="title">
              <p>
                {t('music').toUpperCase()}
              </p>
            </div>
          </Link>
        </div>
        <div className="category_card">
          <Link to="/art">
            <img src={Art} className="photo" alt="art" />
            <div className="title">
              <p>
                {t('art').toUpperCase()}
              </p>
            </div>
          </Link>
        </div>
    </div>
  )
}

export default Tier
