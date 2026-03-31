import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Coaching from './pages/Coaching';
import Training from './pages/Training';
import Consulting from './pages/Consulting';
import Contact from './pages/Contact';
import GetStarted from './pages/GetStarted';
import SmallBusiness from './pages/SmallBusiness';

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="coaching" element={<Coaching />} />
        <Route path="training" element={<Training />} />
        <Route path="consulting" element={<Consulting />} />
        <Route path="contact" element={<Contact />} />
        <Route path="get-started" element={<GetStarted />} />
        <Route path="small-business" element={<SmallBusiness />} />
      </Route>
    </Routes>
    </>
  );
}
