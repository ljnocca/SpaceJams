# Constructors
* Object literals can get repetetive
* Constructors are useful when definining several of the same types of objects with similar key/value pairs - they create a template
* Use the 'this' keyword - refers to whatever we create when using our function

# Object Oriented Programing
* Procedural code - top to bottom
* Object oriented - created object and pass code along the objects
	* Take a 'thing' (object)
	* describe the thing
		* Characteristis = properties
		* Actions = methods
* 3 typesof Objects:
1. Host Objects
	* objects defined by the environment in which your code is run.
	* ex: a web browser is a host environment in which some objects include:
		* Document, Window, Element, Event, Node, Comment, Console
	* downfall: if our code is run in a diff. environment, our code will break.
2. Core Objets
	* defined by and builtinto Javascript
	* ex: Math,Object, String, Boolean, Array, Date, Number
3. Objects defined by the code's author
	* definted by user, library (jQuery or Angular JS)

# 'This' & the global object
* the WINDOW is the GLOBAL OBJECT when the host environment is the web
* if we write a function not associated with an object, it becomes a method of the global object. (ex: if we write a function called sayHello(), we can use the the method window.sayHello() )