// primative type : boolean , string , number, float
// Object, Array -> All has variables
// keywoard : let, const

const nicoInfo = {
    name : "Nico",
    age : 33,
    gender : "Male",
    isHandsome : true
  };
  console.log(nicoInfo, console);
  
  // argument(parametor) : name , age
  // console.log("hello", name) -> old style
  // console.log("hellp" + name) -> old style 
  // It is pretty good~~~~ 
  function sayHello(name , age){
    return console.log(`Hello ${name} you are ${age} years old`);
  }
  
  const greetNicolas = sayHello("Nilcolas", 14);
  
  console.log(greetNicolas);
  
  // Object have functions~~~ 
  const calculator = {
    plus : function(a, b){
      return a+ b;
    }
  }
  
  const plus = calculator.plus(5, 5);
  console.log(plus);