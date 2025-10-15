import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import SamplePage from "./pages/SamplePage";
import Homepage from "./pages/Homepage";
import VraiHomepage from "./pages/Vraihomepage";
import JewelryPage from "./pages/JewelryPage";
import DiamondPage from "./pages/DiamondPage";
import JewelryDetailPage from "./pages/JewelryDetailPage";
import DiamondDetailsPage from "./pages/DiamondDetailsPage";
// import CollectionsPage from "./pages/CollectionsPage";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <Router>
    
          <div className="min-h-screen flex flex-col bg-gray-50">
  
        <main className="flex-1">
          <Routes>
                     <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/diamonds" element={<DiamondPage />} />
            <Route path="/diamonds/:id" element={<DiamondDetailsPage />} />
            <Route path="/jewellery" element={<JewelryPage />} />
              <Route path="/jewellery/rings" element={<JewelryPage />} />
            <Route path="/jewelry/rings/:id" element={<JewelryDetailPage />} />
            <Route path="/lux" element={<VraiHomepage />} />

            </Route>
          </Routes>
        </main>


      </div>

    </Router>
  );
}
