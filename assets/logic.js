// Steps to complete:

// Firebase is all setup! 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAcC9Ai3a0Rs2jenxhlGSa0hxMrzQkmieI",
    authDomain: "train-times-e4a4d.firebaseapp.com",
    databaseURL: "https://train-times-e4a4d.firebaseio.com",
    projectId: "train-times-e4a4d",
    storageBucket: "train-times-e4a4d.appspot.com",
    messagingSenderId: "951641719194"
  };

  firebase.initializeApp(config);

  var database = firebase.database();



  $("#submit").on("click", function (event) {
    event.preventDefault();
    var dateAdded = firebase.database.ServerValue.TIMESTAMP
    var name = $("#train-name").val().trim();
    var role = $("#destination").val().trim();
    var start = $("#frequency").val().trim();
    var monthly = $("#first-arrival").val().trim();
    // monstermath - find date, figure out months worked, create result for total billed

    $("#newEmployee").append("<tr><td>" + name + "</td><td>" + role + "</td><td>" + start + "</td><td>" + monthly + "</td></tr>");
    // clear forms 
    $(".form-control").val("");

    database.ref().push({
        name: name,
        role: role,
        start: start,
        monthly: monthly,
        dateAdded: dateAdded
    });

    // // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
    database.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot);
        // Log everything that's coming out of snapshot
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().start);
        console.log(childSnapshot.val().monthly);


        $("#newEmployee").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().start + "</td><td>" + childSnapshot.val().monthly + "</td></tr>")
        console.log(role);
    });


});

$(document).ready(function() {
    // var d = new Date();
    // var n = d.getTime();
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// date ordinal 
// date D

    // - changes HTML - in case you get more than one update 
    database.ref().orderByChild("dateAdded").on("child_added", function (childSnapshot) {
        // Change the HTML to reflect
        $("#employeename").text(childSnapshot.val().name);
        $("#role").text(childSnapshot.val().role);
        $("#startdate").text(childSnapshot.val().start);
        $("#monthlyrate").text(childSnapshot.val().monthly);

        $("#newEmployee").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().role + "</td><td>" + childSnapshot.val().start + "</td><td>" + childSnapshot.val().monthly + "</td></tr>")

    });
});

// math for trains

var tFrequency = $("#frequency").val();

    // Time is 3:30 AM
    var firstTime = ("#first-arrival").val().trim();

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // Difference between the times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));











































































// RAGE QUIT

// SO MUCH NOT WORKING I QUITTTTTT




// // new shit

// // on click submit + firebase time stamp, and values 
// $("#submit").on("click", function (event) {
//     event.preventDefault();
//     var dateAdded = firebase.database.ServerValue.TIMESTAMP
//     var trnName = $("#train-name").val().trim();
//     var trnDest = $("#destination").val().trim();
//     var trnStart = $("#first-arrival").val().trim();
//     var trnFreq = $("#frequency").val().trim();
//         // var time??? =  moment($("#frequency-input").val().trim(),"H, HH").format("HH:MM");
       
//         // 
//     $("#newTrain").append("<tr><td>" + trnName + "</td><td>" + trnDest + "</td><td>" + trnStart + "</td><td>" + trnFreq + "</td></tr>");
//     // clear forms 
//     $(".form-control").val("");

// // push values to database
//     database.ref().push({
//             name: trnName,
//             dest: trnDest,
//             start: trnStart,
//             rate: trnFreq
//         });
//     });

//     // // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
//     database.ref().on("child_added", function (childSnapshot) {
//         console.log(childSnapshot);
//         // Log everything that's coming out of snapshot
//         console.log(childSnapshot.val().name);
//         console.log(childSnapshot.val().dest);
//         console.log(childSnapshot.val().start);
//         console.log(childSnapshot.val().rate);

// // append data
//         $("#newTrain").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().dest + "</td><td>" + childSnapshot.val().start + "</td><td>" + childSnapshot.val().rate + "</td></tr>")
//         console.log(role);
//     // });

// // });

// $(document).ready(function() {
//     // var d = new Date();
//     // var n = d.getTime();
// moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
// // date ordinal 
// // date D



//     // - changes HTML - in case you get more than one update 
//     database.ref().orderByChild("dateAdded").on("child_added", function (childSnapshot) {
//         // Change the HTML to reflect
//         $("#employeename").text(childSnapshot.val().name);
//         $("#role").text(childSnapshot.val().dest);
//         $("#startdate").text(childSnapshot.val().start);
//         $("#monthlyrate").text(childSnapshot.val().rate);

//         $("#newEmployee").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().dest + "</td><td>" + childSnapshot.val().start + "</td><td>" + childSnapshot.val().rate + "</td></tr>")

//     });
// });

// // old shit
// // $("#submit").on("click", function (event) {
// //     event.preventDefault();
  

//     // Creates local "temporary" object for holding train data

  
//     // Uploads train data to the database
//     // database.ref().push(newTrn);
  
//     // Logs everything to console
//     console.log(newTrn.name);
//     console.log(newTrn.dest);
//     console.log(newTrn.start);
//     console.log(newTrn.rate);
  
//     alert("Train successfully added");

//     // Clears all of the text-boxes
//     $("#train-name-input").val("");
//     $("#destination-input").val("");
//     $("#first-arrival-input").val("");
//     $("#frequency-input").val("");
//   });
  
//   // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
//   database.ref().on("child_added", function(childSnapshot) {
//     console.log(childSnapshot.val());
  
//     // Store everything into a variable.
//     var trnName = childSnapshot.val().name;
//     var trnDest = childSnapshot.val().dest;
//     var trnStart = childSnapshot.val().start;
//     var trnFreq = childSnapshot.val().rate;
  
//     // train Info console log
//     console.log(trnName);
//     console.log(trnDest);
//     console.log(trnStart);
//     console.log(trnFreq);
//   debugger;
//     // Prettify the train first start
//     var trnStartPretty = moment.unix(trnStart).format("H, HH");
  
    // // Calculate the months worked using hardcore math
    // // To calculate the months worked
    // var trnMonths = moment().diff(moment(trnStart, "X"), "months");
    // console.log(trnMonths);
  
    // Calculate the total billed rate
    // var trnBilled = trnMonths * trnFreq;
    // console.log(trnBilled);
  




  // Example Time Math
  // -----------------------------------------------------------------------------
  // Assume Employee start date of January 1, 2015
  // Assume current date is March 1, 2016
  
  // We know that this is 15 months.
  // Now we will create code in moment.js to confirm that any attempt we use meets this test case
  

//   comment
// Solved Mathematically
    // Test case 1:
    // 16 - 00 = 16
    // 16 % 3 = 1 (Modulus is the remainder)
    // 3 - 1 = 2 minutes away
    // 2 + 3:16 = 3:18

    // Solved Mathematically
    // Test case 2:
    // 16 - 00 = 16
    // 16 % 7 = 2 (Modulus is the remainder)
    // 7 - 2 = 5 minutes away
    // 5 + 3:16 = 3:21

//  // Assumptions
//  var tFrequency = 3;

//  // Time is 3:30 AM
//  var firstTime = "03:30";

//  // First Time (pushed back 1 year to make sure it comes before current time)
//  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
//  console.log(firstTimeConverted);

//  // Current Time
//  var currentTime = moment();
//  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

//  // Difference between the times
//  var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
//  console.log("DIFFERENCE IN TIME: " + diffTime);

//  // Time apart (remainder)
//  var tRemainder = diffTime % tFrequency;
//  console.log(tRemainder);

//  // Minute Until Train
//  var tMinutesTillTrain = tFrequency - tRemainder;
//  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

//  // Next Train
//  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
//  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));


//     // Create the new row
//     var newRow = $("<tr>").append(
//       $("<td>").text(trnName),
//       $("<td>").text(trnDest),
//       $("<td>").text(trnStartPretty),
//       $("<td>").text(trnMonths),
//       $("<td>").text(trnFreq),
//       $("<td>").text(trnBilled)
//     );
  
//     // Append the new row to the table
//     $("#train-table > tbody").append(newRow);
//   });
  