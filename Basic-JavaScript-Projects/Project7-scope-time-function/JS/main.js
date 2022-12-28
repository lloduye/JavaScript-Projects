//Global function
var Globalv ="This is a Global Variabela and it can be used by any function within the program."
function globalFunction() { //defining a function and assigning it a name
    document.getElementById("global").innerHTML= Globalv
}

//Local Function
function localFunction() { //defining a function and assigning it a name
    var Localv ="This is a Local variable and is contained inside the function and cannot be used by functions outside this function."
    document.getElementById("local").innerHTML= Localv
}

//If Statements
function getdateFunction() {//defining a function and assigning it a name
    if(new Date().getHours() < 18) { //Conditional statement
        document.getElementById("greeting").innerHTML= "How are you doing today?"
    }
}

//Else Statement
function ageFunction() { //defining a function and assigning it a name
    var userAge= document.getElementById("userage").value;
    if (userAge > 18){ //Conditional statement
        Check ="You are old enought to play in this league";
    }
    else{
        Check ="You are too young to play in this league. Please call our office to sign up for Junior league"
    }
    document.getElementById("results").innerHTML=Check
}

//Intentional error for debugging
function addnumbsFunction() { //Defining a function and assigning it a name
    var numb1 =document.getElementById("numb1").value; //defining a variable and assigning it a name and a value
    var numb2 =document.getElementById("numb2").value; //defining a variable and assigning it a name and a value
    var results =Number(numb1) + Number(numb2)//Adding the two numbers from the HTML user input
    document.getElementById("results2").innerHTML=results //outputting the results of adding the two numbers user provided
    console.log()
}

//Time Function
function timeFunction() { //Defining function and assignning it a name
    var Time = new Date().getHours(); //Defining a variable
    var Reply;  //Defining a variable
    if(Time<12==Time>0) { //Condition
        Reply ="It is morning time!";
    }
    else if (Time >=12==Time<18) {//Condition
        Reply= "It is afternoon time.";
    }
    else {//Condition
        Reply ="It is evening time.";
    }
    document.getElementById("timeofday").innerHTML = Reply;
}