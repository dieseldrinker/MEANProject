app.controller('MainController', function(){
	console.log("MainController Loaded");
	
})

app.controller('RecipesBuilder', function(RecipeFactory) {
	console.log('RecipesBuilder loaded');
	var that = this;
	this.ingredients = [{id: 1, ingredient: "", quantity: "", measurement: ""}];

	// Method to handle dynamic ingredients
	this.addIngredient = function() {
		var newIngredientNo = that.ingredients.length+1;
		that.ingredients.push({id: newIngredientNo, ingredient: "", quantity: "", measurement: ""})
	}


	// CREATE
	var createRecipe = function(recipe) {
		console.log('sending recipe to factory')
		RecipeFactory.createRecipe(recipe, function() {

		})
	}
})


app.controller('RecipesController', function(RecipeFactory) {
	console.log('RecipesController loaded');
	var that = this;

	

	var getRecipes = function() {
		RecipeFactory.getRecipes(function(recipes) {
			console.log('got recipes from factory');
			that.recipes = recipes;
		})
	}

})


app.controller('UsersController', function(UserFactory){
	console.log("UsersController Loaded");
	var that = this;
	
	var getUsers = function(){
		UserFactory.getUsers(function(users){
			that.users = users;
		});
	}
	getUsers();
	this.add = function(newUser){
		UserFactory.add(newUser, function(){
			getUsers();
		})
	}
	this.remove = function(user){
		UserFactory.remove(user, function(){
			getUsers();
		})
	}
	this.show = function(user){
		UserFactory.setUser(user);
	}
})

app.controller('UserController', function(UserFactory){
	console.log("UserController Loaded");
	this.user = UserFactory.getUser();
	this.update = function(user){
		UserFactory.update(user);
	}
})