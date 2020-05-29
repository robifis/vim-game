const EasyQuestions = [
    { key: "h", command: "move cursor left" },
    { key: "j", command: "move cursor down" },
    { key: "k", command: "move cursor up" },
    { key: "l", command: " move cursor right" },
    { key: "H", command: "move to top of screen" },
    { key: "M", command: "move to middle of screen" },
    { key: "L", command: "move to bottom of screen" },
    { key: "w", command: "jump forwards to the start of a word" },
    { key: "e", command: "jump forwards to the end of a word" },
    { key: "b", command: "jump backwards to the start of a word" },
    { key: "0", command: "jump to the start of the line" },
    { key: "^", command: "jump to the first non,blank character of the line" },
    { key: "$", command: "jump to the end of the line" },
    { key: "g_", command: "jump to the last non,blank character of the line" },
    { key: "gg", command: "go to the first line of the document" },
    { key: "G", command: " go to the last line of the document" },
    {
        key: "}",
        command: "jump to next paragraph (or function/block, when editing code)"
    },
    {
        key: "{",
        command:
            "jump to previous paragraph (or function/block, when editing code)"
    },
    { key: "zz", command: "center cursor on screen" }
];
export { EasyQuestions };
