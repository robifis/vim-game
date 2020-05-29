import React, { useState, useEffect } from "react";
import { EasyQuestions } from "../data/Easy.js";

export default function Easy({ reset }) {
    const [inputValue, setInputValue] = useState("");
    const [score, setScore] = useState(0);
    const [questionCount, setQuestionCount] = useState(0);
    const [randomCommand, setRandomCommand] = useState("");

    function random() {
        setRandomCommand(
            EasyQuestions[Math.floor(Math.random() * EasyQuestions.length)]
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
                <div className="jumbotron">
                    <h1>You have selected "Easy"</h1>
                    <p className="lead">
                        This mode is designed to help you get familiar with the
                        most basic of VIM commands. The idea is to help you get
                        accoustomed to commands to open and close VIM, as well
                        as to be able to navigate around
                    </p>
                </div>
                <div>
                    <div className="alert alert-danger">
                        <h2 className="text-center">{randomCommand.command}</h2>
                    </div>
                </div>

                <div>
                    <form onSubmit={checkAnswer}>
                        <div className="form-group">
                            <input
                                className="form-control form-control-lg"
                                placeholder="Enter your command"
                                type="text"
                                autoFocus
                                value={inputValue}
                                onChange={e => setInputValue(e.target.value)}
                            />
                            <small className="form-text text-muted text-center">
                                Press "Enter" to skip
                            </small>
                        </div>
                    </form>
                </div>
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
