// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "name",
  },
  {
    type: "input",
    message: "Enter a brief description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Enter any specific installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter any usage of project:",
    name: "usage",
  },
  {
    type: "list",
    message: "Select a icense:",
    choices: ["Apache 2.0", "Boost 1.0", "none"],
    name: "license",
  },
  {
    type: "input",
    message: "Enter any contribution guidlines:",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter any test instructions:",
    name: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    console.log(generateMarkdown(data));
    const fileName = "README.md";

    writeToFile(fileName, generateMarkdown(data));
  });
}

// Function call to initialize app
init();
