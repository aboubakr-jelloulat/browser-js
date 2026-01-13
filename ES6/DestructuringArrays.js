const studentInfos = 
[
	1337,
	"ajelloul",
	"norge"
];

// old way

// const id 		= studentInfos[0];
// const name 		= studentInfos[1];
// const country 	= studentInfos[2];
// console.log(id, name, country);


// new : Destructuring Arrays
const [id, name, country] = studentInfos;
console.log(id, name, country);


/*
	what is diffrence between Destructuring Arrays & Destructuring Object

	* Array :  tratib mohim -order-

*/


console.log("\nhow update a value using Arrays Destructuring : \n");

let uk = 42;
console.log(uk);
const user = 
[
	19,
	"user1",
	"troms"
];

[uk] = user;
[,,city] = user;
console.log(uk);
console.log(city);

console.log("\nswap with array Destructuring : \n")
let a = 42, b = 1337;

console.log("a = ", a, " b = ", b );
[a, b] = [b, a];
console.log("a = ", a, " b = ", b );

console.log("\nNested Array : \n");



