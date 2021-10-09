//task1
var tips=new Array();
tips[0]="use === instead of ==";
tips[1]="Don’t forget var keyword when assigning a variable’s value for the first time.";
tips[2]="Use Semicolons for line termination";
tips[3]="Be careful when using typeof, instanceof and constructor.";
tips[4]="Create a Self-calling Function";
tips[5]="Don’t use delete to remove an item from array";
tips[6]="Use logical AND/ OR for conditions";
tips[7]="Check the properties of an object when using a for-in loop";
tips[8]="Verify the argument before passing it to isFinite()";
tips[9]="Avoid negative indexes in arrays";
var rand=tips[Math.floor(Math.random()*tips.length)];
window.alert(rand);

//task2
function myDate(){
    var date=new Date().toLocaleDateString();
    var time=new Date().toLocaleTimeString();
    document.write("<br>" + date + " " + time);
}

//task3
do{
var ask=prompt("Choose the color you want to display the date \n 1-(r)red 2-(b)blue 3-(g)green ","Enter the letter of the color");
var regular=/^(r|b|g)$/;
check =regular.test(ask);
if(check===false)
{
    alert("sorry not valid");
}
}while(!check)
    var arr=new Array();
    arr["r"]=new Date().toLocaleDateString().fontcolor('red');
    arr["b"]=new Date().toLocaleDateString().fontcolor('blue');
    arr["g"]=new Date().toLocaleDateString().fontcolor('green');
    
    document.write("<br>"+"Current Date: ".bold()+" "+arr[ask]);

//task4

function ensure(){
    var n1=prompt("Enter your birth date \n  in the following format (DD – MM – YYYY)");
    if((n1.length===10)&&(n1.substring(2,3)==="-")&&(n1.substring(5,6)==="-"))
    {   var spl=n1.split("-");
        var d=new Date(spl[2],spl[1],spl[0]);
        alert(d.toLocaleDateString());
    }
    else{
        alert( "Wrong Date Format");
    }
}   
    