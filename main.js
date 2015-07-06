// var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
// 	this.name = name
// 	this.number = number
// 	this.vegan = vegan
// 	this.glutenFree = glutenFree
// 	this.citrusFree = citrusFree


// }

// FoodItem.prototype.toString = function(){
// 	var stringer = ("The name is " + name + ", the amount of calories is " + calories + "." " Is it vegan? " + vegan + "." + "It is gluten free " + glutenFree "." + "It is citrus free " + citrusFree )

// 		return stringer
// }

// var Drink = function ( name, description, price, ingredients) {
// 	this.name = name
// 	this.description = description
// 	this.price = price
// 	this.ingredients = ingredients
// }

var Plate = function( name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
}


var burritoPlate = new Plate("burrito", "tasty", 8.00, ["meat", "flour", "lemon"])

var guacamolePlage = new Plate("guac", "big", 10.00, ["avocado", "garlic", "lemon"])



Plate.prototype.isVegan = function(){
	var count = 0	
	this.ingredients.forEach(function(element){
		
		if(element === "meat") {
 		 count ++ 
		}  
	}) 
   		if(count > 0) {
   			return "this is not vegan"
   		} else{
   			return "This is vegan"
   		}
}

Plate.prototype.isGlutenFree = function(){
	this.ingredients.forEach(function(element){
		if(element !== "flour") 
		// {
		// 	return "This is not gluten free"
		// } else {
		// 	return "this is gluten free"
		// }
		console.log("Hello")

	})
}

Plate.prototype.isCitrusFree = function(){ 
	this.ingredients.forEach(function(element){
		if(element === "lemon"){
			return "this is not citrus free"
		} else {
			return "this is not gluten free"
		}
	})
}


console.log(burritoPlate.isVegan())


// var Order = function( plates) {
// 	this.plates = plates
// }

// var dinnerOrder = new Order(["cat", "dog", "rat"])

// Order.prototype.toString = function() {
	
// 	var string = this.plates.join(', ')

// 	var stringer = "This order contains " + string + "."

// 	return stringer

// }

// console.log(dinnerOrder.toString())

// var Menu = function ( plates)  {
// 	this.plates = plates
// }

// var Restaurant = function( name, description, menu) {
// 	this.name = name
// 	this.description = description
// 	this.menu = menu
// }

// var customer = function( dietaryPreference) {
// 	this.dietaryPreference = dietaryPreference
// }

