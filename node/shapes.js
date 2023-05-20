class Circle {
    constructor(color) {
        this.color = color
    }

    render(){
        return `<circle cx="150" cy="100" r="90" fill="${this.color}"/>`
    }
}

module.exports = Circle

// class Triangle

// class Square