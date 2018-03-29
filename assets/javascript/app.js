/*jshint esversion: 6 */

window.onload = function () {
    var questions = [
        {
            question: "Who directed the Star Wars movies?",
            guesses: ["Jules Verne", "JK Rowling", "Wally Russ", "George Lucas"],
            answer: 3
        },
        {
            question: "What species is Count Dooku?",
            guesses: ["Martian", "Kryptonian", "Gungan", "Humanoid"],
            answer: 3
        },
        {
            question: "Who were the apprentices of Darth Sidious?",
            guesses: ["Maul, Plagueis, Vader", "Venamis, Plagueis, Vader", "Maul, Tyranus, Vader", "Maul, Caedus, Vader"],
            answer: 0
        },
        {
            question: "How many Death Stars were built?",
            guesses: ["1", "2", "6", "100"],
            answer: 1
        },
        {
            question: "The Clone Wars were between...",
            guesses: ["Episodes I and II", "Episodes II and III", "Episodes III and IV", "Episodes IV and V"],
            answer: 1
        },
        {
            question: "Which major battle did the Rebel Alliance lose?",
            guesses: ["Battle of Yavin IV", "Battle of Hoth", "Battle of Endor", "Battle of Death Star III"],
            answer: 1
        },
        {
            question: "Luke Skywalker is the son of whom?",
            guesses: ["Anakin and Padme", "Vader and Shmi", "Palpatine and Asajj Ventress", "Han and Leia"],
            answer: 0
        },
        {
            question: "Who said the following: 'I am your Father'",
            guesses: ["Luke Skywalker", "Emperor Palpatine", "Darth Vader/Anakin", "Obi-Wan"],
            answer: 2
        }
    ];
    var timer = 30;
    var IntervalId;
    var clockIsRunning = false;
    var randoQuestion = Math.floor((Math.random() * 8) + 1);
    $("#0,#1,#2,#3").hide();
    var count = 0;
    var correct = 0;
    var incorrect = 0;

    $("#start_button").on("click", function () {
        if (clockIsRunning == false) {
            $("#time-remaining").html("<h2>Time remainig: 30 seconds</h2>");
            IntervalId = setInterval(countdown, 1000);
        }
        clockIsRunning = true;
        $("#start_button").hide();
        $("#0,#1,#2,#3").show();
        game();
    });

    function countdown() {
        if (timer > 0) {
            timer--;
            $("#time-remaining").html("<h2>Time Remaining: " + timer + " seconds</h2>");
        }
    }

    function questionDisplay() {
        //for (i = 0; i < questions.length; i++) {
        $("#question").text(questions[randoQuestion].question);
        console.log(questions[randoQuestion].question);
        $("#0").text(questions[randoQuestion].guesses[0]);
        $("#1").text(questions[randoQuestion].guesses[1]);
        $("#2").text(questions[randoQuestion].guesses[2]);
        $("#3").text(questions[randoQuestion].guesses[3]);
        // }
    }

    function game() {
        if (clockIsRunning == false) {
            $("#time-remaining").text("Time Remaining: 30 seconds");
            IntervalId = setInterval(countdown, 1000);
        }
        // randoQuestion = Math.floor((Math.random() * 8)+1);
        console.log(randoQuestion);
        questionDisplay(randoQuestion);
        //need to figure out how to check if one of the buttons pressed is the correct one or not

        // $("button").on("click", function () {
        //             if (?? == questions[question].correct && count<7) {
        //                 alert("Correct!");
        //correct++;
        //                 timer = 30;

        //                 clearInterval(IntervalId);
        //                 clockIsRunning = false;
        //                 game();
        //             } else if (?? !== questions[question].correct) {
        //                 alert("Incorrect!");
        //                 timer = 30;
        //incorrect++;
        //                 clearInterval(IntervalId);
        //                 clockIsRunning = false;
        //                 game();
        //             }else{
    //         var endGame=
    //         "<div><h1>Game Over</h1></div>"+
    //         "<div><h2>Correct: "+correct+"</h2></div>"+
    //         "<div><h2>Incorrect: "+incorrect+"</h2></div>";
    //         $("#action").html(gameHTML);
    //     }
    //     //         });
    // }
    // if (count == 8) {
    //     $("#action").html("Game Over!");
    }
    //need to update code to dynmicaly add in all the buttons/guesses

    //window on load end    
};