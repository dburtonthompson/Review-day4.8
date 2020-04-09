
var toppings = ["cheese", "pepperoni", "garlic","mushrooms"];
function pizza(){
	
	var add = toppings.join(' and ');	

	return " I ate a great pizza with " + add;
}
console.log(pizza());