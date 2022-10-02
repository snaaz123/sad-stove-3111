import logo from './logo.svg';
import './App.css';


import Header from './Components/Header';
import OlxBanner from './Components/OlxBanner';
import AllCategories from './Components/AllCategories';
import Footer from './Components/Footer';
import AboveFooter from './Components/AboveFooter';
import BelowFooter from './Components/BelowFooter';
import Recommendation from './Components/Recommendation';


function App() {
  return (
    <>
      <Header />
      <AllCategories />
      <OlxBanner />
      <Recommendation/>
      <AboveFooter />
      <Footer />
      <BelowFooter/>
    </>
  );
}

export default App;
