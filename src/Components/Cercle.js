import './Cercle.css';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';



function Cercle() {
  const location = useLocation();

  let content;

  if (location.pathname === '/sport') {
    content = <Sport />;
  } else if (location.pathname === '/art') {
    content = <Art />;
  } else {
    content = <Music />;
  }

  return (
    <div>
      {content}
    </div>
  );
}

function Sport() {
  const { t, i18n } = useTranslation();
  return(
  <div className='bloc-slide bg-sport-color'>
    <div>
      <h2 className='we-are center'>WE ARE SPORT</h2>
      <p className='text-center'>
        {t('explanation-sport')}
      </p>
    </div>
    <div className='btn-more'>
      <Link to="/about">More</Link>
    </div>
    <div className='cercle bg-sport-color'></div>
  </div>
  );
}

function Music() {
  const { t, i18n } = useTranslation();
  return(
  <div className='bloc-slide bg-music-color'>
    <div>
      <h2 className='we-are center'>WE ARE MUSIC</h2>
      <p className='text-center'>
        {t('explanation-sport')}
      </p>
    </div>
    <div className='btn-more'>
      <Link to="/about">More</Link>
    </div>
    <div className='cercle bg-music-color'></div>
  </div>
  );
}

function Art() {
  const { t, i18n } = useTranslation();
  return(
  <div className='bloc-slide bg-art-color'>
    <div>
      <h2 className='we-are center'>WE ARE ART</h2>
      <p className='text-center'>
        {t('explanation-sport')}
      </p>
    </div>
    <div className='btn-more'>
      <Link to="/about">More</Link>
    </div>
    <div className='cercle bg-art-color'></div>
  </div>
  );
}

export default Cercle;
