import React from "react";

export default function Footer() {
  return (
    <div className="h-auto pt-4 ">
      <div className="flex justify-between container min-h-full">
        <ul className="flex">
          <li className="mr-5">
            <a
              className="hover:no-underline hover:text-gruvbox-orange"
              href="https://github.com/robifis/vim-game"
            >
              Github
            </a>
          </li>
          <li className="mr-5">
            <a
              className="hover:text-gruvbox-orange hover:no-underline"
              href="mailto: bobby@olejnik.dev"
            >
              Contact
            </a>
          </li>
          <li className="mr-5">
            <a
              className="hover:text-gruvbox-orange hover:no-underline"
              href="https://github.com/morhetz/gruvbox"
            >
              Colorscheme
            </a>
          </li>
          <li className="mr-5">
            <a
              className="hover:text-gruvbox-orange hover:no-underline"
              href="https://vim.rtorr.com/"
            >
              Reference
            </a>
          </li>
        </ul>
        <p>All Right Reserverd: Bobby Olejnik 2020</p>
      </div>
    </div>
  );
}
