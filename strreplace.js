//replace(substr, replacetext)
var myString = 'felights JavaScripts Coders';
console.log(myString.replace(/Coders/i, "Developers"));


//slice(start, end)
var text="excellent"
text.slice(0,4) //returns "exce"
text.slice(2,4) //returns "ce"


//split(delimiter)
var message = "Welcome to Felight"


//word[0] contains "we"
//word[1] contains "lcome to Felight"
var word=message.split("l")
console.log(word[0]);
console.log(word[1]);


//toLowerCase()
var myString='Felight Rocks';
myString=myString.toLowerCase();
console.log(myString)


//toUpperCase()
var myString='Felight Rocks';
myString=myString.toUpperCase();
console.log(myString)
