$(window).on('load', function(){  // Animate loader off screen
    $(".pre-loader").fadeOut("slow");;
});

const clickCounter = document.querySelector('.footer .click-counter');
let clickCnt = 0;

//console log click function
function logClick (e) {
    clickCnt++; 
    showClicks();
}

//show clicks
function showClicks () {
    if (clickCnt == 1) {
        clickCounter.innerHTML = `Yes! You've starred ${clickCnt} time 🙂`;
    }
    else if (clickCnt <= 10) {
        clickCounter.innerHTML = `Hooray! You've starred ${clickCnt} times 😁`;
    }
    else if (clickCnt > 10 && clickCnt <= 20) {
        clickCounter.innerHTML = `Awesome! You've starred ${clickCnt} times 🎉<br>How about starring me on <a href="https://github.com/icheft/ntu-homepage" target="_blank">GitHub</a>?`;
    }
    else if (clickCnt > 20 && clickCnt <= 40) {
        clickCounter.innerHTML = `Let's goooo! You've starred ${clickCnt} times 🍾<br>How about starring me on <a href="https://github.com/icheft/ntu-homepage" target="_blank">GitHub</a>?`;
    }
    else if (clickCnt > 40 && clickCnt <= 100) {
        clickCounter.innerHTML = `That's lit 🔥 You've starred ${clickCnt} times, but you should definitely stop starring 💁🏾‍♂️<br>How about starring me on <a href="https://github.com/icheft/ntu-homepage" target="_blank">GitHub</a>?`;
    }
    else if (clickCnt > 100) {
        clickCounter.innerHTML = `OMG 😱 You've starred ${clickCnt} times 🤯 Screen-capture this message and DM me 😍<br>You'll get nothing as a reward 🤪<br>But how about starring me on <a href="https://github.com/icheft/ntu-homepage" target="_blank">GitHub</a>?`;
    }
}

//event listeners
document.addEventListener("click", logClick);



