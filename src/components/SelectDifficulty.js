import React, { useState } from "react";
import DisplayQuestions from "../components/DisplayQuestions.jsx";
import {
    EasyQuestions,
    MediumQuestions,
    HardQuestions
} from "../data/Commands";

export default function SelectedDifficulty() {
    const [buttonValue, setButtonValue] = useState("");

    function difficulty(e) {
        setButtonValue(e.target.value);
    }
    function reset() {
        setButtonValue("");
    }

    if (buttonValue === "Easy") {
        return (
            <div>
                <DisplayQuestions
                    reset={reset}
                    EasyQuestions={EasyQuestions}
                    buttonValue={buttonValue}
                />
            </div>
        );
    }
    if (buttonValue === "Medium") {
        return (
            <div>
                <DisplayQuestions
                    reset={reset}
                    MediumQuestions={MediumQuestions}
                    buttonValue={buttonValue}
                />
            </div>
        );
    }
    if (buttonValue === "Hard") {
        return (
            <div>
                <DisplayQuestions
                    reset={reset}
                    HardQuestions={HardQuestions}
                    buttonValue={buttonValue}
                />
            </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-outline-success mx-3 btn-lg"
                    value={"Easy"}
                    onClick={difficulty}
                >
                    Easy
                </button>
                <button
                    className="btn btn-outline-warning mx-3 btn-lg"
                    value={"Medium"}
                    onClick={difficulty}
                >
                    Medium
                </button>
                <button
                    className="btn btn-outline-danger mx-3 btn-lg"
                    value={"Hard"}
                    onClick={difficulty}
                >
                    Hard
                </button>
            </div>
        );
    }
}
