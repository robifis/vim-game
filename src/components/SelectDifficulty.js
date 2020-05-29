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
            <div>
                <button value={"easy"} onClick={difficulty}>
                    Easy
                </button>
                <button value={"medium"} onClick={difficulty}>
                    Medium
                </button>
                <button value={"hard"} onClick={difficulty}>
                    Hard
                </button>
            </div>
        );
    }
}
