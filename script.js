const numberBtns = document.querySelectorAll('[data-num]');
const clearBtn = document.querySelector('[data-clear]');
const operatorBtns = document.querySelectorAll('[data-op]');
const equalsBtn = document.querySelector('[data-equals]');
const previousOperation = document.querySelector('[data-pre]');
const currentOperation = document.querySelector('[data-current]');



function operate() {
    let calculation;
    let prev = this.previousOperator;
    let current = this.currentOperator;
    if (prev === NaN || current === NaN) return;
    if (this.operation === 'add') {
        calculation = prev + current;
    } else if (this.operation === 'minus') {
        calculation = prev - current;
    } else if (this.operation === 'multiply') {
        calculation = prev * current;
    } else if (this.operation === 'divide') {
        calculation = prev / current;
    };
    this.currentOperator = calculation;
    this.operation = undefined;
    this.previousOperator = '';
};

function clear() {
    this.currentOperator = ''
    this.previousOperator = ''
    this.operation = undefined
};