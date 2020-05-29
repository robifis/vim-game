const HardQuestions = [
    { command: "Move cursor to middle of Page", key: "M" },
    { command: "Move cursor to top of Page", key: "H" },
    { command: "Move cursor to bottom of Page", key: "L" },
    { command: "Move cursor to matching bracket", key: "%" },
    { command: "Mark current line with letter a", key: "ma" },
    { command: "Delete to end of sentence", key: "d)" },
    { command: "Delete all characters from cursor to end of line", key: "d$" },
    { command: "Delete current and previous line", key: "d-" },
    { command: "Move cursor to beginning of current sentence", key: "(" },
    { command: "Move cursor to beginning of next sentence", key: ")" },
    { command: "Move cursor to beginning of next paragraph", key: "}" },
    { command: "Move cursor to beginning of current paragraph", key: "{" },
    { command: "Search word under cursor", key: "*" },
    { command: "Invert case", key: "g~~" },
    { command: "Modify word case", key: "vE~" },
    { command: "Execute the pwd unix command then return to VIM", key: ":!pwd" }
];
export { HardQuestions };
