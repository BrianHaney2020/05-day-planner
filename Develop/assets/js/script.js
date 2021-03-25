
/* 
this is test code--proof of concept
$("#Hour10").css("background-color","green");
console.log("this working?");

var test = "#Hour" + 9;
$(test).css("background-color","red");

$("#Hour11").val("testthis");
 */ 


//Set time
// var currentTime = moment();
var currentTime = moment("10:20","HH:mm");
var currentDateTime = moment().format("dddd, MMMM Do YYYY");

// console.log(testTime.format("HH mm"));
var currentHour = currentTime.format("HH");

//should this be $("#currentDay")?
$(currentDay).html(currentDateTime);


/* 
this loop runs through all the possible hours and
1) changes the color of an input based on whether the 
hour is before (grey) the current hour, equal to the current
hour (red) or after the current hour (green).
and 2)checks to see if there is a value in the 
localStorage corresponding the hour, and if so, feeds that
value to the appropriate input 
 */

for (var counter = 9; counter<18; counter++){
    var theHour = "Hour"+counter;
    //console.log(theHour);
    //sets the colors
    if (counter < currentHour){
        $("#"+theHour).css("background-color","rgb(200,200,200");
    } else if (counter == currentHour) {
        $("#"+theHour).css("background-color","rgb(255, 128, 128)");
    } else {        
        $("#"+theHour).css("background-color","rgb(128, 255, 128)");
    }; 
    //fills the input from localStorage;  
    var hourItem = localStorage.getItem(theHour);
    console.log(counter+" "+hourItem);
    if (Boolean(hourItem)){
        $("#"+theHour).val(hourItem);
    };
};




var counter = 1;

//console.log(currentDateTime);

//console.log("counter "+counter);

/*
This can be deleted.
Originally, I had two for loops.  I combined them into one (above) 

for (var i = 9; i<=11; i++){
    var theHour = "Hour"+i;
    //console.log(theHour);
    var hourItem = localStorage.getItem(theHour);
    if (Boolean(hourItem)){
        $("#"+theHour).val(hourItem);
    };
} */

// assign variables to the save buttons
var hour9Button = document.querySelector("#Hour9Save");
var hour10Button = document.querySelector("#Hour10Save");
var hour11Button = document.querySelector("#Hour11Save");
var hour12Button = document.querySelector("#Hour12Save");
var hour13Button = document.querySelector("#Hour13Save");
var hour14Button = document.querySelector("#Hour14Save");
var hour15Button = document.querySelector("#Hour15Save");
var hour16Button = document.querySelector("#Hour16Save");
var hour17Button = document.querySelector("#Hour17Save");

//assign variables to the text input
var hour9Input = $('#Hour9');
var hour10Input = $('#Hour10');
var hour11Input = $('#Hour11');
var hour12Input = $('#Hour12');
var hour13Input = $('#Hour13');
var hour14Input = $('#Hour14');
var hour15Input = $('#Hour15');
var hour16Input = $('#Hour16');
var hour17Input = $('#Hour17');

console.log(hour13Button);

hour9Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour9Input.val();
    console.log(temp);
    localStorage.setItem("Hour9", temp);
    hour9Input.val(temp);
    counter++;
});

hour10Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour10Input.val();
    console.log(temp);
    localStorage.setItem("Hour10", temp);
    hour10Input.val(temp);
    counter++;
    //localStorage.setItem("Hour10",Hour10Input.val());
});

hour11Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour11Input.val();
    console.log(temp);
    localStorage.setItem("Hour11", temp);
    hour11Input.val(temp);
    counter++;
    //localStorage.setItem("Hour10",Hour10Input.val());
});

hour12Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour12Input.val();
    console.log(temp);
    localStorage.setItem("Hour12", temp);
    hour12Input.val(temp);
    counter++;
    //localStorage.setItem("Hour10",Hour10Input.val());
});

hour13Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour13Input.val();
    console.log(temp);
    localStorage.setItem("Hour13", temp);
    hour13Input.val(temp);
    counter++;
    //localStorage.setItem("Hour10",Hour10Input.val());
});


hour14Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour14Input.val();
    console.log(temp);
    localStorage.setItem("Hour14", temp);
    hour14Input.val(temp);
    counter++;
    //localStorage.setItem("Hour10",Hour10Input.val());
});

hour15Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour15Input.val();
    console.log(temp);
    localStorage.setItem("Hour15", temp);
    hour15Input.val(temp);
    counter++;
    //localStorage.setItem("Hour10",Hour10Input.val());
});

hour16Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour16Input.val();
    console.log(temp);
    localStorage.setItem("Hour16", temp);
    hour16Input.val(temp);
    counter++;
    //localStorage.setItem("Hour10",Hour10Input.val());
});

hour17Button.addEventListener("click",function(event){
    event.preventDefault;
    var temp = hour17Input.val();
    console.log(temp);
    localStorage.setItem("Hour17", temp);
    hour17Input.val(temp);
    counter++;
    //localStorage.setItem("Hour10",Hour10Input.val());
});