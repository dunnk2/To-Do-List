"use strict";

//Counter that tracks how many list items have been entered
var toDoCounter = 0;



//Function that creates a list item and delete button when called
var addToDoItem = function () {
    //store user input in variable
    var userInput = document.getElementById("input1").value;

    //set counter and id's for list item and buttons
    toDoCounter++;
    var liId = toDoCounter;
    var buttonId = toDoCounter + 100000; 

    //get the ordered list, add a list item, and delete button
    document.getElementById("oList").innerHTML += "<li id='" + liId + "'>" + userInput + "</li>" + "<button id=" + buttonId + " onclick='hideIt(" + liId + ", " + buttonId + ");'>delete</button>";

    //clear input after list item added
    document.getElementById("input1").value = "";
}
//hides selected list item and button
var hideIt = function (liId, buttonId) {
    document.getElementById(liId).setAttribute("class", "hide");
    document.getElementById(buttonId).setAttribute("class", "hide");
}

