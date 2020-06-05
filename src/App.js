import React from "react";
import SelectedDifficulty from "./components/SelectDifficulty";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="h-screen font-sans text-gruvbox-grey bg-gruvbox-dark_bg">
      <nav className="flex flex-wrap w-full p-2 text-gruvbox-bg bg-gruvbox-orange">
        <div className="container flex flex-wrap items-center justify-between">
          <a href="/">
            <img src="https://www.vim.org/images/vim_editor.gif" />
          </a>
        </div>
      </nav>
      <SelectedDifficulty />
      <Footer />
    </div>
  );
}
