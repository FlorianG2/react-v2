import './Tier.css';
import Sport from '../Sport.avif';
import Music from '../music.jpg';
import Art from '../art.jpg';


function Tier() {
  return(
    <div className="content">
      <div className="category_card">
        <img src={Sport} className="photo" alt="sport" />
        <div className="title">
          <p>
            SPORT
          </p>
        </div>
      </div>
      <div className="category_card_center">
        <img src={Music} className="photo" alt="music" />
        <div className="title">
          <p>
            MUSIC
          </p>
        </div>
      </div>
      <div className="category_card">
        <img src={Art} className="photo" alt="art" />
        <div className="title">
          <p>
            ART
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tier
