document.write("q.1 Write a JavaScript program to find the area of a triangle.");
var base = 10;
var height = 5;

var area = (base * height) / 2;
//disply
document.write("<br>");
console.log("area of triangle is := " + area);
document.write("area of triangle is := " + area + "<br>");

document.write("<br/>");

document.write("q.2 Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.");
//celsius 
var celsius = 25;
var fahrenheit = (celsius * 9/5) + 32;
// Displaying
console.log(celsius + "°C is " + fahrenheit + "°F");
//fahrenheit
var fahrenheit = 30;
var celsius = (fahrenheit - 32) * 5/9;
// Displaying
console.log(fahrenheit + "°F is " + celsius + "°C");
document.write("<br>");
document.write("Fahrenheit = " + fahrenheit + "°F<br>");
document.write("Celsius = " + celsius + "°C<br>");

document.write("<br/>");

document.write("q.3 Write a JavaScript program to find the area of a rectangel.");
var lenth = 10;
var width = 5;
var area = lenth * width;

console.log("Area of rectangle is: " + area);

//Displaying the result in the document
document.write("<br/>");
document.write("Area of rectangle is: " + area + "<br>");

document.write("<br/>");

document.write("q.4 Write a JavaScript program to find the area of a circle.");

var radius = 7;
// pi value 3.14 = Math.PI
var area = Math.PI * radius * radius;
console.log("Area of circle is: " + area);

document.write("Radius: " + radius + "<br>");
document.write("Area of circle is: " + area + "<br>");

document.write("<br/>");

document.write("q.5 Write a JavaScript program to calculate given formulas.");
var a = 6;
var b = 9;
var c = 3;

var result = (a - b) * (a + b);
console.log("Result of the formula this a² – b² = (a-b)(a+b) := " + result);  
document.write("Result of the formula this (a² – b² = (a-b)(a+b) ) := " + result + "<br>");


var result = (a - b) * (a - b);
console.log("Result of the formula this (a-b)² = a² – 2ab + b² := " + result);  
document.write("Result of the formula this ( (a-b)² = a² – 2ab + b² ) := " + result + "<br>");


result = (a + b + c) * (a + b + c);
console.log("Result of the formula this (a+b+c)² = a²+b²+c²+2ab+2ac+2bc " + result);
document.write("Result of the formula this ( (a+b+c)² = a²+b²+c²+2ab+2ac+2bc ) := " + result + "<br>");


result = (a - b - c) * (a - b - c);
console.log("Result of the formula this (a-b-c)² = a²+b²+c²-2ab-2ac+2bc: " + result);
document.write("Result of the formula this ( (a-b-c)² = a²+b²+c²-2ab-2ac+2bc ) := " + result + "<br>");


result = (a - b) * (a - b) * (a - b);
console.log("Result of the formula this (a-b)³ = a³- 3a²b + 3ab² – b³: " + result);
document.write("Result of the formula this ( (a-b)³ = a³- 3a²b + 3ab² – b³ ) := " + result + "<br>");