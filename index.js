// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./Develop/utils/generateMarkdown.js')
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
    name: 'installation',
    message: 'What are the steps required to install your project?'
},

{
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use. Include screenshots as needed.'
},

{
    type: 'input',
    name: 'credits',
    message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well'
},

{
    type: 'input',
    name: 'license',
    message: 'The last section of a high-quality README file is the license. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).'
},

{
    type: 'input',
    name: 'badges',
    message: "Badges aren't necessary, per se, but they demonstrate street cred.Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time."
},

{
    type: 'input',
    name: 'features',
    message: 'If your project has a lot of features, list them here.'
},

{
    type: 'input',
    name: 'howToContribute',
    message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/)."
},

{
    type: 'input',
    name: 'tests',
    message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
}
]


inquirer.prompt(questions)
  .then(data => {
    const markdownContent = `
## Description
${data.build}
${data.motivation}
${data.problem}
${data.learn}
${data.standOut}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${data.license}

## Badges
${data.badges}

## Features
${data.features}

## How to Contribute
${data.howToContribute}

## Tests
${data.tests}
`;



    fs.writeFile('GeneratedREADME.md', markdownContent, err => {
        if (err) {
        console.error(err);
        } else {
        console.log('README file created: GeneratedREADME.md');
        }

    });

})


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
