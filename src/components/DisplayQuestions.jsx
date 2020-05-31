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
    const [bv, setBV] = useState(inputValue);

    function random() {
        if (bv === "Easy") {
            setRandomCommand(
                EasyQuestions[Math.floor(Math.random() * EasyQuestions.length)]
            );
        }
        if (bv === "Medium") {
            setRandomCommand(
                MediumQuestions[
                    Math.floor(Math.random() * MediumQuestions.length)
                ]
            );
        }
        if (bv === "Hard") {
            setRandomCommand(
                HardQuestions[Math.floor(Math.random() * HardQuestions.length)]
            );
        }
    }

    function goHome() {
        reset();
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
            <div>
                <div className="jumbotron">
                    <h1>You have selected {inputValue}</h1>
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
                                value={input}
                                onChange={e => setInput(e.target.value)}
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
            </div>
        );
    }
}
