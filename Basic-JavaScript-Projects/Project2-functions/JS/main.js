function myCode() { // Defining a function and assigning it a name
    var reason="Coding is something that makes a difference."; //Defining a variable and assigning it a value
    reason +=" When I code, I get this feeling that I'm solving a problem"; //using the +=operator to concatate the two strings of sentences
    document.getElementById("joinsent").innerHTML=reason; //putting the value of the variable
                                                        //into the HTML with a paragraph element
}