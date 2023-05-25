const {Circle, Triangle, Square} = require('./shapes');

describe('Circle', () => {
    test('should return true if shape is circle', () => {
        const circle = '<circle cx="150" cy="100" r="90" fill="undefined"/>';
        const circleEl = new Circle();
        const circleRen = circleEl.render();
        expect(circleRen).toEqual(circle);
    })
})

describe('Triangle', () => {
    test('should return true if shape is triangle', () => {
        const triangle = '<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="undefined"/>';
        const triangleEl = new Triangle();
        const triangleRen = triangleEl.render();
        expect(triangleRen).toEqual(triangle);
    })
})

describe('Square', () => {
    test('should return true if shape is square', () => {
        const square = '<rect x="50" height="200" width="200" fill="undefined"/>';
        const squareEl = new Square();
        const squareRen = squareEl.render();
        expect(squareRen).toEqual(square);
    })
})

