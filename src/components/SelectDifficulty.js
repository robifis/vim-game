import React, { useState } from "react";
import DisplayQuestions from "../components/DisplayQuestions.jsx";
import {
  EasyQuestions,
  MediumQuestions,
  HardQuestions
} from "../data/Commands";

export default function SelectedDifficulty() {
  const [inputValue, setInputValue] = useState("");
  const [userInput, setUserInput] = useState("");
  function reset() {
    setInputValue("");
  }

  const difficulties = ["easy", "Easy", "medium", "Medium", "hard", "Hard"];
  const checkDifficulty = event => {
    event.preventDefault();
    setUserInput(inputValue);
  };

  if (userInput === "Easy" || userInput === "easy") {
    return (
      <div>
        <DisplayQuestions
          reset={reset}
          inputValue={inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}
          EasyQuestions={EasyQuestions}
        />
      </div>
    );
  }
  if (userInput === "Medium" || userInput === "medium") {
    return (
      <div>
        <DisplayQuestions
          reset={reset}
          MediumQuestions={MediumQuestions}
          inputValue={inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}
        />
      </div>
    );
  }
  if (userInput === "Hard" || userInput === "hard") {
    return (
      <div>
        <DisplayQuestions
          reset={reset}
          HardQuestions={HardQuestions}
          inputValue={inputValue.charAt(0).toUpperCase() + inputValue.slice(1)}
        />
      </div>
    );
  }

  if (!inputValue.includes(difficulties)) {
    return (
      <div className="container flex">
        <div className="">
          <h1 className="text-6xl text-gruvbox-aqua">How To Quit VIM!</h1>
          <p className="pb-5 text-justify leading-8">
            What Is Vim? Vim is a highly configurable text editor built to
            enable efficient text editing. It is an improved version of the vi
            editor distributed with most UNIX systems. Vim is often called a
            "programmer's editor," and so useful for programming that many
            consider it an entire IDE. It's not just for programmers, though.
            Vim is perfect for all kinds of text editing, from composing email
            to editing configuration files. Despite what the above comic
            suggests, Vim can be configured to work in a very simple
            (Notepad-like) way, called evim or Easy Vim.
          </p>
          <form onSubmit={checkDifficulty}>
            <input
              autoFocus
              className="w-full px-2 py-3 text-2xl rounded text-gruvbox-bg"
              type="text"
              value={inputValue}
              placeholder="Enter a difficulty: Easy, Medium or Hard"
              onChange={e => setInputValue(e.target.value)}
            />
          </form>
        </div>
      </div>
    );
  }
}
