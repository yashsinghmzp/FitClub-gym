import './App.css';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Plans from './components/plans/Plans';
import Program from './components/program/Program';

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />

    </div>
  );
}

export default App;
