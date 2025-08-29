const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');
const operatorButtons = document.querySelectorAll('button.orange');

let current = '0';
let operator = null;
let prev = null;
let resetNext = false;

// Operator button highlight logic
function clearOperatorActive() {
    operatorButtons.forEach(b => b.classList.remove('active'));
}

operatorButtons.forEach(btn => {
    if (btn.textContent !== '=') {
        btn.addEventListener('click', () => {
            clearOperatorActive();
            btn.classList.add('active');
        });
    }
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;

        if (!isNaN(val)) {
            handleNumber(val);
        } else if (['+', '-', '*', '/'].includes(val)) {
            handleOperator(val);
        } else if (val === '=') {
            if (operator) calculate();
            clearOperatorActive();
        } else if (val === '.') {
            if (!current.includes('.')) current += '.';
        } else {
            handleSpecial(val);
        }
        updateDisplay();
    });
});

function updateDisplay() {
    display.textContent = current;
}

function handleNumber(num) {
    if (resetNext) {
        current = num;
        resetNext = false;
    } else {
        current = current === '0' ? num : current + num;
    }
}

function handleOperator(op) {
    if (operator && !resetNext) {
        calculate();
    }
    prev = current;
    operator = op;
    resetNext = true;
}

function calculate() {
    let a = parseFloat(prev);
    let b = parseFloat(current);
    if (operator === '+') current = (a + b).toString();
    else if (operator === '-') current = (a - b).toString();
    else if (operator === '*') current = (a * b).toString();
    else if (operator === '/') current = b !== 0 ? (a / b).toString() : 'Error';
    operator = null;
    prev = null;
    resetNext = true;
}
const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.buttons button');
const operatorButtons = document.querySelectorAll('button.orange');

let current = '0';
let operator = null;
let prev = null;
let resetNext = false;

// Operator button highlight logic
function clearOperatorActive() {
    operatorButtons.forEach(b => b.classList.remove('active'));
}

operatorButtons.forEach(btn => {
    if (btn.textContent !== '=') {
        btn.addEventListener('click', () => {
            clearOperatorActive();
            btn.classList.add('active');
        });
    }
});

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.textContent;

        if (!isNaN(val)) {
            handleNumber(val);
        } else if (['+', '-', '*', '/'].includes(val)) {
            handleOperator(val);
        } else if (val === '=') {
            if (operator) calculate();
            clearOperatorActive();
        } else if (val === '.') {
            if (!current.includes('.')) current += '.';
        } else {
            handleSpecial(val);
        }
        updateDisplay();
    });
});

function updateDisplay() {
    display.textContent = current;
}

function handleNumber(num) {
    if (resetNext) {
        current = num;
        resetNext = false;
    } else {
        current = current === '0' ? num : current + num;
    }
}

function handleOperator(op) {
    if (operator && !resetNext) {
        calculate();
    }
    prev = current;
    operator = op;
    resetNext = true;
}

function calculate() {
    let a = parseFloat(prev);
    let b = parseFloat(current);
    if (operator === '+') current = (a + b).toString();
    else if (operator === '-') current = (a - b).toString();
    else if (operator === '*') current = (a * b).toString();
    else if (operator === '/') current = b !== 0 ? (a / b).toString() : 'Error';
    operator = null;
    prev = null;
    resetNext = true;
}

function handleSpecial(key) {
    if (key === 'AC') {
        current = '0';
        operator = null;
        prev = null;
    } else if (key === '+/-') {
        current = (parseFloat(current) * -1).toString();
    } else if (key === '%') {
        current = (parseFloat(current) / 100).toString();
    }
}

updateDisplay();
function handleSpecial(key) {
    if (key === 'AC') {
        current = '0';
        operator = null;
        prev = null;
    } else if (key === '+/-') {
        current = (parseFloat(current) * -1).toString();
    } else if (key === '%') {
        current = (parseFloat(current) / 100).toString();
    }
}

updateDisplay();