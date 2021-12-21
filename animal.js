class Animal {
    constructor(type, color, age) {
        this.type = type;
        this.color = color;
        this.age = age;
    }

    greeting() {
        console.log(`My animal is a ${this.type} and its ${this.color}.`)
    }
}

module.exports = Animal;