import './App.css'
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import RatingSection from "./components/RatingSection";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <RatingSection />
      <Footer />
    </div>
  );
}

export default App;
