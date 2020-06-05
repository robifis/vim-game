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
      <div className="flex bg-gruvbox-bg">
        <div className="container pb-3">
          <div className="flex">
            <div className="w-1/2 pr-3">
              <h1 className="text-5xl text-gruvbox-aqua">How To Quit VIM!</h1>
              <p className="pb-5 text-justify leading-8">
                How to Quit Vim is a passion project designed to improve your VIM skills.
                The sole purpose of the project is to learn all 
              </p>
            </div>
            <div className="flex w-1/2 pl-3 m-auto">
              <img src="https://i.imgur.com/GkIl8Fn.png" />
            </div>
          </div>
          <div className="pb-3">
            <h1 className="text-gruvbox-orange">Ready to Play?</h1>
            <form onSubmit={checkDifficulty}>
              <input
                autoFocus
                className="w-full px-2 py-3 text-2xl rounded text-gruvbox-bg"
                type="text"
                value={inputValue}
                placeholder="Enter a difficulty: Easy, Medium, Hard"
                onChange={e => setInputValue(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
