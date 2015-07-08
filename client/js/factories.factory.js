app.factory('RecipeFactory', function($http, $location){
	return {
		getRecipes: function(callback) {
			console.log('Getting recipes from server');
			$http.get('/recipes').success(function(response) {
				callback(response);
			})
		}
	}
})

app.factory('RecipeBuilder', function() {
	return {
		createRecipe: function(recipe, callback) {
			console.log('sending new recipe to server');
			$http.post('/recipes', recipe).success(function(response) {
				callback(response);
			})
		}
	}
})


// demo stuff down here:
app.factory('UserFactory', function($http, $location){
	return {
		getUsers: function(callback){
			console.log("UsersFactory getUsers");
			$http.get('/users').success(function(response){
				callback(response);
			})
		},
		add: function(newUser, callback){
			if(newUser){
				console.log("UsersFactory add ", newUser);
				$http.post('/users', newUser).success(function(response){
					callback(response);
				})
			}
		},
		remove: function(user, callback){
			console.log("UsersFactory remove ", user);
			$http.delete('/users/'+user._id).success(function(response){
				callback();
			})
		},
		update: function(user){
			console.log("UsersFactory remove ", user);
			$http.put('/users/'+user._id, user).success(function(response){
				$location.path('/users');
			})
		},
		setUser: function(user){
			this.user = user;
			$location.path('/users/details');
		},
		getUser: function(){
			if(!this.user)
				$location.path('/users');
			return this.user;
		}
	}
})