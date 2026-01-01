
function getFullName()
{
	console.log(this);
	console.log(this.fullName);
}

var fullName = "ajelloul";

getFullName();

var student1 = {
	fullName: "massou",
	getFull_Name : getFullName,
	

};

console.log(student1);
