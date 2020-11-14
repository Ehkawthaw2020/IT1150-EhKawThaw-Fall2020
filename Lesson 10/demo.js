//Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/


console.log("console log - hello world");//log in developer tools
var globalX = 100;//global scope

function hello() //function definition
{
    alert("alert - hello world!");//popup window    
}

function add()//function definition
{
    var x = 3;
    var y = 5;
    var sum = x + y;
    alert("Sum is " + sum);
}

function substract()
{
    var a = 1000;
    var b = 100;
    var diff = a - b;
    alert("Difference is" + diff);
}

//Homework Lab- Complete Multiplication and Division functionality

function increment()
{ 
    var y = 10;//local scope - resets y everytime function is called
    globalX = globalX+10;//can add any number to itself
    //y = y+10;
    y+=10;//same as y = y+10;
    alert("x="+globalX + "y="+y); 

}

function compare()
{
    var charlie = 120;
    var john = 120;
    
    //conditional if statement
    
    if (charlie > john)
    {
        alert("Charlie is taller");
    }
    else if( charlie == john)//"=" is assignment; "==" is comparison
    {
        alert("Charlie and John are of the same height");
    }
    else
    {
        alert("John is taller");
    }
}

function multiple()
{
    var x = 25;
    var y = 42;
    var sum = x * y;
    alert("The answer is " + sum);
}

function divide()
{
    var x = 48;
    var y = 12;
    sum = x / y;
    alert("Each child get " + sum);
}


function mean()
{
    var a = 25;
    var b = 47;
    var c = 98;
    var d = 46;
    var e = 52;
    var average = (a + b + c + d + e) / 5;
    alert("The mean is " + average);
}


function greater()
{
    var x = 100;
    var y = 1000;

    if(x > y)
    {
        alert("Yes")
    }
    else
    {
        alert("No")
    }
}


function IsGreater()
{
    var total = 4 * 5;


    if(total > 20)
    {
        alert("Yes")
    }
    else
    {
        alert("No")
    }
}
