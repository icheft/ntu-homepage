const clickCounter = document.querySelector('.footer .click-counter');
let clickCnt = 0;

//console log click function
function logClick (e) {
    clickCnt++; 
    showClicks();
}

//show clicks
function showClicks () {
    if (clickCnt <= 10) {
        clickCounter.innerHTML = `Hooray! You've starred ${clickCnt} times 🙂`;
    }
    else if (clickCnt > 10 && clickCnt <= 20) {
        clickCounter.innerHTML = `Awesome! You've starred ${clickCnt} times 🎉`;
    }
    else if (clickCnt > 20 && clickCnt <= 40) {
        clickCounter.innerHTML = `Let's goooo! You've starred ${clickCnt} times 🍾`;
    }
    else if (clickCnt > 40 && clickCnt <= 100) {
        clickCounter.innerHTML = `That's lit 🔥 You've starred ${clickCnt} times, but you should definitely stop starring 💁🏾‍♂️`;
    }
    else if (clickCnt > 100) {
        clickCounter.innerHTML = `OMG 😱 You've starred ${clickCnt} times 🤯 Screen-capture this message and DM me 😍 You'll get nothing as a reward!`;
    }
}

//event listeners
document.addEventListener("click", logClick);



