function fullsentFunction() { //defining a function and assigning it a name
    var sent1="I used "; //variable with string value
    var sent2=" concate () method to "; //variable with string value
    var sent3="join this "; //variable with string value
    var sent4="four sentences into one"; //variable with string value
    var wholesent = sent1.concat(sent2,sent3,sent4); //concatenating multiple variables
    document.getElementById("concatenate").innerHTML= wholesent //outputting to the html element
}

//Slice() Method
function sliceFunction() { //Defining function and assigning it a name
    var Sentence="All work and no play makes Johnny a dull boy."; //Defining a variable and assigning it a string
    var Section= Sentence.slice(27,33); //Defining a variable and assigning it a value
    document.getElementById("slice").innerHTML=Section
}

//toString() Function
function numbtostrFunction() { //Defining a function and assigning it a name
    var X=182; //Defining a variable and assigning it a value
    document.getElementById("numbtostr").innerHTML=X.toString();
}

//toPrecision() Function
function toprecFunction() { //Defining a function and assigning it a name
    var X=12938.25686585688659858588; //Defining a variable and assigning it a value
    document.getElementById("toprec").innerHTML=X.toPrecision();
}