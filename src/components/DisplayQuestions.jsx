import React, { useState, useEffect } from "react";

export default function Easy({
  reset,
  EasyQuestions,
  MediumQuestions,
  HardQuestions,
  inputValue
}) {
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [randomCommand, setRandomCommand] = useState("");
  const [bv] = useState(inputValue);

  function random() {
    if (bv === "Easy") {
      setRandomCommand(
        EasyQuestions[Math.floor(Math.random() * EasyQuestions.length)]
      );
    }
    if (bv === "Medium") {
      setRandomCommand(
        MediumQuestions[Math.floor(Math.random() * MediumQuestions.length)]
      );
    }
    if (bv === "Hard") {
      setRandomCommand(
        HardQuestions[Math.floor(Math.random() * HardQuestions.length)]
      );
    }
  }

  // Check answer
  function checkAnswer(event) {
    event.preventDefault();
    if (input === randomCommand.key) {
      setScore(score + 1);
      setInput("");
      random();
      setQuestionCount(questionCount + 1);
    } else {
      setInput("");
      random();
      setQuestionCount(questionCount + 1);
    }
  }
  useEffect(() => {
    random();
  }, []);

  if (questionCount <= 10) {
    return (
      <div className="container flex ">
        <div className="min-w-full ">
          <h1>You have selected {inputValue}</h1>
          <div>
            <div className="">
              <h2 className="py-3 text-3xl text-gruvbox-orange ">
                {randomCommand.command}
              </h2>
            </div>
          </div>

          <form onSubmit={checkAnswer}>
            <div className="">
              <input
                className="w-full px-2 py-3 text-3xl rounded text-gruvbox-bg"
                placeholder="Enter your command"
                type="text"
                autoFocus
                value={input}
                onChange={e => setInput(e.target.value)}
              />
              <small className="text-center form-text text-muted">
                Press "Enter" to skip
              </small>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container flex h-screen">
        <div className="min-w-full m-auto">
          <h1 className="text-6xl">Thank you for playing!</h1>
          <h2 className="text-4xl">
            You got <span className="text-bold text-gruvbox-red">{score}</span>{" "}
            commands right
          </h2>
        </div>
      </div>
    );
  }
}
