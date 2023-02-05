//display time


function displayTimeToday() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var setting = document.getElementById('setting');
    

    if(hrs >= 12) {
        setting.innerHTML = 'PM';
    } else {
        setting.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs -12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

}
document.getElementById("date").innerHTML = Date();

setInterval(displayTimeToday, 10);

//CALCULATOR//


const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})

//button//
const testing = document.getElementById('testing');

testing.addEventListener("click", testingBtn);

function testingBtn() {
    alert('have a break, have a bibingka!')
};

alert("Hello! Welcome to my 8 function acitivity!\nFeel free to explore this simple website =)")

//BMI//

const result = document.getElementById('btn');

result.addEventListener("click", bmi);

function bmi() {
    var height =document.getElementById('height').value;
    var weight =document.getElementById('weight').value;
    var bmi = weight/(height/100*height/100);
    var bmio = (bmi.toFixed(2));

    document.getElementById("result").innerHTML = "Your BMI is " + bmio;
}

//string manipulation
const upper = document.getElementById('uppercase');

upper.addEventListener("click", upperC);


function upperC() {
    var text = document.getElementById('textarea').value;
    var result = text.toUpperCase();
    
    document.getElementById("textresult").innerHTML = result;
}

const lower = document.getElementById('lowercase');

lower.addEventListener("click", lowerC);


function lowerC() {
    var text = document.getElementById('textarea').value;
    var result = text.toLowerCase();
    
    document.getElementById("textresult").innerHTML = result;
}


function color(z) {
    var a =getComputedStyle(z);
    var b =a.backgroundColor;
    document.getElementsByTagName("BODY")[0].style.backgroundColor=b;
}
