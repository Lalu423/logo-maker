const {Circle, Triangle, Square} = require ('./shapes')


class SVG {
    constructor(shape, text, shapeColor, textColor){
        this.shape = shape
        this.text = text;
        this.shapeColor = shapeColor
        //this.shapeElement = new Circle(shapeColor);
        this.textColor = textColor
        this.shapeEl = this.getShape().render()
    }

getShape(){
    switch(this.shape){
        case "circle": return new Circle(this.shapeColor);
        case "triangle": return new Triangle(this.shapeColor);
        case "square": return new Square(this.shapeColor);
        //default: return new Circle(this.shapeColor)
    }
}



    render(){

return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`

    }
}

module.exports = SVG