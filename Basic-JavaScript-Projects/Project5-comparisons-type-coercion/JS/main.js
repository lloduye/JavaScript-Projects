document.write("100" + 50) //type coercion

//Infinity Assignment start
function myFunction1() { //defining a fuctiona and assigning it a name
    var posInfinity =document.write(3E310) //defining a variable and assigning it a name
    document.getElementById("infinity").innerHTML=posInfinity  //putting the value of the variable
                                                                //into the HTML with a paragraph element
}

function myFunction2() { //defining a fuctiona and assigning it a name
    var negInfinity= document.write(-3E310); //defining a variable and assigning it a name
    document.getElementById("-infinity").innerHTML=negInfinity  //putting the value of the variable
                                                                //into the HTML with a paragraph element
}
//Infinity Assignment end


//Boolean Assignment start
function myFunction3() { //defining a fuctiona and assigning it a name
    var Boolean1 = [22 > 10] && [13 < 12]; //defining a variable and assigning it a name and operation
    document.getElementById("boolean1").innerHTML= "22 is larger than 10 making this TRUE and 13 is not less than 12 which makes the second part FALSE and overally this is " + Boolean1 

}

function myFunction4() { //defining a fuctiona and assigning it a name
    var Boolean2 = [22 > 10] && [13 > 12]; //defining a variable and assigning it a name and operation
    document.getElementById("boolean2").innerHTML= "22 is larger than 10 making this TRUE and 13 is larger than 12 which makes the second part TRUE and overally this is " + Boolean2
}
//Boolean Assignment end
