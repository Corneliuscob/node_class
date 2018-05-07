//learning how to use arrow funcitons
var square = (x) => {
	result = x*x;
	return result;
};
// we can write as many lines as we want inside the curly braces of the 
//arrow function and have it returned
console.log(square(9)); 
// the arrow function without curly rbackets means that the function is returned 
//in a single line  This is nice and simple 

//exploringin difference bewtween a function and an arrow function 

var user = {

name:  'ito',
sayHi : () = > { console.log('hi');

}
}