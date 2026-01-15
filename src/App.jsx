import React from "react";
import Navbar from "./components/layout/Navbar";
import MainRoutes from "./routes/Mainroutes";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div className="bg-(--bg-light) min-h-screen font-sans text-(--text-main)">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
