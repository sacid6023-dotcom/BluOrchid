import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RoomsPage from "./pages/RoomsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import DisclaimerPage from "./pages/DisclaimerPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(
    window.location.pathname + window.location.search
  );

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname + window.location.search);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  const cleanPath = currentPath.split("?")[0];

  const renderPage = () => {
    switch (cleanPath) {
      case "/about":
        return <AboutPage navigate={navigate} />;
      case "/rooms":
        return <RoomsPage currentPath={currentPath} navigate={navigate} />;
      case "/facilities":
      case "/experience":
        return <FacilitiesPage navigate={navigate} />;
      case "/gallery":
        return <GalleryPage navigate={navigate} />;
      case "/contact":
        return <ContactPage navigate={navigate} />;
      case "/privacy-policy":
        return <PrivacyPolicyPage navigate={navigate} />;
      case "/terms-and-conditions":
        return <TermsPage navigate={navigate} />;
      case "/disclaimer":
        return <DisclaimerPage navigate={navigate} />;
      case "/":
      case "/home":
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="site">
      <Navbar currentPath={currentPath} navigate={navigate} />
      <main className="main-content-area">{renderPage()}</main>
      <Footer navigate={navigate} />
    </div>
  );
}