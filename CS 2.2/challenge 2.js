/*function centuryFromYear(year) {
    return Math.ceil(year/100);
}



console.log(centuryFromYear(1700));
console.log(centuryFromYear(1905));*/

function reverse(message){
    var reverseString= "";
     for (var i=message.length-1; i>=0; i--){
         reverseString += message.chartAt(i);
     }
     return reverseString;
}
console.log(reverse("hello"));
console.log(reverse("good"));
