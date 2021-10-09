//task5
try{
    
    document.writee("manar elsheikh");        
}
catch(err){
 document.write("<br>"+err.name);
 document.write("<br>"+err.message);
}



window.onerror=handleErr;

function handleErr()
{
	alert("Error Occured in the page");
}

function message()
{
adddlert("Welcome manar!")
}