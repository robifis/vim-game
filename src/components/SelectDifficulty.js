import React, { useState } from "react";
import DisplayQuestions from "../components/DisplayQuestions.jsx";
import {
    EasyQuestions,
    MediumQuestions,
    HardQuestions
} from "../data/Commands";

export default function SelectedDifficulty() {
    const [inputValue, setInputValue] = useState("");
    function reset() {
        setInputValue("");
    }

    if (inputValue === "Easy" || inputValue === "easy") {
        return (
            <div>
                <DisplayQuestions
                    reset={reset}
                    inputValue={
                        inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
                    }
                    EasyQuestions={EasyQuestions}
                />
            </div>
        );
    }
    if (inputValue === "Medium" || inputValue === "medium") {
        return (
            <div>
                <DisplayQuestions
                    reset={reset}
                    MediumQuestions={MediumQuestions}
                    inputValue={
                        inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
                    }
                />
            </div>
        );
    }
    if (inputValue === "Hard" || inputValue === "hard") {
        return (
            <div>
                <DisplayQuestions
                    reset={reset}
                    HardQuestions={HardQuestions}
                    inputValue={
                        inputValue.charAt(0).toUpperCase() + inputValue.slice(1)
                    }
                />
            </div>
        );
    } else {
        return (
            <div className="container">
                <h1>How To Quit VIM!</h1>
                <div className="form-group">
                    <input
                        autoFocus
                        className="form-control form-control-lg"
                        type="text"
                        value={inputValue}
                        placeholder="Enter a difficulty: Easy, Medium or Hard"
                        onChange={e => setInputValue(e.target.value)}
                    />
                </div>
            </div>
        );
    }
}
