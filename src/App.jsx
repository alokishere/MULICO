import React from "react";
import Navbar from "./components/layout/Navbar";
import MainRoutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="bg-(--bg-light) min-h-screen font-sans text-(--text-main)">
      <Navbar />
      <MainRoutes/>
    </div>
  );
};

export default App;
