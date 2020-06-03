import React from "react";
import SelectedDifficulty from "./components/SelectDifficulty";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="h-screen font-sans text-gruvbox-grey bg-gruvbox-bg">
      <nav className="flex flex-wrap w-full p-4 text-gruvbox-bg bg-gruvbox-orange">
        <div className="container flex flex-wrap items-center justify-between">
          <a href="/">
            <img src="https://www.vim.org/images/vim_editor.gif" />
          </a>
          <div className="block ">
            <ul className="flex ">
              <li className="m-auto mr-3 ">
                <a
                  className="p-6 text-xl rounded hover:no-underline hover:bg-gruvbox-bg hover:text-gruvbox-orange"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="m-auto mr-3 ">
                <a
                  className="p-6 text-xl rounded hover:no-underline hover:bg-gruvbox-bg hover:text-gruvbox-orange"
                  href="!#"
                >
                  About
                </a>
              </li>
              <li className="m-auto mr-3 ">
                <a
                  className="p-6 text-xl rounded hover:no-underline hover:bg-gruvbox-bg hover:text-gruvbox-orange"
                  href="!#"
                >
                  Contact
                </a>
              </li>
              <li className="m-auto mr-3 ">
                <a
                  className="p-6 text-xl rounded hover:no-underline hover:bg-gruvbox-bg hover:text-gruvbox-orange"
                  href="!#"
                >
                  Reference
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SelectedDifficulty />
      <Footer />
    </div>
  );
}
