import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import useIsMobile from "@/hooks/useIsMobile";

const PageLayout = ({ children }) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Header isMobile={isMobile} />
      <main role="main" aria-label="Main Content">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
