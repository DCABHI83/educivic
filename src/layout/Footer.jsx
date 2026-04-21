import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo_another from '../assets/logo_another.png'
export const Footer = () => {
  return (
    <footer className=" bg-brand-cream/80 backdrop-blur-md w-full border-t border-brand-gold/15  py-12 px-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="space-y-4 text-center md:text-left">
          <NavLink to="/" className="text-2xl font-serif font-bold tracking-tight">
         <img src={logo_another} className="md:w-[8vw] w-[30vw]" alt="educivic_logo" />
          </NavLink>
          <p className="text-muted-text text-[10px] font-body uppercase  tracking-[0.2em] pl-2 max-w-xs">
            educivic by 3Fi Tech. Not a training institute.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-[12px] font-body uppercase text-black tracking-widest font-medium ">
          <Link to="/programmes" className="hover:text-brand-gold transition-colors">Programmes</Link>
          <Link to="/ecosystem" className="hover:text-brand-gold transition-colors">Ecosystem</Link>
          <Link to="/partners" className="hover:text-brand-gold transition-colors">Partners</Link>
          <Link to="/insights" className="hover:text-brand-gold transition-colors">Insights</Link>
          <Link to="/compare" className="hover:text-brand-gold transition-colors">Compare</Link>
          <Link to="/how-it-works" className="hover:text-brand-gold transition-colors">How it works</Link>
          <Link to="/stories" className="hover:text-brand-gold transition-colors">Scholars</Link>
          <Link to="/faqs" className="hover:text-brand-gold transition-colors">FAQs</Link>
          <Link to="/about" className="hover:text-brand-gold transition-colors">About</Link>
          <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link>
        </div>
        <div className="text-muted-text text-[12px] italic">
          educivic. — Not education. <span className="text-brand-gold font-bold">Employment.</span>
        </div>
      </div>
      <div className="text-center mt-12 text-body-text text-[10px] tracking-widest uppercase">
        &copy; {new Date().getFullYear()} 3FI TECH VENTURES. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};
