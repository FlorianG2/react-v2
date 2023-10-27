import WeAre from '../Components/WeAre';
import Cercle from '../Components/Cercle';


function Art() {
  return (
    <div>
    <div className='bloc-banner bg-art-color'></div>
      <Cercle />
      <WeAre />
      <div className="container-photo">
        {/* <img src={BgSport} className="photo-bg" alt="bg sport" /> */}
    </div>
    </div>
  );
}

export default Art;
