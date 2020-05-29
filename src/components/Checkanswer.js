function checkAnswer(event) {
    event.preventDefault();
    if (input === randomCommand.key) {
        setScore(score + 1);
        setInput("");
        random();
    } else {
        setInput("");
        random();
    }
}
export { checkAnswer };
