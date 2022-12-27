//KVP Dicionary
function myFunction1() { //defining the fuction and assigning it a name
    var Hkane = { //defining a variable and assigning it a value
            Name:"Harry Kane", //KVP
            Age:28, //KVP
            Sex:"Male", //KVP
            Position:"Striker", //KVP
            Nationality:"England" //KVP
    };
    delete Hkane.Nationality; //delete statement to remove the Key before it's value is displayed
    document.getElementById("dictionary").innerHTML=Hkane.Nationality  //putting the value of the variable
                                                                     //into the HTML with a paragraph element
}

