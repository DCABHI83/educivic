import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png'


export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    if (isActive) {
      return "text-brand-gold font-medium border-b border-brand-gold pb-1 font-body text-[14px]";
    }
    return "text-body-text hover:text-brand-gold transition-colors duration-300 font-body text-[14px]";
  };

  const navLinks = [
    { name: "Programmes", path: "/programmes" },
    { name: "Ecosystem", path: "/ecosystem" },
    { name: "Partners", path: "/partners" },
    { name: "Insights", path: "/insights" },
    { name: "Compare", path: "/compare" },
    { name: "Scholars", path: "/stories" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "FAQs", path: "/faqs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-brand-cream/80 backdrop-blur-md flex justify-between items-center px-6 md:px-8  max-w-full mx-auto">
      <NavLink to={'/'} className=''>
<img src={logo} className="md:w-[10vw] w-[30vw] " alt="educivic_logo" />
      </NavLink>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-wrap justify-center">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={getLinkClass(link.path)}>{link.name}</Link>
          ))}
        </div>
        
        <div className="flex items-center gap-4 z-50">
          <Link to="/apply" className="hidden sm:block">
            <Button variant="primary" className="text-[14px]">
              Apply now
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-brand-navy p-2 cursor-pointer outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-brand-cream pt-24 pb-8 px-6 lg:hidden overflow-y-auto flex flex-col"
          >
            <div className="flex flex-col space-y-6 text-center mt-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  className={`text-2xl font-serif tracking-wide ${location.pathname === link.path ? 'text-brand-gold italic' : 'text-brand-navy'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 border-t border-brand-gold/20 flex justify-center w-full">
                <Link to="/apply" onClick={() => setIsMobileMenuOpen(false)} className="w-full max-w-sm">
                  <Button variant="primary" className="w-full text-lg py-4">
                    Apply now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
