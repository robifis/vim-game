import React, { useState, useEffect } from "react";
import { HardQuestions } from "../data/Hard.js";

export default function Hard({ reset }) {
    const [inputValue, setInputValue] = useState("");
    const [score, setScore] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);
    const [randomCommand, setRandomCommand] = useState("");

    function random() {
        setRandomCommand(
            HardQuestions[Math.floor(Math.random() * HardQuestions.length)]
        );
    }

    function goHome() {
        reset();
    }

    // Check answer
    function checkAnswer(event) {
        event.preventDefault();
        if (inputValue === randomCommand.key) {
            setScore(score + 1);
            setInputValue("");
            random();
            setQuestionCount(questionCount + 1);
        } else {
            setInputValue("");
            random();
            setQuestionCount(questionCount + 1);
        }
    }
    useEffect(() => {
        random();
    }, []);

    if (questionCount <= 10) {
        return (
            <div>
                <h1>You have selected "Hard"</h1>
                <p>
                    This mode is designed to help you get familiar with the most
                    basic of VIM commands. The idea is to help you get
                    accoustomed to commands to open and close VIM, as well as to
                    be able to navigate around
                </p>
                <h2>
                    {randomCommand.command}
                    <small>Press "Enter to Skip"</small>
                </h2>
                <form onSubmit={checkAnswer}>
                    <input
                        type="text"
                        autoFocus
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Thank you for playing!</h1>
                <h2>You got {score} commands right</h2>
                <button>Play again</button>
                <button onClick={goHome}>Go Home</button>
            </div>
        );
    }
}
