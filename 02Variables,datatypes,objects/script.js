console.log("This is first line of this js file")
// var a=5
// var b=4
// var c="Surya"
// console.log(a+b+8)
// console.log(typeof a,typeof b,typeof c)


// There are 3 variable declarations in JS
var total=50
var total=55
total=66
var boys=20
var girls=30

let total_fruits=10
// let total_fruits=11
total_fruits=11
let apples=8
let oranges=2

const total_clothes=5
// const total_clothes=10
// total_clothes=11
const shirts=2
const pant=3
console.log(total)
console.log(total_clothes)
console.log(total_fruits)
// var can be redeclared but let and const cant be redeclared,const neither be re-declared nor be updated,it's a constant value,you can give value only once.

//var is a global variable
//var=global scope
//let=local scope

//DATATYPES IN JS---------------------------------------
//7 primitive Datatypes
"I am Suryadeep"//string
23,63.33//number
true,false//boolean
let u=undefined
let n=null
let arr=["Apple","Banana","Oranges",true,12,23.33]//Array
console.log("First element in array: ",arr[2]);
let e1={ 
    name:"Srihari",
    age:18,
    Salary:100000000,
    "job role":"CEO"
};//Object
console.log("Name of CEO:",e1.name);
console.log("Age of CEO:",e1.age);
console.log("Salary of CEO:",e1.Salary);
console.log("Role of CEO:",e1["job role"]);
console.log(e1);

let newvar=123;
console.log("Datatype of newvar is :",typeof newvar);

//Operators in JS----------------------------------
//Arithmetic operators + - * / % ++ -- **(power operator)
console.log(100+5);
console.log(100-5);
console.log(100*5);
console.log(100/5);
console.log(100%5);
console.log(2**3);
let i=6
i++;
console.log(i);
i--;
console.log(i);
//Assignment operators = += *= /= -= %= **=
let c=5;
c+=4;
console.log(c)
c*=2;
console.log(c)
c/=2;
console.log(c)
c%=2;
console.log(c)

//Relational operators == === != !== > >= < <= ?
let b=4;
c="4";
console.log(b==c)
// == compares values
console.log(b===c)
//=== compares values as well as datatpes.
console.log(b!=c)
//Here b and c values are same so it returns false
console.log(b!==c)
//Here b and c values are same but not datatypes so it returns true
console.log(b>c)
console.log(b>=c)
//Ternary operator
console.log(b<c ? "Surya":"Ajay");
//Similar to if else

//Logical operators && || !
let d=5;
let e=6;
console.log(e>d && d<5 ?"Surya":"Ajay");
console.log(e>d || d<5 ?"Surya":"Ajay");
console.log(!e);

//Type operator
//typeof