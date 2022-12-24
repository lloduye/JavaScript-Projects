//ADDITION
function addFunction() { //Defining the function and assigning it a name
    var addition= 12 + 24; //Defining a variable and assigning it value
    document.getElementById("add").innerHTML= "12 + 24 = " + addition;
}

//SUBTRACTION
function subtractFunction() { //Defining the function and assigning it a name
    var subtraction= 45 - 10; //Defining a variable and assigning it value
    document.getElementById("subtract").innerHTML= "45 - 10 = " + subtraction;
}

//MULTIPLICATION
function multiplyFunction() { //Defining the function and assigning it a name
    var multiplication= 105 * 35; //Defining a variable and assigning it value
    document.getElementById("multiply").innerHTML= "105 x 35 = " + multiplication;
}

//DIVISION
function divideFunction() { //Defining the function and assigning it a name
    var subtraction= 144 / 12; //Defining a variable and assigning it value
    document.getElementById("divide").innerHTML= "144 / 12 = " + subtraction;
}

//MULTIPLE OPERATIONS
function multipleOPFunction() { //Defining the function and assigning it a name
    var multipleOP= (20 + 30) * 100 / 50 - 25; //Defining a variable and assigning it values
    document.getElementById("multiple").innerHTML= "(20 + 30) x 100 / 50 - 25 = " + multipleOP;
}

//MODULUS OPERATOR
function negationOPFunction() { //Defining the function and assigning it a name
    var x=12; //Defining a variable and assigning it a value
    document.getElementById("negation").innerHTML= "Variabe x = 12 with the negation operator \"-\" is " + -x;
}

//INCREMENT OPERATOR
function incrementOPFunction() { //Defining the function and assigning it a name
    var x=5; //Defining a variable and assigning it a value
    x++; //defining an increment
    document.getElementById("increment").innerHTML= "An increment operator will change the value of variable x from 5 to " + x++;
}

//DECREMENT OPERATOR
function decrementOPFunction() { //Defining the function and assigning it a name
    var x=10; //Defining a variable and assigning it a value
    x--; //defining an increment
    document.getElementById("decrement").innerHTML= "A decrement operator will change the value of variable x from 10 to " + x--;
}

//RANDOM NUMBER
function randomFunction() {
    var rand= window.alert(Math.random() *500);
    document.getElementById("random").innerHTML="Your randomly generated number between 0 - 500 is "
}

//MATH OBJECT AND METHOD
function mathOBFunction(){
    document.getElementById("demo").innerHTML=Math.round(39.6);
}
