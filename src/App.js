import logo from './logo.svg';
import './App.css';


import Header from './Components/Header';
import OlxBanner from './Components/OlxBanner';
import AllCategories from './Components/AllCategories';


function App() {
  return (
    <>
      <Header />
      <AllCategories />
      <OlxBanner />
    </>
  );
}

export default App;
