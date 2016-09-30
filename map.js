'use strict';

//Using array methods

var higherOrderFunctionsModule = (function(){

	var animals = [
		{name: 'Milo', type: 'cat', eyes: 2},
		{name: 'Peluza', type: 'cat', eyes: 2},
		{name: 'Yummy', type: 'cat', eyes: 2},
		{name: 'Doggy', type: 'dog', eyes: 2},
		{name: 'Sammy', type: 'dog', eyes: 2}
	];

	var init = function(){
		//Get all animals (map)
		console.log('---');
		console.log('all animals (map)');
		console.log(getAnimals);

		//Get all animals (forEach)
		console.log('---');
		console.log('all animals (forEach)'); 
		console.log(getAnimals2);

		//Get only dogs
		console.log('---');
		console.log('only dogs');
		console.log(dogs);

		//Get only sammy
		console.log('---');
		console.log('only one item'); 
		console.log(sammy);

		//Get all the names together
		console.log('---');
		console.log('fusionAnimals');
		console.log(fusionedAnimals);

		//Check if some of the animals are cats
		console.log('---');
		console.log('check if there are cats');
		console.log(thereAreCats);

		//Check if all the items are dogs
		console.log('---');
		console.log('check if ALL are dogs');
		console.log(areAllDogs);
	}

	//Map example
	var getAnimals = animals.map(animal => `${animal.name} is a ${animal.type}`);

	//Foreach example
	var getAnimals2 = animals.forEach((animal) => `${animal.name} is a ${animal.type}`);

	/*
	The "side effect" with forEach is that the original array is being changed. 
	"No side effect" with map means that, in idiomatic usage, the original array elements are not changed.
	*/

	//Filter example
	var dogs = animals.filter(animal => animal.type === 'dog');

	//Find example
	var sammy = animals.find(animal => animal.name === 'Sammy');

	//Some example
	var thereAreCats = animals.some(animal => animal.type === 'cat');

	//Every example
	var areAllDogs = animals.every(animal => animal.eyes === 2);

	//Reduce example
	var fusionedAnimals = animals.reduce((newName, animal) => newName+animal.name, '');


	//Auto execute itself
	init();

})();

//https://www.airpair.com/javascript/posts/catching-up-with-javascript-higher-order-functions
//https://derickbailey.com/2015/10/21/fun-with-higher-order-functions-in-javascript/
//http://eloquentjavascript.net/05_higher_order.html

