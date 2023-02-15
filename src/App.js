import Line from "./components/Line";
import Header from "./scenes/Header";
import Navbar from "./scenes/Navbar";
import Portfolio from "./scenes/Portfolio";
import About from './scenes/About'
import Prices from './scenes/Prices'
import Service from "./scenes/Service";
import Application from "./scenes/Application";
import Footer from "./scenes/Footer";

function App() {
  return (
    <div className="app ">
      <Navbar/>

      <Header/>

      <Line/>
      <Portfolio/>

      <Line/>
      <About/>
      
      <Line/>
      <Service/>

      <Line/>
      <Prices/>

      <Line/>
      <Application/>

      <Line/>
      <Footer/>
    </div>
  );
}

export default App;
