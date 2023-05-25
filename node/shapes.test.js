const {Circle, Triangle, Square} = require('./shapes');

describe('Circle', () => {
    test('should return true if shape is circle', () => {
        const circle = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="90" fill="red"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">eee</text></svg>';
        const circleEl = new Circle();
        const circleRen = circleEl.render();
        expect(circleRen).toEqual(circle);
    })
})

