import React, { useState } from "react";
import Easy from "./Easy.jsx";
import Medium from "./Medium";
import Hard from "./Hard";

export default function SelectedDifficulty() {
    const [buttonValue, setButtonValue] = useState("");

    function difficulty(e) {
        setButtonValue(e.target.value);
    }
    function reset() {
        setButtonValue("");
    }

    if (buttonValue === "easy") {
        return (
            <div>
                <Easy reset={reset} />
            </div>
        );
    }
    if (buttonValue === "medium") {
        return (
            <div>
                <Medium reset={reset} />
            </div>
        );
    }
    if (buttonValue === "hard") {
        return (
            <div>
                <Hard reset={reset} />
            </div>
        );
    } else {
        return (
            <div className="d-flex justify-content-center">
                <button
                    className="btn btn-outline-success mx-3 btn-lg"
                    value={"easy"}
                    onClick={difficulty}
                >
                    Easy
                </button>
                <button
                    className="btn btn-outline-warning mx-3 btn-lg"
                    value={"medium"}
                    onClick={difficulty}
                >
                    Medium
                </button>
                <button
                    className="btn btn-outline-danger mx-3 btn-lg"
                    value={"hard"}
                    onClick={difficulty}
                >
                    Hard
                </button>
            </div>
        );
    }
}
