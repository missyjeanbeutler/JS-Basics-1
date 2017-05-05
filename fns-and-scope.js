//////////////////PROBLEM 1////////////////////

let name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

let isTyler = (name) => name === 'Tyler' ? true : false;

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


var getName = () => prompt('What is your name?')


//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

let welcome = () => alert('Welcome, ' + getName())


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

// Arguments are the actual value, parameters are the placeholders.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


NaN, false, 0, '', undefined, null



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

let myName = () => 'Missy'
  


//Now save the function definition of myName into a new variable called newMyName

let newMyName = myName

//Now alert the result of invoking newMyName

alert(newMyName())

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

let outerFn = () => () => 'Missy' 

//Now save the result of invoking outerFn into a variable called innerFn.

let innerFn = outerFn()

//Now invoke innerFn.

innerFn()
