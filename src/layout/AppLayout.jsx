import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const AppLayout = () => {
  const location = useLocation();
  const element = useOutlet();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 md:pt-15">
        <AnimatePresence mode="wait" initial={false}>
          {element && React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};
