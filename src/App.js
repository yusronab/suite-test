import './App.css';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Hero />
      </header>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
