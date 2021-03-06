const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//const { runInContext } = require("vm");
const path = require("path");
const { type } = require("os");

const employeesArray = [];

//const idArray = [];



//function employees() {
function addManagerPosition() {
    console.log("Please pick employee position");
    inquirer.prompt([
    {
        
    type: "input",
    name: "officeNumber",
    message: "Please enter team manager's office numbers",
        
    },
    
    {
    type: "input",
    message:"what is your team manager's name?",
    name: "name"
    },
    {
    type: "input",
    message: "What is your team manager's email address?",
    name: "email"


    },
    {
    type:"input",
    message:"What is your team manager's ID?",
    name: "id"

    }
    
])
    .then(answers => {
        const manager = new Manager(answers.officeNumber)
        employeesArray.push(manager);
        createTeam();

    });

}; 

function addEngineerPosition() {
    console.log("Please pick employee position");
    inquirer.prompt([

        {
        type: "input",
        name: "githubUserName",
        message: "Please enter engineer's GitHub User Name",
       
        },
    
        {
        
            type: "input",
            name: "name",
            message:"Please enter your engineer's name"

        },
        {
            type: "input",
            name: "id",
            message: "please enter your engineer's id"


        },
        {
            type: "input",
            name:"email",
            message: "please enter your engineer's email address"
        }

    ])


    
    


    .then(answers => {
        const engineer = new Engineer(answers.githubUserName)
        employeesArray.push(engineer);
        createTeam();
    });

};


function addInternPosition() {
    console.log("Please pick employee position");
    inquirer.prompt([

        {
        type: "input",
        name: "internSchool",
        message: "Please enter intern's school",
        },
        {

        type: "input",
        name:"name",
        message:"please enter your intern's name"


        },
        {
            type:"input",
            name: "id",
            message:"Please enter your intern's id"

        },
        {
            type:"input",
            name:"email",
            message:"please enter your intern's email address"
        }

    ])
    
    
    .then(answers => {
        const intern = new Intern(answers.internSchool)
        employeesArray.push(intern);
        createTeam();
    });
};





function createTeam() {
    inquirer.prompt({
        type: "list",
        name: "position",
        message: "Please select team member position",
        choices: [
            "Engineer",
            "Manager",
            "Intern",
            "complete"
        ]

    }).then(positionChoice => {
        switch (positionChoice.position) {


            case "Engineer":
                addEngineerPosition();
                break;
            case "Manager":
                addManagerPosition();
                break;
            case "Intern":
                addInternPosition();
                break;
            case "complete":
                displayHTML();





        }

    })
};
//}

function generateHTML(html) {
    let htmlStructure;
    for (i = 0; i < employeesArray.length; i++) {
         htmlStructure =

            `<!DOCTYPE html>
  

                
    <html lang = eng>
    
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible content=ie=edge">
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

       
    
    
    
    </style>
    </head>

    <body>

            <nav class="navbar navbar-light bg-dark mb-7">
                <span class="navbar-brand mb-0 h1 w-100 text-center text-danger">Team Generator</span>
            </nav>
    
        <div class=cardrow>
             ${html.join()}   
        </div>


    
    </body>

    </html>

    `;
    }

    fs.writeFile('./newhtml.html', htmlStructure, function (err) {
        if (err) throw err;
    }
    );


}
function displayHTML() {

    htmlArray = [];
    // let html = ""
    for (i = 0; i < employeesArray.length; i++) {
        console.log(employeesArray);
        htmlArray[i] = `<div class="card mx-auto mb-3" style="width: 500px;">
        <div class=card-header>
        
            <h3>${employeesArray[i].name}</h3>

        </div>

        <div class=card-header>

            <h4>${employeesArray[i].title}</h4>

        

        <ul class=list>
            <li class=list-1>${employeesArray[i].id}</li>
            <li class=list-1>${employeesArray[i].email}</li>
        </ul>  
        </div>`

        generateHTML(htmlArray);

    }





}





createTeam();






