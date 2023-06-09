import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import './App.css'
import RatingSection from "./components/RatingSection";


function App() {
  return (
    <div className="App">
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <RatingSection />
    </div>
  );
}

export default App;
