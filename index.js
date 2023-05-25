const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./node/SVG')
const Shape = require('./node/shapes')

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Type a 3 character logo title',

    },
    {
        type: 'input',
        name: 'shapeColor',
        message:"type a shape color"

    },
    {
        type: 'input',
        name: 'textColor',
        message:"type a text color"

    },
    {
        type: 'list',
        name: 'shape',
        message:"pick a shape",
        choices:["circle", "triangle", "square"], 

    },
   
    ])
    .then((answers) => {
        

const newSVG = new SVG(answers.shape, answers.title, answers.shapeColor, answers.textColor)
        fs.writeFile('logo.svg', newSVG.render(), (err) =>
        err ? console.log(err) : console.log('successfully created your logo.svg!')

        );
    });