import './App.css'
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import RatingSection from "./components/RatingSection";
import Footer from './components/Footer';
import AppBar from './components/AppBar';
import RegisterSection from './components/RegisterSection';
import LoginSection from './components/LoginSection';


function App() {
  return (
    <div className="App">
      <AppBar />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <FaqSection />
      <RatingSection />
      <RegisterSection />
      <LoginSection />
      <Footer />
    </div>
  );
}

export default App;
