import { Route, Routes, useLocation } from "react-router-dom";
import Lenis from "lenis";
import Nav from "./Nav";
import Contact from "./Contact";
import Home from "./Home";
import Work from "./Work";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import ScrollToTop from "./scrollToTop";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const location = useLocation();
  return (
    <div>
      <Nav></Nav>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/work" element={<Work></Work>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        <ScrollToTop />
      </AnimatePresence>
    </div>
  );
};

export default App;
