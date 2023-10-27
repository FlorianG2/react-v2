import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Sport from './Pages/Sport';
import Music from './Pages/Music';
import Art from './Pages/Art';
import Banner from './Components/Banner';
import './App.css'
import { useTranslation } from "react-i18next";



function App() {

  const { t, i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }

  return (
    <div>
      <Banner/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/music" element={<Music />} />
          <Route path="/art" element={<Art />} />
       </Routes>
    </div>
  );
}

export default App;
