#Higher order functions

<p align="center">
    <img height="271" width="405" src="https://raw.githubusercontent.com/jpgcode/respondTo/master/demo/intro.jpg">
</p>

> Experiments with higher order functions (array methods)

##Map
It iterates over an array and return a new array with the changes you do to it.

We have this array:
```
var animals = [
	{name: 'Milo', type: 'cat', eyes: 2},
	{name: 'Peluza', type: 'cat', eyes: 2},
	{name: 'Yummy', type: 'cat', eyes: 2},
	{name: 'Doggy', type: 'dog', eyes: 2},
	{name: 'Sammy', type: 'dog', eyes: 2}
];
```

Then we use the map method:
```
var getAnimals = animals.map(animal => `${animal.name} is a ${animal.type}`);
```

This returns the following:
```
[ 'Milo is a cat',
  'Peluza is a cat',
  'Yummy is a cat',
  'Doggy is a dog',
  'Sammy is a dog' ]
```

## Authors

**Jose Pablo Granados**
 
+ [github/jpgcode](https://github.com/jpgcode)
+ [twitter/jpgcode](http://twitter.com/jpgcode) 

## License

Copyright (c) 2016 Jose Pablo Granados
Released under the MIT license
