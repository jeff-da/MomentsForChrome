var myDate = new Date();
if ( myDate.getHours() < 12 ) 
{
    document.write("Good morning.");
}
else
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 )
{
    document.write("Good afternoon.");
}
else
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 )
{
    document.write("Good evening.");
}
else {
    document.write("I'm not sure what time it is!");
}
// document.write("<br /><br /> The hour is: ")
// document.write( myDate.getHours() );