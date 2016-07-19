function FoodItem(name, calories, vegan, glutenFree, citrusFree){
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;
    
}

FoodItem.prototype.stringify = function(foodItem){
    return "Item: " +this.name+ " has " + this.calories +" calories and is vegan: "+this.vegan+ " Gluten Free: " +
    this.glutenFree + " Citrus Free: " +this.citrusFree
}

var apple = new FoodItem('Apple',100,true,true,false);
var bagel = new FoodItem('Bagel',200,true,false,true);
var donut = new FoodItem('Donut',300,true,false,true);


function Drink(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    
    
}

function Plate(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    
    
}

function Order(plates){
    this.plates = plates;
    
    
}
function Menu(plates, restaurant, name, description, menu){
    this.plates = plates;
    this.restaurant = restaurant;
    this.name = name;
    this.description = description;
    this.menu = menu;
    
}
function Restaurant(name, description, dietPreference){
    this.name = name;
    this.description = description;
    this.dietPreference = dietPreference;
   
    
    
}

//Drink

Drink.prototype.stringify = function(){
    return "Name: " +this.name+ " Description: "+this.description+" Price: "+this.price+" Ingredients: "+this.ingredients
}

var cuban = new Drink('Cuban', 'Coka Cola with a few shots of Rum', 4.50, ['Coke','Rum'] )
var water = new Drink('Water', '2 parts Hygrogen and 1 part Oxygen', 0, ['Hygrogen','Oxygen'] )
console.log(cuban.stringify())
console.log(water.stringify())
//Plate
Plate.prototype.stringify = function(){
    return "Name: " + this.name + " Description: " + this.description + " Price: " + this.price +" Ingredients: " +this.ingredients
}


var hamburger = new Plate('Hamburger', 'Half pound of beef between toasted bun', 10.50, ['hamburger','tomatoe','pickles','mayo','mustard','ketchup'])
var chickenParm = new Plate('Chicken Parmesan', 'An Italian delight', 12.50, ['chicken','tomatoes','bread crumbs','parmesan','eggs'])
console.log(hamburger.stringify())
console.log(chickenParm.stringify())

//Order
var plates = new Order([hamburger,chickenParm]);

Order.prototype.stringify = function(){
    var info =[];
    for (var i = 0;i<this.plates.length;i++){
        info.push(this.plates[i].stringify())
    }
return info
}
console.log(plates.stringify())

//Menu

var
Menu.prototype.stringify = function(){
    return "Plates: " + this.plates + " Restaurant: " + this.restaurant + " Name: " + this.name + " Description: " +
    this.description + " Menu: " + this.menu
}

//Restaurant
Restaurant.prototype.stringify = function(){
    return "Name: " + this.name + " Description: " + this.description + " Dietary Preference: " + this.dietPreference
}

