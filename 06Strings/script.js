console.log("This is about strings");
//STRINGS ARE IMMUTABLE!!!!!!!!!!!!!!!!!!!!!!!!!
let a="Surya";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);//UNDEFINED

console.log(a.length)//Length of string
let friend="ajay"
console.log("His name is "+a+" and his bestfriend's name is "+friend);

//Template Literals  `(Backtick)
console.log(`His name is ${a} and his bestfriend's name is ${friend}`);
/*With Template literals it is possible to use both single and double quotes inside a string.We can insert variables directly in template literals.This is called string interpolation*/

console.log("Ajay said,\"I am good\".");
console.log("Surya\tdeep\nAkkinapelli");
console.log(a.toUpperCase());
console.log(a.toLowerCase());

console.log(a.slice(1,4));// prints characters Including index 1 to 3
console.log(friend.slice(1));//prints from index 1 to end of the string 

console.log(friend.replace("a","vi"));//First occurance of a is replaced with vi
console.log(friend.concat(a));//concatinates a to friend
console.log(friend.concat(a,"Mani"));//Concatinates a and "Mani" to friend

let f="        Ajay Kumar Reddy            ";
let new_f=f.trim();//Removes white spaces

console.log(f);
console.log(new_f);

console.log(new_f.charAt(0));

console.log(friend.indexOf("a"));
//Returns the index of first occurance of the character if no character is there,it return -1

console.log(friend.startsWith("aj"));
console.log(friend.startsWith("ay"));

console.log(friend.endsWith("ay"));
console.log(friend.endsWith("aj"));