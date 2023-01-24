// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages:number[] = []


// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = []


// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}


type Product = {
    name: string;
    price: number;
}

const newProduct: Product = {
    name: "coffee mug",
    price: 11.50
}

const secondProduct: Product = {
    name: "coffee",
    price: 3.99
}
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices


//the above is what I tried which is incorrect, solution below:

function getTotal(products: Product[]): number {
    let  total = 0;
    for(let product of products){
        total += product.price
    }
    return total;
}
