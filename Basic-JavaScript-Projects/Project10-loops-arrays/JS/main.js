function loopFunction() { //Defining a function and assigning it a name
    var Counter= ""; //Defining a variablke and assigning it a value
    var X=1; //Defining a variablke and assigning it a value

    while(X<11) { //Conditional statement for the loop
        Counter+="<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML=Counter; //outoutting the results to the HTML 
}