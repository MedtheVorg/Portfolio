import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound';

const Main = () => {
  const location = useLocation();
  return (
    <main className="overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route caseSensitive path="/about" element={<About />} />
          <Route caseSensitive path="/projects" element={<Projects />} />
          <Route caseSensitive path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
};
export default Main;
