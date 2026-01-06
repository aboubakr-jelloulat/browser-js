
console.log("\n*** ex1 ***");
const add1 = function(a, b) 
{
	return a + b;
}
console.log(add1(6, 4));



console.log("\n*** ex2 ***");
const add2 = (a, b) => a + b;
console.log(add2(6, 4));



console.log("\n*** ex3 ***");
const SayHej = (fullName) => "Hej " + fullName;
console.log(SayHej("ajelloul"));



console.log("\n*** ex4 ***");
const SayHey = () => "Hey";
console.log(SayHey());



console.log("\n*** ex5 ***");
const Person = function(name, age)
{
	return {name, age}
}
const p1 = Person('ajelloul', 21);
console.log(p1.name);
console.log(p1.age);



console.log("\n*** ex6 ***");
const Humain = () => ({ name: 'Sander', age: 24 });
const H1 = Humain();
console.log(H1.name);
console.log(H1.age);




console.log("\n*** ex7 ***");
const getPersonInfo = function()
{
	return {name:'Jhon Doe', Department:'IT'}
}
console.log(getPersonInfo());



console.log("\n*** ex8 ***");
const getinfo = () => ({name:'maddou', Department:'IT'});
console.log(getinfo());
