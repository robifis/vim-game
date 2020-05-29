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

const MediumQuestions = [
    { command: "Remove character before cursor", key: "X" },
    { command: "Change Word", key: "cw" },
    { command: "Select entire line", key: "V" },
    { command: "Insert new line below cursor", key: "o" },
    { command: "Insert new line below cursor", key: "O" },
    { command: "Change entire Line", key: "cc" },
    { command: "Change inside word", key: "ciw" },
    { command: "Change inside ( ) ", key: "ci(" },
    { command: "Change inside { } ", key: "ci{" },
    { command: 'Change inside " " {', key: 'ci"' },
    { command: "Change inside < > {", key: 'ci"' },
    { command: "Delete inside { }", key: "di{" },
    { command: "Delete inside ( )", key: "di(" },
    { command: 'Delete inside ""', key: 'di"' },
    { command: "Delete inside <>", key: "di<" },
    { command: "Delete entire Line", key: "dd" },
    { command: "Delete inside word", key: "diw" },
    { command: "Replace single character", key: "r" },
    { command: "Replace multiple characters", key: "R" },
    { command: "Delete to end of line", key: "D" },
    { command: "Paste after cursor", key: "p" },
    { command: "Paste before cursor", key: "P" },
    { command: "Search text", key: "/" },
    { command: "Search text backwards", key: "?" },
    { command: "Jump to next search result", key: "n" },
    { command: "Jump to previous search result", key: "N" },
    { command: "Change case of character", key: "~" },
    { command: "Split window vertically", key: ":vsplit" }
];

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
export { EasyQuestions, MediumQuestions, HardQuestions };
