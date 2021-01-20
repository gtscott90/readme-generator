// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "name",
        },
        {
            type: "input",
            message: "Enter a brief description of your project.",
            name: "description",
        },
        {
            type: "input",
            message: "Enter any specific installation instructions.",
            name: "installation",
        },
        {
            type: "input",
            message: "Enter any usage of project.",
            name: "usage",
        },
        {
            type: "input",
            message: "Enter any licensing informtion.",
            name: "license",
        },
        {
            type: "input",
            message: "Enter any contribution guidlines.",
            name: "contribution",
        },
        {
            type: "input",
            message: "Enter any test instructions.",
            name: "tests",
        },
    ])
    .then((data) => {
    console.log(data);
    const { name, description, installation, usage, license, contribution, tests } = data;
    console.log(name);
    const generateMD = 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
