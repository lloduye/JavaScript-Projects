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



//Boolean Assignment start
function myFunction3() { //defining a fuctiona and assigning it a name
    var Boolean1 = [22 > 10] && [13 < 12]; //defining a variable and assigning it a name and operation
    document.getElementById("boolean1").innerHTML= "22 is larger than 10 making this TRUE and 13 is not less than 12 which makes the second part FALSE and overally this is " + Boolean1 

}

function myFunction4() { //defining a fuctiona and assigning it a name
    var Boolean2 = [22 > 10] && [13 > 12]; //defining a variable and assigning it a name and operation
    document.getElementById("boolean2").innerHTML= "22 is larger than 10 making this TRUE and 13 is larger than 12 which makes the second part TRUE and overally this is " + Boolean2
}

function myFunction5() { //defining a fuctiona and assigning it a name
    var Boolean3 = [22 > 10] || [13 < 12]; //defining a variable and assigning it a name and operation
    document.getElementById("boolean3").innerHTML= "22 is larger than 10 making this TRUE and 13 is not less than 12 which makes the second part FALSE and overally this is " + Boolean3 

}

function myFunction6() { //defining a fuctiona and assigning it a name
    var Boolean4 = [22 < 10] || [13 < 12]; //defining a variable and assigning it a name and operation
    document.getElementById("boolean4").innerHTML= "22 is larger than 10 making this FALSE and 13 is larger than 12 which makes the second part FALSE Again and overally this is " + Boolean4
}



//Console.log() Assignment start
function mathFunction() {
    var conslog =console.log(20+15)
    document.getElementById("math").innerHTML= conslog
}


//Double equal signs Assignment 
document.write(12==21) //Checking if the valaue on the left is equivalent to the value on the right
document.write(50==50) //Checking if the valaue on the left is equivalent to the value on the right

//Triple Equal Signs Assignment
A=21
B=30
document.write(A===B)

X=33
Y=33
document.write(X===Y)