/* The Calorie Counter App is an easy way to track your daily calories!
Simply input your protien, carbohydrates and fat in grams for each meal and the app will conver it into calories.
The button at the bottom adds up each meal to give you your daily calorie intake. */

var convertCal = []; // Make the array

function generateCals () { // Pulls the input values from the breakfast form, converts values into calories with math, displays calorie total to user, pushes calorie total down for master daily toal
        var protien = document.getElementById('protien').value;
        var proCal = protien*4;
        var carbs = document.getElementById('carbs').value;
        var carbCal = carbs*4;
        var fat = document.getElementById('fat').value;
        var fatCal = fat*9;
        convertCal.push(proCal + carbCal + fatCal); // push values sum into an array
        var total = document.getElementById('total');
        total.innerText = "TOTAL: " +convertCal+ " calories";

        grandTotal;
        alert ("Your breakfast was " +convertCal+ " calories!");
        totalvalue();
}


function generateCals2 () { // Pulls the input values from the lunch form, converts values into calories with math, displays calorie total to user, pushes calorie total down for master daily toal
    var protien2 = document.getElementById('protien2').value;
    var proCal2 = protien2*4;
    var carbs2 = document.getElementById('carbs2').value;
    var carbCal2 = carbs2*4;
    var fat2 = document.getElementById('fat2').value;
    var fatCal2 = fat2*9;
    convertCal.push(proCal2 + carbCal2 + fatCal2);
    var total2 = document.getElementById('total2');
    total2.innerText = "TOTAL: " +convertCal[1]+ " calories";

    grandTotal;
    alert ("Your lunch was " +convertCal[1]+ " calories!");
    totalvalue(); 
}


function generateCals3 () { // Pulls the input values from the dinner form, converts values into calories with math, displays calorie total to user, pushes calorie total down for master daily toal
    var protien3 = document.getElementById('protien3').value;
    var proCal3 = protien3*4;
    var carbs3 = document.getElementById('carbs3').value;
    var carbCal3 = carbs3*4;
    var fat3 = document.getElementById('fat3').value;
    var fatCal3 = fat3*9;
    convertCal.push(proCal3 + carbCal3 + fatCal3);
    var total3 = document.getElementById('total3');
    total3.innerText = "TOTAL: " +convertCal[2]+ " calories";

    grandTotal;
    alert ("Your dinner was " +convertCal[2]+ " calories!");
    totalvalue(); 
}


function generateCals4 () { // Pulls the input values from the snack form, converts values into calories with math, displays calorie total to user, pushes calorie total down for master daily toal
    var protien4 = document.getElementById('protien4').value;
    var proCal4 = protien4*4;
    var carbs4 = document.getElementById('carbs4').value;
    var carbCal4 = carbs4*4;
    var fat4 = document.getElementById('fat4').value;
    var fatCal4 = fat4*9;
    convertCal.push(proCal4 + carbCal4 + fatCal4);
    var total4 = document.getElementById('total4');
    total4.innerText = "TOTAL: " +convertCal[3]+ " calories";

    grandTotal;
    alert ("Your snacks were " +convertCal[3]+ " calories!");
    totalvalue();
}

var grandTotal;

function totalvalue() { // Adds all the array values aka the calories per each meal
    grandTotal = convertCal[0]+convertCal[1]+convertCal[2]+convertCal[3];
}

var value1; 
var value2;
var person01;

function grabInfo() { // Pulls the values entered by the user at the bottom of app (name and age)
value1 = document.getElementById('value1').value;
value2 = document.getElementById('value2').value;  

function User(name,age,grandTotal){ // Object that can be used with various users and imput as per entered in app 
    this.name = name;
    this.age = age;
    this.grandTotal = grandTotal;
}   

person01 = new User(value1,value2,grandTotal) // Logs to DOM

masterTotal.innerText = value1+ ", you have consumed " +grandTotal+ " calories today at the fine age of " +value2+ ". Woohoo!";
}