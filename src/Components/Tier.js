import './Tier.css';
import Sport from '../Sport.avif';
import Music from '../music.jpg';
import Art from '../art.jpg';
import SportMobile from '../sport-mobile.jpg';
import MusicMobile from '../music-mobile.jpg';
import ArtMobile from '../art-mobile.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";


function Tier() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return(
    <div>
      {isDesktopOrLaptop && <TierDesktop />}
      {isTabletOrMobile && <TierMobile />}
    </div>
  )
}

function TierDesktop() {
  const { t, i18n } = useTranslation();
  return(
  <div className="content">
      <div className="category_card">
        <Link to="/sport">
          <img src={Sport} className="photo" alt="sport" />
          <div className="title">
            <p className="margin-zero">
              {t('sport').toUpperCase()}
            </p>
          </div>
        </Link>
      </div>
      <div className="category_card_center">
        <Link to="/music">
          <img src={Music} className="photo" alt="music" />
          <div className="title">
            <p className="margin-zero">
              {t('music').toUpperCase()}
            </p>
          </div>
        </Link>
      </div>
      <div className="category_card">
        <Link to="/art">
          <img src={Art} className="photo" alt="art" />
          <div className="title">
            <p className="margin-zero">
              {t('art').toUpperCase()}
            </p>
          </div>
        </Link>
      </div>
  </div>
  )
}

function TierMobile() {
  const { t, i18n } = useTranslation();
  return(
  <div className="content_mobile">
    <div className='empty_space'>
      <p></p>
    </div>
    <div className="category_card_mobile">
      <Link to="/sport">
        <img src={SportMobile} className="photo" alt="sport" />
        <div className="title-mobile">
          <p className="margin-zero">
            {t('sport').toUpperCase()}
          </p>
        </div>
      </Link>
    </div>
    <div className="category_card_center_mobile">
      <Link to="/music">
        <img src={MusicMobile} className="photo" alt="music" />
        <div className="title-mobile">
          <p className="margin-zero">
            {t('music').toUpperCase()}
          </p>
        </div>
      </Link>
    </div>
    <Link to="/art">
      <div className="category_card_mobile">
        <img src={ArtMobile} className="photo" alt="art" />
        <div className="title-mobile">
          <p className="margin-zero">
            {t('art').toUpperCase()}
          </p>
        </div>
      </div>
    </Link>
  </div>
  )
}

export default Tier
