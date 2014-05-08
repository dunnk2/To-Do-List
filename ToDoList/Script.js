"use strict";

//Counter that tracks how many list items have been entered
var toDoCounter = 0;

//add an empty array and add userInput into the array;
var toDoListArr = [];



//Function that creates a list item and delete button when called
var addToDoItem = function () {
    "use strict";
    //store user input in variable
    var userInput = document.getElementById("input1").value;
    toDoListArr.push(userInput);
 
    //clear the old ordered list before posting the new one
    document.getElementById("oList").innerHTML = ("");

    //use for loop to add each item from array.
    for (var i = 0; i < toDoListArr.length; i++) {
        var buttonId = i + 1000;
        document.getElementById("oList").innerHTML += "<li id='" + i + "'>" + toDoListArr[i] + "</li>" + "<button id=" + buttonId + " onclick='hideIt(" + i + ", " + buttonId + ");'>delete</button>";
        var strAddToDocounter = 'strikeOut(' + i + ');';
        document.getElementById(i).setAttribute("onclick", strAddToDocounter)
    }

    //clear input after list item added
    document.getElementById("input1").value = "";
};

//hides selected list item and button
var hideIt = function (i, buttonId) {
    "use strict"
    //splice the item out of the array with splice(i, 0);
    toDoListArr.splice(i, 1);

    //update oList with the new array array;
    document.getElementById("oList").innerHTML = ("");
    for (var i = 0; i < toDoListArr.length; i++) {
        var buttonId = i + 1000;
        document.getElementById("oList").innerHTML += "<li id='" + i + "'>" + toDoListArr[i] + "</li>" + "<button id=" + buttonId + " onclick='hideIt(" + i + ", " + buttonId + ");'>delete</button>";
        var strAddToDocounter = 'strikeOut(' + i + ');';
        document.getElementById(i).setAttribute("onclick", strAddToDocounter)
    }
};

//crosses out the selected item
var strikeOut = function (listIdStr) {
    "use strict";
    document.getElementById(listIdStr).setAttribute("class", "strike");
};
