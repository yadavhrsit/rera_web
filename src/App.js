import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import RatingSection from "./components/RatingSection";
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <div className="App">
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <RatingSection />
      <Footer />
    </div>
  );
}

export default App;
