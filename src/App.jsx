import NavBar from './NavBar/NavBar';
import Title from './Title/Title';
import Info from './Info/Info';
import ImageGallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Title />
      <Info />
      <ImageGallery />
      <Contact />
    </div>
  );
}

export default App;
