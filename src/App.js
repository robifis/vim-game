import React from "react";
import Footer from "./components/footer";
import Home from "./components/Home";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div className="h-screen font-sans text-gruvbox-grey bg-gruvbox-bg">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}
