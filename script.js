const numberBtns = document.querySelectorAll('[data-num]');
const clearBtn = document.querySelector('[data-clear]');
const operatorBtns = document.querySelectorAll('[data-op]');
const equalsBtn = document.querySelector('[data-equals]');
const previousOperation = document.querySelector('[data-pre]');
const currentOperation = document.querySelector('[data-current]');
const deleteBtn = document.querySelector('[data-delete]');

class calculator {
    constructor(previousOperation, currentOperation) {
      this.previousOperation = previousOperation
      this.currentOperation = currentOperation
      this.clear()
};

getNumber(number) {
    if (number === 'decimel' && this.currentOperation.includes('decimel')) return;
    this.currentOperation = this.currentOperation.toString() + number.toString();
};

chooseOperation(operation) {
    if (this.currentOperation === '') return
    if (this.previousOperation !== '') {
      this.operate();
    };

    this.currentOperation = '';
    this.operation = operation;
    this.previousOperation = this.currentOperation;
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
}

delete() {
    this.currentOperation = this.currentOperation.toString().slice(0, -1);
}

clear() {
    this.currentOperation = '';
    this.previousOperation = '';
    this.operation = undefined;
};

display() {
}

};

const calc = new calculator(previousOperation, currentOperation);

numberBtns.forEach(button => {
    button.addEventListener('click', ()=> {
        calc.getNumber(button.innerText);
    });
});

equalsBtn.addEventListener('click', ()=> {
    calc.operate();
});

clearBtn.addEventListener('click', ()=> {
});

operatorBtns.forEach(button => {
    button.addEventListener('click', ()=> {
        calc.operate(button.innerText);
    })
});

deleteBtn.addEventListener('click', ()=> {

})


