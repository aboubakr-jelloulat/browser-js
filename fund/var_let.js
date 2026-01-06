// https://www.javascripttutorial.net/javascript-let/
// https://www.javascripttutorial.net/difference-between-var-and-let/

if (true)
{
	var x = 1337;
}
console.log(x); //  1337  var ignores { } blocks like if, for, while


function foo()
{
	var nb = 42;
}
// console.log(nb); // ERROR you can't 


if (true)
{
	let a = 19;
}
// console.log(a);  // you can't using let !!!



const a = 42;
// a = 1337; // you can't modify



function example() 
{
	if (true) 
	{
	  var x = 1337;
	  let y = 42;
	  const z = 19;
	}
  
	console.log(x); //  works
	// console.log(y); // error
	// console.log(z); //  error
}
example();


