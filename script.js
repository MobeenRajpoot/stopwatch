// Variables

let playStopBtn = document.querySelector('#play');
let resetBtn = document.querySelector('#reset');

// Time Variables

let seconds = 0;
let minutes = 0;
let hours = 0;

// Leading Time variables

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// Variables for play button condition

let timerInterval = null;
let timerStatus = 'stopped';

// Function to increment seconds, minutes and hours

function stopWatch() {

    seconds++;

    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }

    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }

    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }

    let displayTimer = document.querySelector('.timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;

}

// Adding functionality to the play button

playStopBtn.addEventListener('click', function() {

    if (timerStatus === 'stopped') {
        timerInterval = window.setInterval(stopWatch, 1000);
        playStopBtn.innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        playStopBtn.style.backgroundColor = 'skyblue';
        timerStatus = 'started';
    } else {
        window.clearInterval(timerInterval);
        playStopBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        playStopBtn.style.backgroundColor = 'green';
        timerStatus = 'stopped';
    }

});

// Adding functionality to the reset button

resetBtn.addEventListener('click', function() {

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('.timer').innerHTML = "00:00:00";
});
