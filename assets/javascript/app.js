/*jshint esversion: 6 */
window.onload = function () {
    //Global variables
    //Score
    var win = 0;
    var loss = 0;
    //Question
    var questionCounter = questionArray[0];
    //Timer
    var timeRemaining = 30;
    var timerRunning = true;



    //8 random questions with answers
    var questionArray = [{
        question: "what color is the sky?",
        guess: ["Green", "Red", "Orange", "Blue"],
        answer: "Blue"
    }, {
        question: "What color is the moon?",
        guess: ["White", "Green", "Yellow", "Pink"],
        answer: "White"
    }];

    //console.log(questionArray[0].question);
    //console.log(questionArray[0].guess);
    //console.log(questionArray[0].answer);
    //populate questions and realted guesses
    for (i = 0; i < questionArray.length; i++) {
        $(".lead").text(questionArray[i].question);
        //console.log(questionArray[i].question);
        $("#1").text(questionArray[i].guess[0]);
        $("#2").text(questionArray[i].guess[1]);
        $("#3").text(questionArray[i].guess[2]);
        $("#4").text(questionArray[i].guess[3]);
        //console.log(questionArray[i].guess[0]);
        //console.log(questionArray[i].guess[1]);
        //console.log(questionArray[i].guess[2]);
        //console.log(questionArray[i].guess[3]);
        counter = i;
    }

    //need event listener for button click to track if the user clicks the correct button or not
    $("#1,#2,#3,#4").on("click", function () {
        //if users selects correct answer Alert they guessed correctly else alert incorrect and show correct answer
        if (this.id == questionArray[counter].answer) {
            alert("correct " + questionArray[counter].answer);
            win++;
        } else {
            alert("incorrect " + questionArray[counter].answer);
            loss++;
        }
    });
    //creat timer for the alert
    //after ten seconds the alert is auto dismissed and the next question appears

    //create a question timer
    //if user guesses correctly dimiss te time, display the correct alert, reset timer for next question
    //if user runs out of time alert that they ran out of time, 
    //display the correct answer, 
    //call alert timer

    //once the final question hase been displayed and answered show the user their scrore
    function createInput() {
        var $input = $('<input type="button" value="Replay" />');
        $input.appendTo($("body"));
    }
    for (i = 0; i < questionArray.length; i++) {
        if (i == 7) {
            $('#win').html("Win: " + win);
            $('#loss').html("Loss: " + loss);
            //show an option to restart the game through a button click that DOES NOT refresh the page
            createInput();
        }
    }
    //window on load end    
};



