import './WeAre.css';
import { useLocation } from 'react-router-dom';

function WeAre() {
  const location = useLocation();

  let content;

  if (location.pathname === '/sport') {
    content = <div className='container-we-are'><h2 className='we-are'>WE ARE <span className='sport-color'>SPORT</span></h2></div>;
  } else if (location.pathname === '/art') {
    content = <div className='container-we-are'><h2 className='we-are'>WE ARE <span className='art-color'>ART</span></h2></div>;
  } else {
    content = <div className='container-we-are'><h2 className='we-are'>WE ARE <span className='music-color'>MUSIC</span></h2></div>;
  }

  return (
    <div>
      {content}
    </div>
  );
}

export default WeAre;
