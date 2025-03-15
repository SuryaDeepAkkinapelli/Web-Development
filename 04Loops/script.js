console.log("This is about loops");

let a=1;
//For loop

// for (let  i = 0; i < 5; i++) {
//     console.log(a+i);
// }

//Forin loop

obj={
    name:"Surya",
    Age:18,
    course:"Webdev"
}

for (const key in obj) {
        console.log(key,obj[key]);
}

//For of loop

// for (const c of "Surya") {
//     console.log(c);
    
// }

//While loop

// let i=1;
// while(i<6){
//     console.log(i);
//     i++;
// }

//Do-While loop
let j=0;
do {
    console.log(j);
    j++;
} while (j<6);