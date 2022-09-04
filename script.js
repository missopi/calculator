const numberBtns = document.querySelectorAll('[data-num]');
const clearBtn = document.querySelector('[data-clear]');
const operatorBtns = document.querySelectorAll('[data-op]');
const equalsBtn = document.querySelector('[data-equals]');
const previousOperation = document.querySelector('[data-pre]');
const currentOperation = document.querySelector('[data-current]');

class calculator {
    constructor(previousOperation, currentOperation) {
      this.previousOperation = previousOperation
      this.currentOperation = currentOperation
      this.clear()
};

operate() {
    let calculation;
    let prev = this.previousOperation;
    let current = this.currentOperation;
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
    this.currentOperation = calculation;
    this.operation = undefined;
    this.previousOperation = '';
};

clear() {
    this.currentOperation = '';
    this.previousOperation = '';
    this.operation = undefined;
}};

const calculator = new calculator(previousOperation, currentOperation);

numberBtns.forEach(button =>{
    button.addEventListener('click', ()=> {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay();
    });
});

