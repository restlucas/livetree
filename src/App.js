import { Parallax } from 'react-parallax';

import './App.css';
import bgHeader from './assets/bg_header_3.jpg';
import bgMain from './assets/bg_main_content.jpg';

import Header from './components/Header/Header';
import AboutUs from './components/AboutUs/AboutUs';
import OurMission from './components/OurMission/OurMission';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Parallax className="header-parallax" strength={600} bgImage={bgHeader}>
        <Header />
        <div className="content">
          <h2 className="title-parallax">Who loves, preserves</h2>
        </div>
      </Parallax>

      <AboutUs />

      <OurMission />

      <Footer />
    </div>
  );
}

export default App;
