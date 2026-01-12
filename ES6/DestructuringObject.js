let user = 
{
    name : "ajelloul",
    age : 22,
    Department : "IT"
};


function _Object_in_js()
{
  
  for (let value of Object.values(user))
    console.log(value);


  console.log(user.name ," * ", user.age," * ", user.Department);
}

const car = 
{
  make: "Toyota",
  model: "Corolla",
  year: 2020,
  color: "white"
};

const {make, model, year, color, foo} = car; // pindding and linking with the obj in Car object


const Earth = {
  Africa: {
    Morocco: true,
    Algeria: true
  },
  Asia: {
    Japan: true,
    China: true
  },
  Europe: {
    Norway: true,
    Finland: true
  }
};

const {Morocco} = Earth.Africa;
const {Europe:{Norway}} = Earth;

function Destructuring_Objects()
{
  console.log(make, model, color, foo);

  console.log("\n******\n");

  console.log(Morocco);
  console.log(Norway);

}




// _Object_in_js();
Destructuring_Objects();