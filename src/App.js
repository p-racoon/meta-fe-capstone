import Header from './components/Header/Header';
import IntroBanner from './components/IntroBanner/IntroBanner';
import Specials from './components/Specials/Specials';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';


function App() {
  return (
    <>
      <Header/>
      <main>
      <IntroBanner/>
      <Specials/>
      <Testimonials/>
      <About/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
