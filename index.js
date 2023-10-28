// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?'
},

{
    type: 'input',
    name: 'build',
    message: 'Why did you build this project?'
},

{
    type: 'input',
    name: 'motivation',
    message: 'What was your motivation?'
},

{
    type: 'input',
    name: 'problem',
    message: 'What problem does it solve?'
},

{
    type: 'input',
    name: 'learn',
    message: 'What did you learn?'
},

{
    type: 'input',
    name: 'standOut',
    message: 'What makes your project stand out?'
},

{
    type: 'input',
    name: 'Installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
},

{
    type: 'input',
    name: 'Usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.'
},

{
    type: 'input',
    name: 'Credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well'
},

{
    type: 'input',
    name: 'License',
    message: 'The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).'
},

{
    type: 'input',
    name: 'Badges',
    message: "Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time."
},

{
    type: 'input',
    name: 'Features',
    message: 'If your project has a lot of features, list them here.'
},

{
    type: 'input',
    name: 'How to Contribue',
    message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer."
},

{
    type: 'input',
    name: '',
    message: ''
},

{
    type: 'input',
    name: 'Tests',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
},










];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
