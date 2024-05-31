"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <motion.div
            key={pathname}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
            transition={{ delay: 1, duration: 0.4, ease: "easeInOut" }}
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
          />
          {children}
        </div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
