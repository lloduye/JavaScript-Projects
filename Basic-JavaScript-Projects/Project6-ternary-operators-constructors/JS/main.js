//Voting sub-program
function voteFunction() {
    var Age, Can_vote;
    Age= document.getElementById("Age").value;
    Can_vote= (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML=Can_vote +" to vote"
}

//Keywords and Constructors 
function Vehicle(Make,Model,Year,Color) {//Defining a fucntion and assigning it a name and parameters
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
//Creating new variables based on the vehicle constuctor
var John= new Vehicle("Dodge", "Viper",2022, "Red");
var Christine = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var William = new Vehicle ("Ford", "Pinto", 1971, "Mustard");

function myFunction() {//Assigning the fuction to the targetted html Id
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "William drives a " +William.Vehicle_Color + "-colored " + William.Vehicle_Model +
    " manufactured in " + William.Vehicle_Year;
}

//Nested Functions code
function countFunction(){ //main function
    document.getElementById("counting").innerHTML= Count();
    function Count() { //Nested function
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}