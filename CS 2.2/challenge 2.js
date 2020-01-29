/*function centuryFromYear(year) {
    return Math.ceil(year/100);
}
 
 
 
console.log(centuryFromYear(1700));
console.log(centuryFromYear(1905));*/
 
/*function reverse(message) {
    var reverseString= "";
     for (var i=message.length-1; i>=0; i--){
         reverseString += message.charAt(i);
     }
     return reverseString;
}
console.log(reverse("boy"));
console.log(reverse("good"));*/
 
/*function noVowels(message) {
    var vowels = 'aeiou';
    var noVowelsString = "";
 
    for(var i=0; i<message.length; i++){
        var currLetter = message.charAt(i);
        if(vowels.indexOf(currLetter)<0)
            noVowelsString += currLetter;
    }
 
    return noVowelsString;
 
 
}
 
message = "Hello, how are you?";
console.log(noVowels(message));*/
 
/*function everyOther(message){
    var everyOtherString = "";

    for(var i=0; i<message.length; i+=2){
        var fourthLetter = message.charAt(i);
            everyOtherString += fourthLetter;
    }
 
    return everyOtherString;
 
}
 
message = "I am going to work on my final project";
console.log(everyOther(message));*/

function everyOther(message,n){

    var newMessage = "";
    for(var foo = 0; foo<message.length; foo+=n){
        newMessage += message.charAt(foo);
    }
    return newMessage;

}

console.log