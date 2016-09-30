'use strict';

//Using array methods
const animals = [
	{name: 'Milo', type: 'cat', eyes: 2},
	{name: 'Peluza', type: 'cat', eyes: 2},
	{name: 'Yummy', type: 'cat', eyes: 2},
	{name: 'Doggy', type: 'dog', eyes: 2},
	{name: 'Sammy', type: 'dog', eyes: 2}
];

const higherOrderFunctionsModule = (function(){

	const init = function(){
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

		//Get all dogs and fusion them
		console.log('---');
		console.log('Merge the dogs and fusion them');
		console.log(getDogsAndFusionThem);
	}

	//Map example
	const getAnimals = animals.map(animal => `${animal.name} is a ${animal.type}`);

	//Foreach example
	const getAnimals2 = animals.forEach((animal) => `${animal.name} is a ${animal.type}`);

	/*
	The "side effect" with forEach is that the original array is being changed. 
	"No side effect" with map means that, in idiomatic usage, the original array elements are not changed.
	*/

	//Filter example
	const dogs = animals.filter(animal => animal.type === 'dog');

	//Find example
	const sammy = animals.find(animal => animal.name === 'Sammy');

	//Some example
	const thereAreCats = animals.some(animal => animal.type === 'cat');

	//Every example
	const areAllDogs = animals.every(animal => animal.type === 'dog');

	//Reduce example
	const fusionedAnimals = animals.reduce((newName, animal) => newName+animal.name, '');

	//Chained methods example
	const getDogsAndFusionThem = animals.filter(animal => animal.type === 'dog')
		.reduce((newName, animal) => newName+animal.name, '');


	//Fire the init method 
	init();

})();

