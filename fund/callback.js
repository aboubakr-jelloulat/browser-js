

function hej()
{
	return "hej !";
}
function hello()
{
	return "hello !";
}
function bonjour()
{
	return "Bonjour !";
}


function foo(fn)
{
	return fn();
}

console.log(foo(hej));
console.log(foo(bonjour));


function multi(a, b)
{
	return a * b;
}
function sum(a, b)
{
	return a + b;
}

function randomize(a, b, callback)
{
	return callback(a, b);
}

let nb = randomize(10, 2, sum);
let sum_nb = randomize(5, 2, multi);

console.log(nb);
console.log(sum_nb);

