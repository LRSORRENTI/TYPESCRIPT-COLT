let movieTitle: string = "Amadeus";
movieTitle = "Arrival";

let catLives: number = 9
catLives += 1;

let gameOver: boolean = false;
gameOver = true;
gameOver = "true"

//type inferece
let tvShow = "Initial D";
tvShow = "Breaking Bad"
//no problem, tvShow is now breaking bad
tvShow = false
//problem, Type 'boolean' is not assignable to type 'string'.ts(2
let isFunny = false;
isFunny = true 
isFunny = 'abs'

//the any type
let thing: any = "hello"
thing = 1 
thing = [7, 3, 5]
thing = { key: "Value"}

let things = "hey"
things = () => {}