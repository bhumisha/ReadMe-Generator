// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const writeToFile = require('./src/utils/generateReadMe') ;
const generateMarkdown = require('./src/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username (Required)',
        validate: username => {
            if (username) {
              return true;
            } else {
              console.log('Please enter your GitHub Username!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your Email Address (Required)',
        validate: email => {
            if (email) {
              return true;
            } else {
              console.log('Please enter your Email Address!');
              return false;
            }
          }
      }

    ]);
  };

  //Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  const promptProjectDetail = () => {
    return inquirer
    .prompt([
      /* Pass your questions in here */
        {
          type:"input",
          message :"What is your project's title? (Required)",
          name:"title",
          validate:title => {
            if (title) return true;
            else {
              console.log("Please enter project's title!");
              return false;
            }
          }
        },
        {
          type:"input",
          message :"Please write a short description about your project. (Required)",
          name:"projectDesc",
          validate: projectDesc => {
            if (projectDesc) return true;
            else {
              console.log('You need to write a project description!');
              return false;
            }
          }
        },
        {
          type:"list",
          message :"What kind of license should your project have?",
          choices : ["MIT","Apache 2.0","GNU GPLv3","BSD 3-Clause","None","Mozilla Public License 2.0"],
          name: "license" 
        },
        {
            type:"input",
            message :"What command should be run to install dependencies?",
            name:"installCommand",
            validate: installCommand => {
              if (installCommand) return true;
              else {
                console.log('You need to specify command to install dependencies!');
                return false;
              }
            }
        },
        {
          type:"input",
          message :"What command should be run to run tests?",
          name:"testCommand"
        },
        {
          type:"input",
          message :"What does user need to know about using the repo?",
          name:"usage"
        },
        {
          type:"checkbox",
          message :"What does user need to know about contributing to the repo?",
          choices : ["Submit bugs and feature requests, and help us verify as they are checked in","Review source code changes","Review the documentation and make pull requests for anything from typos to new content"],
          name:"contribute"
        }
      
    ]);
  }
promptUser()
    .then(promptProjectDetail)
    .then((data)=> {
      let fileName = "test.md";
      const readMeData = generateMarkdown(data);

      return writeToFile(fileName, readMeData);
    });
  


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
