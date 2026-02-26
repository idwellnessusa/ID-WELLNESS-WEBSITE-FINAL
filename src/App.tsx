import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ServicePage from './pages/ServicePage';
import Services from './pages/Services';
import BeforeAfter from './pages/BeforeAfter';
import Contact from './pages/Contact';
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="service/:id" element={<ServicePage />} />
          <Route path="before-after" element={<BeforeAfter />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
