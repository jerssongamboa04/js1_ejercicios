

// =======================EJERCICIOS=======================================================



// Exercise: Level 1


// Declare a variable named challenge and assign it to an initial value 'Long Days Of JavaScript'.
let challenge = "Long Days Of JavaScript";

// Print the string on the browser console using console.log()
console.log(challenge);
// Print the length of the string on the browser console using console.log()
console.log(challenge.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLocaleLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(0,4));

// Slice out the phrase Days Of JavaScript from Long Days Of JavaScript.
console.log(challenge.slice(5,12));

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

// Split the string into an array using split() method
console.log(challenge.split(''));

// Split the string Long Days Of JavaScript at the space using split() method
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let ejercicio = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(ejercicio.split(','));

// Change Long Days Of JavaScript to Long Days Of Python using replace() method.
console.log(challenge.replace('JavaScript','Python'));

// What is character at index 15 in 'Long Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15));

// What is the character code of J in 'Long Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt('j'));

// Use indexOf to determine the position of the first occurrence of a in Long Days Of JavaScript
console.log(challenge.indexOf('a'));

// Use lastIndexOf to determine the position of the last occurrence of a in Long Days Of JavaScript.
console.log(challenge.lastIndexOf('a'));

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let ejercicio2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(ejercicio2.indexOf('because'));

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(ejercicio2.indexOf('because'));
console.log(ejercicio2.search('because'));

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(ejercicio2.lastIndexOf('because'));

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Long Days Of JavaScript '.
console.log(challenge.trim(' '));

// Use startsWith() method with the string Long Days Of JavaScript and make the result true
console.log(challenge.startsWith('Long'));

// Use endsWith() method with the string Long Days Of JavaScript and make the result true
console.log(challenge.endsWith('JavaScript'));

// Use match() method to find all the a’s in Long Days Of JavaScript
console.log(challenge.match('a'));

// Use concat() and merge ‘Long Days of' and 'JavaScript' to a single string, 'Long Days Of JavaScript'
console.log(challenge.concat(' Long Days of','JavaScript'));

// Use repeat() method to print Long Days Of JavaScript 2 times
console.log(challenge.repeat(2));


// ================EJERCICIOS BLOQUE 2=================================



// ### Exercise: Level 2
// 1.  Using console.log() print out the following statement:
//     The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let bloque2 = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another';
console.log(bloque2)

//     2.  Using console.log() print out the following quote by Mother Teresa:
//     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let bloque3 = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(bloque3)

// 3.  Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let ejercicio4 = '10'
console.log(typeof ejercicio4)
console.log(ejercicio4.replace('10',10));

// 4.  Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let parseFloat2 = '9.8';
let parseFloat3 = 10
console.log(parseFloat2 == parseFloat3);
console.log(Math.ceil(parseFloat2)); 

    
// 5.  Check if 'on' is found in both python and jargon

let dragon = 'dragon'
let python = 'python'

console.log((dragon.includes('on')&&python.includes("on")));

// 6.  _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.

let text ="I hope this course is not full of jargon_";
console.log(text.includes('jargon_'))
    
// 7.  Generate a random number between 0 and 100 inclusively.

let  random = Math.floor(Math.random() * 101);
console.log(random);

// 8.  Generate a random number between 50 and 100 inclusively.
let random2 = Math.floor(Math.random() * (50 - 100 + 1) ) + 50;
console.log(random2)

// 9.  Generate a random number between 0 and 255 inclusively.
let random3 = Math.floor(Math.random() * (0 - 255 + 1) ) + 0;

// 10.  Access the 'JavaScript' string characters using a random number.
    
let string = 'JavaScript'
let numeroAleatorio = Math.floor(Math.random()* string.length);
 console.log(string[numeroAleatorio]);
 console.log(string[4]);


// 11.  Use console.log() and escape characters to print the following pattern.
    
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);

//     1 1 1 1 1
//     2 1 2 4 8
//     3 1 3 9 27
//     4 1 4 16 64
//     5 1 5 25 125
    
// 12.  Use **substr** to slice out the phrase **because because because** from the following sentence:**
// 'You cannot end a sentence with because because because is a conjunction'**
    
let text3 = 'You cannot end a sentence with because because because is a conjunction';

console.log(text3.substr(31,23));


// ### [](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md#exercises-level-3)










