import { Routes, Route } from "react-router-dom";
import Navbar from './components/Normal/Navbar/Navbar';
import HomePage from './pages/HomePage/HomePage';
import { SliderProvider } from "./useContext/SliderContext";
import "./App.scss";
import './MediaQuery/MediaQuery.scss'
import Footer from "./components/Footer/Footer";
import AboutUsPage from './pages/AboutUsPage/AboutUsPage';
import GraduatesPage from "./pages/GraduatesPage/GraduatesPage";

function App() {
  return (
    <>
      <div className="all">
        <SliderProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/haqqimizda" element={<AboutUsPage />} />
            <Route path="/mezunlar" element={<GraduatesPage />} />
          </Routes>
          <Footer />
        </SliderProvider>
      </div>
    </>
  );
}

export default App;
