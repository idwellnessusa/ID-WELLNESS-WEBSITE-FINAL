import { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Before & After', path: '/before-after' },
    { name: 'Store', path: '/#store' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-gold selection:text-white flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-full border-2 border-brand-gold flex items-center justify-center">
              <span className="font-serif text-xl text-brand-gold font-bold">id</span>
            </div>
            <span className="font-serif text-xl font-semibold tracking-wide hidden sm:block">
              Wellness Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium hover:text-brand-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
              <Calendar className="w-4 h-4" />
              Book Consultation
            </button>
            <button
              className="md:hidden p-2 text-brand-dark"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <nav className="flex flex-col gap-6 text-center">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-2xl font-serif hover:text-brand-gold transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <button className="mt-8 flex items-center justify-center gap-2 bg-brand-gold text-white px-8 py-4 rounded-full text-lg font-medium w-full">
              <Calendar className="w-5 h-5" />
              Book Consultation
            </button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full border-2 border-brand-gold flex items-center justify-center">
                <span className="font-serif text-xl text-brand-gold font-bold">id</span>
              </div>
              <span className="font-serif text-xl font-semibold tracking-wide">
                Wellness Clinic
              </span>
            </div>
            <p className="text-white/60 max-w-sm mb-8">
              Elevating your confidence through advanced dentistry and premium aesthetic wellness.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/10 hover:bg-brand-gold transition-colors cursor-pointer flex items-center justify-center"></div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-white/60">
              {['About Us', 'Our Services', 'Before & After', 'Patient Portal', 'Contact'].map((link) => (
                <li key={link}><Link to="/" className="hover:text-brand-gold transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60">
              <li>123 Wellness Blvd, Suite 100<br/>Beverly Hills, CA 90210</li>
              <li>(555) 123-4567</li>
              <li>hello@idwellnessclinic.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          &copy; {new Date().getFullYear()} ID Wellness Clinic. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
