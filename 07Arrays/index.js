let a = [1,2,3,4,5,6]
console.log(a ,typeof a);
a[0] = 123;
console.log(a[0])
console.log(a[5])
console.log(a[7])
console.log(a.length);

console.log(a.toString())//Converts an array to string separeted by commas

console.log(a.join("Surya"))//Joins the array elements by using a separator.Here surya is a separator

console.log(a.pop());//Pops last element of an array and returns the popped element
console.log(a);
console.log(a.push(100));// Pushes a element to the last index of an array and returns the new array length
console.log(a);

console.log(a.shift());//Pops first element of an array and returns the popped element
console.log(a);
console.log(a.unshift(123));// Pushes a element to the first index of an array and returns the new array length
console.log(a);

//Push and unshift are brothers and pop and shift are brothers

delete a[1];//Deletes element of the array but the memory allocated is still there
console.log(a);

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[9,8,7]
console.log(a1.concat(a2,a3));//Concatinates a2 and a3 to a1.Note that this returns a new array.It doesnot change any existing arrays

console.log(a3.sort());//Modifies the array

console.log(a1.splice(0,2,23,24))//returns deleted element and modifies the array
// 0 is the position to add.2 is the number of elements to be removed from index 0,23 and 24 are the numbers to be added in index 0 and 2(suitably).Length of array is also modified
console.log(a1)

