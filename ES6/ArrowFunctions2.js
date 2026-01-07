

const incrementNumber = 
{
	Number: 42,
	increment : function()
	{
		setTimeout(function () {
			console.log(this.Number += 1);
		}.bind(this), 1000);
	}
}
/*
	.bind(this) means:

	Force this function to always use this = incrementNumber
*/
incrementNumber.increment();
incrementNumber.increment();
incrementNumber.increment();



const incrementNumberArrow = 
{
	Number: 1,
	increment ()
	{
		setTimeout( () => {
			console.log(this.Number += 1);
		}, 1000);
	}
}

incrementNumberArrow.increment();
incrementNumberArrow.increment();
incrementNumberArrow.increment();