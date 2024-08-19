import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";


const App: React.FC = () => {
  return (
    <div className="min-h-screen relative bg-[#f2f5fa]">
      <Header />
      <Dashboard />
    </div>
  );
};

export default App;
