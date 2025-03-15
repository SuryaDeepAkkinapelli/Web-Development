function p(name) {
    console.log("Hey I am " +name+" and i am nice ");
    console.log("Hey I am " +name+" and i am good ");   
}
p("surya")
p("Ajay")
function sum(a,b,c=3) {
    // console.log(a+b);
    console.log(a,b,c);
    return a+b+c;
}
//Here in sum function a,b are required parameters c is optional parameter
result1=sum(2)
//JS returns NaN(Not A Number) if required argument is not passed
result2=sum(2,7)
result3=sum(2,5,12)

console.log("The sum is "+result1);
console.log("The sum is "+result2);
console.log("The sum is "+result3);

//Arrow function(we can store a function in a variable)

const func1=(x)=>{
    console.log("The number passed in arrow function is: ",x);
}
func1(34);
func1(334);
func1(36);