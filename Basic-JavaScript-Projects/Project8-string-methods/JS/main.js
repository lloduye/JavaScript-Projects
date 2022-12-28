function fullsentFunction() { //defining a function and assigning it a name
    var sent1="I used "; //variable with string value
    var sent2=" concate () method to "; //variable with string value
    var sent3="join this "; //variable with string value
    var sent4="four sentences into one"; //variable with string value
    var wholesent = sent1.concat(sent2,sent3,sent4); //concatenating multiple variables
    document.getElementById("concatenate").innerHTML= wholesent //outputting to the html element
}