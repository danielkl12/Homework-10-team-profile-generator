const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { runInContext } = require("vm");

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
    .prompt(prompts);
    
}
//specific questions for manager
function managerQuestions() {
    const prompts = [{
        type: "input",
        message: "Please provide manager's office number.",
        name: "office"
    }];
    return inquirer
    .prompt(prompts);
}
//specific questions for intern
function internQuestions(){
    const promptArray = [{
        type: "input",
        message: "Please provide the school that the intern is attending currently",
        name: "internSchool"
    }];
    return inquirer
    .prompt(prompts);


}
//specific engineer questions
function engineerQuestions() {
    const prompts = [{
        type: "input",
        message: "Please provide GitHub username",
        name: "githubUserName"
    }];
    return inquirer
    .prompt(prompts);

    
}
//if(role) then return specific information for each
function position(employees) {
    if (employees.role==="manager") {
        console.log(employees.office);
        return `office: ${employees.office}`;

    }

    if (employees.role===intern) {
        console.log("internSchool");
        return `internSchool: ${employee.internSchool}`
    }

    if (employees.role===engineer) {
        console.log("githubUserName");
        return `githubUserName: ${employee.githubUserName}`
    }
}
//async funtion for deploying inquirer 
async function deploy() {
    let employees = [];
    const maxEmployees = 5;
    for (i=0; i<maxEmployees; i++){
            const promiseAsyncFunction = new Promise
    }
}

//html card
function displayHTML () {
    let html = ""
    for (i = 0; i < maxEmployees; i++) {
        console.log(employees[i])
        html += `<div class="card mx-auto mb-3" style="width: 40px;">
        <div class=card-header>
        
            <h3>${employees[i].name}</h3>

        </div>

        <div class=card-header>

            <h4>${employees[i].title}</h4>

        

        <ul class="list>
            <li class=list-1>: ${employees[i].id}</li>
            <li class=list-1>: ${employees[i].title}</li>
            <li class=list-1>: ${employees[i].email}</li>
        </ul>  
        </div>`

        return html
    }

    let generateHTML = `<!DOCTYPE html>
                
    <html lang = eng>
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"
    <meta http-equiv="X-UA-Compatible" content=ie=edge"
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">


    <title>Team Generator</title>

    <style>
        .card {
            border-radius: 3px;
            background-color: blue;
            color: white;
            margin: 15px;
            padding: 20px;

        }

        .card-header {
            text-align: center;

        }

        .list {
            text-align: center;
        }

        .cardrow {
            display: flex;
            flexwrap: wrap;
            justify-content: center;
        }
    
    
    
    </style>
    </head>

    <body>

            <nav class="navbar navbar-light bg-dark mb-7">
                <span class="navbar-brand mb-0 h1 w-100 text-center text-danger">Team Generator</span>
            </nav>
    
        <div class=cardrow>
                ${generateHTML()}
        </div>


    
    </body>

    </html>

    `;

    fs.writeFile('newhtml.html', html, function(err) {
        if (err) throw err;
    }
    );



}

deploy();