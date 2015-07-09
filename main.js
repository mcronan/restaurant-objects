/**********************************************************
						Part II
**********************************************************/
$(function() {

/**********************************************************
							1.
**********************************************************/

var FoodItem = function(name, calories, vegan, glutenFree, citrusFree) {
	this.name = name
	this.calories = calories
	this.vegan = vegan
	this.glutenFree = glutenFree
	this.citrusFree = citrusFree
}

/**********************************************************
							2.
**********************************************************/

FoodItem.prototype.toString = function(){
	var stringer = ("The name is " + this.name + ", the amount of calories is " + this.calories + ". Is it vegan? " + this.vegan + ". Is it gluten free? " + this.glutenFree + "." + " Is it citrus free? " + this.citrusFree )

		return stringer
}

/**********************************************************
							3.
**********************************************************/

var chickenFillet = new FoodItem("Chicken Fillet Roll", 550, false, false, true)
console.log(chickenFillet.toString())

var iceCream = new FoodItem("Ice Cream Sandwhich", 250, false, true, true)
console.log(iceCream.toString())

var wholeChicken = new FoodItem("Whole Chicken", 700, false, true, false)
console.log(wholeChicken.toString())


/**********************************************************
						Part II
**********************************************************/
/**********************************************************
						 1.
**********************************************************/
var Drink = function ( name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
}

var Plate = function( name, description, price, ingredients) {
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
}

var Order = function( plates) {
	this.plates = plates
}

var Menu = function ( plates)  {
	this.plates = plates
}

var Restaurant = function( name, description, menu) {
	this.name = name
	this.description = description
	this.menu = menu
}

var Customer = function( dietaryPreference) {
	this.dietaryPreference = dietaryPreference
}


/**********************************************************
						 2.
**********************************************************/
Drink.prototype.toString = function(){
	var stringer = ("This drink is a " + this.name + ", the description is " + this.description + ". The price is " + this.price + ". The lovely ingredients are " + this.ingredients + ".")

		return stringer
}

Plate.prototype.toString = function(){ 
	var stringer = ("This plate is a " + this.name + ", and you could say that it is " + this.description + ". The price is " + this.price + "." + "\n" + " The lovely ingredients are: " + this.ingredients + "." + "\n")

		return stringer
}

Order.prototype.toString = function(){
	var stringer = ("This is your order:" + this.plates + ".")

		return stringer
}

Menu.prototype.toString = function(){
	var stringer = ("Menu: " + this.plates + "." + "\n" )

		return stringer
}

Restaurant.prototype.toString = function(){
	var stringer = ("The name is " + this.name + ", and this is definitely" + this.description + ". The following items are available: " + this.menu + ".")

		return stringer
}

Customer.prototype.toString = function(){
	var stringer = ("Your dietary preference is as follows" + this.dietaryPreference + ".")

		return stringer
}


/**********************************************************
						 3.
**********************************************************/
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
	var count = 0
	this.ingredients.forEach(function(element){
		if(element === "flour") {
 		 count ++ 
		}  
	}) 
   		if(count > 0) {
   			return "this is not gluten free"
   		} else{
   			return "This is gluten free"
   		}
}

Plate.prototype.isCitrusFree = function(){ 
	count = 0 
	this.ingredients.forEach(function(element){
		if(element === "lemon"){
			count ++
		}
	})
	if(count > 0) {
		return "this is not citrus free"
	} else { 
		return "This is citrus free"
	}
}


 /**********************************************************
 							4.
 **********************************************************/

var burritoPlate = new Plate("Burrito", "tasty", 8.00, ["meat", "flour", "lemon"])

var guacamolePlate = new Plate("Guacamole Plate", "big", 5, ["avocado", "garlic", "lemon"])

var margaritaDrink = new Drink("Margarita", "quenches thirst", 9.00, ["apple", "spirit", "olives"])

console.log(guacamolePlate.isCitrusFree())

 /**********************************************************
 							5.
 **********************************************************/

var tableMenu = new Menu([burritoPlate, guacamolePlate, margaritaDrink])

 /**********************************************************
 							6.
 **********************************************************/

var bobsDiner = new Restaurant("Bob's Diner", " a family joint", tableMenu)


 /**********************************************************
 							7.
 **********************************************************/


// want Bob's diner to print out: menu, with the plates o with the plates ingredients

console.log(bobsDiner.toString())

/**********************************************************
 							UI
 **********************************************************/
/**********************************************************
 							1.
 **********************************************************/

Drink.prototype.create = function(){
		return $('<div class="drink-item">').text(name)
	}

Plate.prototype.create = function(){
		return $('<div class="food-item">').text(name)
	}

Order.prototype.create = function(){
		return $('<div class="order-item">').text(name)
	}

Menu.prototype.create = function(){
		return $('<div class="menu-item">').text(name)
	}

Restaurant.prototype.create = function(){
		return $('<div class="restaurant-item">').text(name)
	}

Customer.prototype.create = function(){
		return $('<div class="cusomter-item">').text(name)
	}

/**********************************************************
 							2.
 *********************************************************/
	var counter = 0
	$('.food-button').on('click', function() {
			counter += 1
		$('.dishes-amount').text("Items ordered: " + counter)

		})


/***************************************************
 					Price of orders.
 **************************************************/
	
	var burrTotal = 0
	$('.burrito').on('click', function() {
		burrTotal += burritoPlate.price
		var bigTotal = +guacTotal + +burrTotal + +margTotal
		$('.dollar-total').text("Total: $" + bigTotal)
	})

	var guacTotal = 0
	$('.guac').on('click', function() {
		guacTotal += guacamolePlate.price
		var bigTotal = +guacTotal + +burrTotal + +margTotal
		$('.dollar-total').text("Total: $" + bigTotal)
	})

	var margTotal = 0
	$('.margarita').on('click', function(){
		margTotal += margaritaDrink.price 
		var bigTotal = +guacTotal + +burrTotal + +margTotal
		$('.dollar-total').text("Total: $" + bigTotal)
	})




/***************************************************
 					Highlighting of diet preference
 **************************************************/

$('.vegan').on('click', function(){
	$('.vegan1').addClass('highlighted')
	setTimeout(function(){
		$('.vegan1').removeClass('highlighted');
	}, 10);
	})



});




