"use strict";
// Next we'l go over another 
// functionality that only exists in TS, not JS
// an abstract class can't have any new instances 
// created, so what's the point? 
// We define methods that must be implemented by 
// a child of the abstract class, so It's a way 
// of guaranteeing that a child class is 100% using 
// the methods defined in the parent class, TS knows
// that it's being used, b/c if we add a method 
// to the cat class below, and a child of cat class 
// isn't using the methods from Cat, TS will alert 
// that there's a problem
class Cat {
    constructor(breed, age) {
        this.breed = breed;
        this.age = age;
    }
}
// Above we made meow() abstract, so any child 
// classes of Cat, must have meow()
class Bengal extends Cat {
    constructor(breed, age, cool) {
        super(breed, age);
    }
    meow() {
        return this.breed;
    }
}
// Essentially using the abstract prefix, any 
// children of that class must have that specific value 
// or method
