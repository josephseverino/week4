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
//burrito ingredients
var beans = new FoodItem('Black Beans',100,true,true,true);
var tortilla = new FoodItem('Flour Tortilla',200,true,false,true);
var rice = new FoodItem('Spanish Rice',100,true,true,true);
var chicken = new FoodItem('Chicken',300,false,true,true);
var guacamole = new FoodItem('Guacamole',150,true,true,true);
var sourCream = new FoodItem('Sour Cream',150,false,true,true);
var cheese = new FoodItem('Cheddar Cheese',150,false,true,true);
var salsa = new FoodItem('Salsa',50,true,true,false);
//hamburger ingredients
var beef = new FoodItem('Ground Beef',500,false,true,true);
var sauce = new FoodItem('Secret Sauce',100,false,true,true);
var bun = new FoodItem('Wheat Bun',200,true,false,true);
var pickle = new FoodItem('Pickle',30,true,true,true);
var tomato = new FoodItem('Tomato',20,true,true,true);

//salad
var lettuce = new FoodItem('Iceberg Lettuce',10,true,true,true);
var avocado = new FoodItem('Avocado',200,true,true,true);
var vinaigrette = new FoodItem('Vinaigrette Dressing',80,true,true,true);
var onion = new FoodItem('Onion',30,true,true,true);


//drink ingredients
var coke = new FoodItem('Coca Cola',300,true,false,false);
var rum = new FoodItem('Rum',80,true,false,true);
var milk = new FoodItem('Whole Milk',300,false,true,true);
var lemon = new FoodItem('Lemon',30,true,true,false);
var sugar = new FoodItem('Sugar',80,true,false,true);











//Drink

function Drink(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
}
Drink.prototype.stringify = function(){
    var names=[]
    for(var i= 0;i<this.ingredients.length;i++){

        names.push(this.ingredients[i].name)
    }

    return "Name: " +this.name+ " Description: "+this.description+" Price: "+this.price+" Ingredients: "+ names.join(' ')
}

var cuban = new Drink('Cuba Libre', 'Coka Cola with a few shots of Rum', 4.50, [coke,rum] )
var lemonade = new Drink('Lemonade', 'Fresh Squeezed Lemonade', 2.50, [sugar,lemon] )
var wMilk = new Drink('Whole Milk', 'Fresh Farm Whole Milk', 2.50, [milk] )
console.log(cuban.stringify())
console.log(lemonade.stringify())
console.log(wMilk.stringify())
//Plate

function Plate(name, description, price, ingredients){
    this.name = name;
    this.description = description;
    this.price = price;
    this.ingredients = ingredients;
    
    
}

Plate.prototype.stringify = function(){

    var names=[]
    for(var i= 0;i<this.ingredients.length;i++){

        names.push(this.ingredients[i].name)
    }
    return "Name: " + this.name + " Description: " + this.description + " Price: " + this.price +" Ingredients: " + names.join(' ')
}



var hamburger = new Plate('Hamburger', 'Half pound of beef between toasted bun', 10.50, [beef,sauce,lettuce,pickle,bun])
var burrito = new Plate('Chicken Burrito', 'Better than Qdoba', 12.50, [beans,tortilla,rice,chicken,guacamole,sourCream,cheese,salsa])
var salad = new Plate('Vegan Salad', 'Light and Delicious', 8.50, [lettuce, avocado, vinaigrette, onion])
console.log(hamburger.stringify())
console.log(burrito.stringify())
console.log(salad.stringify())

//Order

function Order(itemSelect){
   this.itemSelect = itemSelect;
    
}

var order1 = new Order([hamburger,lemonade]);

Order.prototype.stringify = function(){
    var selection =[];
    for (var i = 0;i<this.itemSelect.length;i++){
        selection.push(this.itemSelect[i].name)
    }
return "Your Order is: " + selection.join(' and ')
}
console.log(order1.stringify())

//Menu
var plates = [hamburger,burrito,salad,cuban,lemonade,milk];

function Menu(plates){
    this.plates = plates;
   
    
}

var menu = new Menu()

Menu.prototype.stringify = function(){
    var menuItems =[];
    for (var i = 0;i<plates.length;i++){
        menuItems.push(plates[i].name)
    }
return "Here Are Our Meals and Drinks: " + menuItems.join(' ')
}

console.log(menu.stringify())

//Restaurant

function Restaurant(name, description, menuItems){
    this.name = name;
    this.description = description;
    this.menuItems = menuItems;
   
}


Restaurant.prototype.stringify = function(){
   
    return "Name: " + this.name + " Description: " + this.description + " Menu: " + this.menuItems
}


var dishes = []

var restaurant = new Restaurant('Joe\'s Burrito Shack','Best Tex-Mex in Colorado', dishes)

console.log(restaurant.stringify())
