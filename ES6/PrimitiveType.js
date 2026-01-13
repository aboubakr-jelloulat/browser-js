
let name = "ajelloul";
let cp_name = name;

console.log(name); 
console.log(cp_name);

cp_name = "borz";

console.log(name); 
console.log(cp_name);



// Array-literal 
let numbers = [13, 37, 19, 42];
let nums = numbers;

console.log(numbers);
console.log(nums);

nums[0] = 444;

console.log(numbers);
console.log(nums);



let studentinfo = 
{
	FullName : "ajelloul",
	age : 22
};

let cp_studentinfo = studentinfo;

console.log(studentinfo);
console.log(cp_studentinfo);

cp_studentinfo.FullName = "borz";
cp_studentinfo.age  = 32;

console.log(studentinfo);
console.log(cp_studentinfo);


