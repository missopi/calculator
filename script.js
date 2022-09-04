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
    console.log(this);
};

chooseOperation(operation) {
    if (this.currentOperation === '') return
    if (this.previousOperation !== '') {
      this.operate();
    };
    this.currentOperation = '';
    this.operation = operation;
    this.previousOperation = this.currentOperation;
    console.log(this);
};

operate() {
    let calculation;
    let prev = this.previousOperation;
    console.log(this);
    let current = this.currentOperation;
    console.log(this);
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
    console.log(this);
}

delete() {
    this.currentOperation = this.currentOperation.toString().slice(0, -1);
    console.log(this);
}

clear() {
    this.currentOperation = '';
    this.previousOperation = '';
    this.operation = undefined;
    console.log(this);
};

display() {
    if (this.operation != null) {
        this.previousOperation = `${this.getNumber(this.previousOperation)} ${this.operation}`;
    };
    console.log(this);
}


};

const calc = new calculator(previousOperation, currentOperation);

numberBtns.forEach(button => {
    button.addEventListener('click', ()=> {
        calc.getNumber(button.innerText);
        calc.display();
    });
});

equalsBtn.addEventListener('click', ()=> {
    calc.operate();
    calc.display();
});

clearBtn.addEventListener('click', ()=> {
    calc.clear();
    calc.display();
});

operatorBtns.forEach(button => {
    button.addEventListener('click', ()=> {
        calc.chooseOperation(button.innerText);
        calc.display();
    })
});

deleteBtn.addEventListener('click', ()=> {
    calc.delete();
    calc.display();
})


