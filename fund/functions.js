

function foo(a, b)
{
	return a + b;
}
function say(name)
{
	console.log(`Hej ${name}`);
}


say("ajelloul");

console.log(foo(1, 41));


console.log("\n\n***  null vs undefined ***\n");

// undefined : A variable exists, but no value has been assigned yet
// null 	: Intentional absence of value (you set it yourself)

let x;
console.log(x);

let user  = null;
console.log(user);