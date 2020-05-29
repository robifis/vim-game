import React from "react";
import SelectedDifficulty from "./components/SelectDifficulty";
export default function App() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark mb-3 navbar-expand-lg ">
                <a className="navbar-brand">Vim Game</a>
            </nav>
            <div className="container">
                <SelectedDifficulty />
            </div>
        </div>
    );
}
