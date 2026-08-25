import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ContextCursor from "./components/ContextCursor";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import PortfolioCategory from "./pages/PortfolioCategory";
import Servicios from "./pages/Servicios";
import SobreMi from "./pages/SobreMi";
import MisFotos from "./pages/MisFotos";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ContextCursor />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Portfolio />} />
          <Route path="/portafolio/:slug" element={<PortfolioCategory />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/mis-fotos" element={<MisFotos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
