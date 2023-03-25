let mathBlock = document.querySelector('.result');
let historyBlock = document.querySelector('.history');

let figures = document.querySelectorAll('.figure');

let history = [];
historyBlock.textContent = history;

let resultMath = [0];
mathBlock.innerHTML = resultMath;

for (let i = 0; i < figures.length; i++) {
    figures[i].onclick = onClickFigure;
}

function onClickFigure (event) {
    let dataValue = event.target.getAttribute("data-value");
    if (resultMath[resultMath.length-1] == '' || resultMath[0] == 0) {
        resultMath.length = 0;
    }
    if (history[history.length-1] == '=') {
        history.length = 0;
    }

    resultMath.push(dataValue);
    historyBlock.textContent = history.join(' ');
    mathBlock.innerHTML = resultMath.join('');
}

function calculateResult() {
    let count = +history[0];
    for (let i = 1; i < history.length; i = i+2) {
        if (history[i] == "+") {
            count += +history[i+1];
        } 
        if (history[i] == "-") {
            count -= +history[i+1];
        } 
        if (history[i] == "*") {
            count *= +history[i+1];
        } 
        if (history[i] == "/") {
            count /= +history[i+1];
        } 
    }
    mathBlock.innerHTML = count;
    console.log(count)
}

let calcul = document.querySelectorAll('.calc');

for (let k = 0; k < calcul.length; k++) {
    calcul[k].onclick = onClickOperator;
}

function onClickOperator(event) {
    let operator = event.target.getAttribute("data-value");
    let fullNumber = resultMath.join('');

    if (resultMath[resultMath.length-1] == '') {
        history.pop();
        history.push(operator);
    }
    else {
        resultMath.push('');
        history.push(fullNumber);
        history.push(operator);
    }

    historyBlock.textContent = history.join(' ');

    if (operator == '=') {
        calculateResult();
    }
}

function deleteButton() {
    resultMath.pop()
    mathBlock.innerHTML = resultMath.join('');
}

document.querySelector('.delete-button').onclick = deleteButton;

function deleteAllButton() {
    history = [];
    historyBlock.textContent = history;
    resultMath = [0];
    mathBlock.innerHTML = resultMath;
}

document.querySelector('.delete-all-button').onclick = deleteAllButton;