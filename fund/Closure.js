
function foo()
{
	let greets = "hej js comunity!!!";

	function inner()
	{
		console.log(greets);
	}

	return inner;
}
const fn = foo();
fn();



function counter()
{
	let count = 0;

	return function ()
	{
		count ++;

		console.log(count);
	};

}

const func = counter();
func();
func();
func();
