// FOR ALL EXERCISES WHERE YOU WORK WITH AN ARRAY, PRINT THE RESULTS AT EACH STEP!

/********************** Exercise 1 **********************/

// Go to a website of your choosing (a news site or a shopping site). Find examples of data that might be stored as arrays. Provide a description of the data below. 


//It looks like Etsy uses arrays, similarly to AirBnb or Amazon to store certain data. Items for sale in the online store are arranged in cards, and contain information like item name, product rating, shipping, price. Some others mentioned in the group included Shein, Aliexpress, and Temu. They all seem to follow similar patterns.


/********************** Exercise 2 **********************/
// Create an array of books to be sold in an online store. 

let booksForSale = ["Man's Search for Meaning", "Milk & Honey", "Sister Outsider", "The Prophet"];



/********************** Exercise 3 **********************/
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

// For the above array, log the string "bread" to the console.
console.log(shopping[0]);


// After the following code is run, what will happen? Console log the new array.
shopping[0] = "rice";
console.log(shopping);
//"rice is added to the beginning of the list at index 0, replacing "bread"

// Try changing the value "cheese" to "vegetables" using an index.

shopping[2] = "vegetables";
console.log(shopping);


// Log the value at index 2. Note that it is NOT the second value! Why is that?
console.log(shopping[2]);
//The value at index 2 is vegetables, because the count starts at 0

// Log the last value WITHOUT using a set number. That is, do NOT write: `shopping[4]`. You can use the `.length` to figure out what the last index is!

console.log(shopping[shopping.length - 1]);
// this logs the value 4, which is noodles

// Now write the same code in the square brackets, using the `.length` property to calculate the last index, only with the `gems` array below instead of `shopping`. The solution should give you the last value in ANY array!

const gems = ["ruby", "saphhire", "pearl", "steven", "amethyst", "garnet", "lapis lazuli", "peridot"]
console.log(gems[gems.length - 1]);


/********************** Exercise 4 **********************/

const cities = ["Oakland", "New York"];


// Use an array method to add Memphis to the END of the array.
cities.push("Memphis");

// Use an array method to add Phoenix to the END of the array.
cities.push("Phoenix");

// Use an array method to add Atlanta to the START of the array.
cities.unshift("Atlanta");

// Use an array method to add Chicago and Denver to the END of the array with one method call.
cities.push("Chicago", "Denver");

// Use an array method to remove the FIRST element of the array.
cities.shift();

// Use an array method to remove the LAST element of the array.
cities.pop();

// Log the final array to the console. It should look like this: ["Oakland", "New York", "Memphis", "Phoenix", "Chicago"]
console.log(cities);


/********************** Exercise 5 **********************/

const colors = ["red", "green", "blue", "yellow"];

// Use the slice method on the above array to produce the following array: ["red", "green", "blue"]

console.log(colors.slice(0, 3));

// Now use the slice method to produce the following array: ["green", "blue", "yellow"]

console.log(colors.slice(1, 4));

// Next use the slice method to produce the following array: ["red", "green"]

console.log(colors.slice(0, 2));



/********************** Exercise 6 **********************/

const numbers = [5, 1, 8, 3, 2, 7, 4, 6, 9];

// Sort the array in ascending order

numbers.sort(function(a, b) {return a - b});
console.log(numbers);




/********************** Exercise 7 **********************/
// The following array contains data about a user. How would you log the string 'Python' to the console?
const userMember = ["Dava Sorbel", 795, ['Python', 'JavaScript', 'Ruby']];

console.log(userMember[2][0]);

// How would you use that array to find the letter J? Remember that you can use indexes with arrays AND strings!

console.log(userMember[2][1][0]);

/********************** Exercise 8 **********************/

const cityString = "Detroit,Atlanta,Birmingham,New Haven,Dallas,San Diego,Portland";

// Now let's split the array at each comma. How would you create an array with each of the cities as a separate value?

cityString.split(",");
console.log(cityString.split(","));

const newCityString = cityString.split(",");



// What is the length of the new array?

newCityString.length;
console.log(newCityString.length);




// Log the array to the console


// How would you log the last city in the array to the console?

console.log(newCityString[newCityString.length - 1]);



// Using the .join() method, how would you turn the list of cities back into a sting with spaces after the commas?

evenNewerCityString = newCityString.join(", ");

console.log(evenNewerCityString);




/********************** Exercise 9 **********************/


let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.

myString['Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri'];
console.log(myString);

let myArray = myString.split("+");


// Store the length of the array in a variable called arrayLength.

let arrayLength = myArray.length;

// Store the last item in the array in a variable called lastItem.

let lastItem = myArray[myArray.length - 1];
console.log(lastItem);

// Remove the last item in the array.

myArray.pop();
console.log(myArray);



// Add two new names to the end of the array.

myArray.push("Aang", "Korra");
