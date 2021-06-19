const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

function init() {
    writeHtml();
    newTeamMember();
}

function newTeamMember() {
   // inquirer.prompt([{

   const prompts = [{
        message: "Please enter new team member's name.",
        name: "name"
    },
    {
        type: "list",
        name: "role",
        message: "Please select the new team members role",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ],
    },
    {
        type: "input",
        message: "What is the new team member's email address?",
        name: "email"
        
    },
    {
        type: "input",
        message: "What is the new team member's ID?",
        name: "id"
    }
];

    return inquirer
    .prompt(promptArray);
    
}

function managerQuestions() {
    const promptArray = [{
        type: "input",
        message: "Please provide manager's office number.",
        name: "office"
    }];
    return inquirer
    .prompt(promptArray);
}

function internQuestions(){
    const promptArray = [{
        type: "input",
        message: "Please provide the school that the intern is attending currently",
        name: "internSchool"
    }];
    return inquirer
    .prompt(promptArray);


}

function engineerQuestions() {
    const promptArray = [{
        type: "input",
        message: "Please provide GitHub username",
        name: "githubUserName"
    }];
    return inquirer
    .prompt(promptArray);

    
}

async function run() {
    let employees = [];
    const maxEmployees = 5;
    for (i=0; i<maxEmployees; i++){

    }
}