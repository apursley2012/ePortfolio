const terminal = document.getElementById("terminal-output");

const introTitle = "Welcome to My Software Development ePortfolio";
const introSubtitle = "This is my Software Development ePortfolio site. Here you will find the projects and enhancements I have created while working toward my CS bachelor’s in Software Development.";

const terminalLines = [
  "> help",
  "Available commands:",
  "→ self-assessment",
  "→ code-review",
  "→ narratives",
  "→ artifacts",
  "",
  "Click a command to continue..."
];

const links = {
  "self-assessment": "self-assessment.html",
  "code-review": "code-review.html",
  "narratives": "narratives.html",
  "artifacts": "artifacts.html"
};

function typeText(targetId, text, delay, callback) {
  let i = 0;
  const el = document.getElementById(targetId);
  function typeChar() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      setTimeout(typeChar, delay);
    } else if (callback) {
      callback();
    }
  }
  typeChar();
}

let terminalIndex = 0;

function typeTerminalLine(line, callback) {
  let i = 0;
  const div = document.createElement("div");

  function typeChar() {
    if (i < line.length) {
      div.textContent += line[i];
      i++;
      setTimeout(typeChar, 30);
    } else {
      terminal.appendChild(div);
      callback();
    }
  }

  terminal.appendChild(div);
  typeChar();
}

function typeAllTerminalLines() {
  if (terminalIndex < terminalLines.length) {
    typeTerminalLine(terminalLines[terminalIndex], () => {
      terminalIndex++;
      typeAllTerminalLines();
    });
  } else {
    showLinks();
  }
}

function showLinks() {
  Object.keys(links).forEach(cmd => {
    const a = document.createElement("a");
    a.href = links[cmd];
    a.textContent = `> ${cmd}`;
    terminal.appendChild(a);
  });
}

window.onload = () => {
  typeText("type-title", introTitle, 30, () => {
    typeText("type-subtitle", introSubtitle, 20, () => {
      typeAllTerminalLines();
    });
  });
};
