function loopFunction() { //Defining a function and assigning it a name
    var Counter= ""; //Defining a variablke and assigning it a value
    var X=1; //Defining a variablke and assigning it a value

    while(X<11) { //Conditional statement for the loop
        Counter+="<br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML=Counter; //outoutting the results to the HTML 
}

//For Loop Assignment
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumphet", "Flute"];
var Content ="";
var Y;
function for_loop() { //Defining a function and assigning it a name
    for (Y=0; Y<Instruments.length; Y++) { //Conditional statement
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("listofinsts").innerHTML=Content;
    }
