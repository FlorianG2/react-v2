import './Tier.css';
import Sport from '../Sport.avif';
import Music from '../music.jpg';
import Art from '../art.jpg';
import { useTranslation } from "react-i18next";


function Tier() {
  const { t, i18n } = useTranslation();
  return(
    <div className="content">
      <div className="category_card">
        <img src={Sport} className="photo" alt="sport" />
        <div className="title">
          <p>
            {t('sport')}
          </p>
        </div>
      </div>
      <div className="category_card_center">
        <img src={Music} className="photo" alt="music" />
        <div className="title">
          <p>
            {t('music')}
          </p>
        </div>
      </div>
      <div className="category_card">
        <img src={Art} className="photo" alt="art" />
        <div className="title">
          <p>
            {t('art')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tier
