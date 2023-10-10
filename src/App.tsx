import About from './components/About';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const location = useLocation();
  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
