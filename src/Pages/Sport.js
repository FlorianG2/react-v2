import WeAre from '../Components/WeAre';
import Cercle from '../Components/Cercle';
import BgSport from '../bg-sport.png';


function Sport() {
  return (
    <div>
      <div className='bloc-banner bg-sport-color'></div>
      <Cercle />
      <WeAre />
      <div className="container-photo">
        <img src={BgSport} className="photo-bg" alt="bg sport" />
      </div>
    </div>
  );
}

export default Sport;
