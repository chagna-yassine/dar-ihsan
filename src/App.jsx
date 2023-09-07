import NavBar from './NavBar/NavBar';
import Title from './Title/Title';
import Info from './Info/Info';
import ImageGallery from './Gallery/Gallery';
import Cards from './Cards/cards';
import About from './About/About';
import State from './State/State';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <Info />
      <ImageGallery />
      <Cards />
      <About />
      <State />
      <Contact />
    </div>
  );
}

export default App;
