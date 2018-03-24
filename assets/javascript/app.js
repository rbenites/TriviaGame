/*jshint esversion: 6 */
//Global variables
var win = 0;
var loss = 0;
var totalNumQs = 8;
var counter;


window.onload = function () {
    //8 random questions with answers
    var questions = {
        question1: [{
            question: "what color is the sky?",
            guess: ["Green", "Red", "Orange", "Blue"],
            answer: "Blue"
        }]/*,
        question2: [{
            question: "",
            guess: "",
            answer: ""
        }],
        question3: [{
            question: "",
            guess: "",
            answer: ""
        }],
        question4: [{
            question: "",
            guess: "",
            answer: ""
        }],
        question5: [{
            question: "",
            guess: "",
            answer: ""
        }],
        question6: [{
            question: "",
            guess: "",
            answer: ""
        }],
        question7: [{
            question: "",
            guess: "",
            answer: ""
        }],
        question8: [{
            question: "",
            guess: "",
            answer: ""
        }]*/
    };
    console.log(questions.question1[0].question);

//populate guesses to chose from
    for (i = 0; i < 4; i++) {
        
        console.log(questions.question1[0].guess[i]);
    }
    console.log(questions.question1[0].answer);

    //pupulate area with random questions
    $(".lead").text(questions.question1[0].question);

    //populate guesses to chose from
    $("#1").text(questions.question1[0].guess[0]);
    $("#2").text(questions.question1[0].guess[1]);
    $("#3").text(questions.question1[0].guess[2]);
    $("#4").text(questions.question1[0].guess[3]);

    //need event listener for button click to track if the user clicks the correct button or not
    $("#1,#2,#3,#4").on("click", function () {
        //if users selects correct answer Alert they guessed correctly else alert incorrect and show correct answer
        if (this.id == '4') {
            alert("correct " + questions.question1[0].guess[3]);
            win++;

        } else {
            alert("incorrect " + questions.question1[0].guess[0]);
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
    for (i = 0; i < questions.length; i++) {
        if (i == 7) {
            $('#win').html("Win: " + win);
            $('#loss').html("Loss: " + loss);
            //show an option to restart the game through a button click that DOES NOT refresh the page
            createInput();
        }
    }
};