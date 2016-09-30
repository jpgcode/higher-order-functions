#Higher order functions
A higher-order function is a function that does at least one of the following:

-Takes one or more functions as an input

-Outputs a function

All other functions are first-order functions.


<p align="center">
    <img height="271" width="405" src="https://raw.githubusercontent.com/jpgcode/respondTo/master/demo/intro.jpg">
</p>

> Experiments with higher order functions (array methods)


Use this array for all our examples:
```
var animals = [
	{name: 'Milo', type: 'cat', eyes: 2},
	{name: 'Peluza', type: 'cat', eyes: 2},
	{name: 'Yummy', type: 'cat', eyes: 2},
	{name: 'Doggy', type: 'dog', eyes: 2},
	{name: 'Sammy', type: 'dog', eyes: 2}
];
```
##Map
It iterates over an array and return a new array with the changes you do to it.

Using map method:
```
const getAnimals = animals.map(animal => `${animal.name} is a ${animal.type}`);
```

This returns the following:
```
[ 'Milo is a cat',
  'Peluza is a cat',
  'Yummy is a cat',
  'Doggy is a dog',
  'Sammy is a dog' ]
```

##ForEach
It iterates over an array and does not return anything unless you do it manually.

Using the forEach method:
```
const getAnimals2 = animals.forEach((animal) => `${animal.name} is a ${animal.type}`);
```

This returns the following:
```
undefined
```

On this case we will need to create a new array manually if we want to have the same result of the `map` method.

##Filter
It iterates over an array and return a filtered results based on a conditional passed inside the function.

Using the filter method to get only dogs:
```
const dogs = animals.filter(animal => animal.type === 'dog');
```

This returns the following:
```
[ { name: 'Doggy', type: 'dog', eyes: 2 },
  { name: 'Sammy', type: 'dog', eyes: 2 } ]
```

##Find
It iterates over an array and return only 1 element, the first that matches with your conditional.

Using the find method to get only one element:
```
const sammy = animals.find(animal => animal.name === 'Sammy');
```

This returns the following:
```
{ name: 'Sammy', type: 'dog', eyes: 2 }
```

##Some
It iterates over an array and return true if one of the items matches with the condition passed.

Using the check if there are cats in our array:
```
const thereAreCats = animals.some(animal => animal.type === 'cat');
```

This returns the following:
```
true
```

##Every
It iterates over an array and return true if ALL of the items matches with the condition passed.

Using the check if all the animals are dogs:
```
const areAllDogs = animals.every(animal => animal.type === 'dog');
```

This returns the following:
```
false
```

##Reduce
It iterates over an array and reduce it, using an accumulator logic, which merge the items inside the array, returning a new merged element.

Fusion all the animal names:
```
const fusionedAnimals = animals.reduce((newName, animal) => newName+animal.name, '');
```

This returns the following:
```
MiloPeluzaYummyDoggySammy
```

##Chaining methods
We can use the previous methods together, chaining them one after the other.

Get all dogs and fusion their names
```
const getDogsAndFusionThem = animals.filter(animal => animal.type === 'dog')
		.reduce((newName, animal) => newName+animal.name, '');
```

This returns:
```
DoggySammy
```


## Authors

**Jose Pablo Granados**
 
+ [github/jpgcode](https://github.com/jpgcode)
+ [twitter/jpgcode](http://twitter.com/jpgcode) 

## License

Copyright (c) 2016 Jose Pablo Granados
Released under the MIT license
