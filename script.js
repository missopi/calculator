const numberBtns = document.querySelectorAll('[data-num]');
const clearBtn = document.querySelector('[data-clear]');
const operatorBtns = document.querySelectorAll('[data-op]');
const equalsBtn = document.querySelector('[data-equals]');
const previousText = document.querySelector('[data-pre]');
const currentText = document.querySelector('[data-current]');
const deleteBtn = document.querySelector('[data-delete]');


class calculator {
    constructor(previousText, currentText) {
      this.previousText = previousText;
      this.currentText = currentText;
      this.clear()
};

clear() {
    this.current = '';
    this.previous = '';
    this.operation = undefined;
};

getNumber(number) {
    if (number === '.' && this.current.includes('.')) return;
    this.current = this.current.toString() + number.toString();
};

chooseOperation(operation) {
    if (this.current === '') return;
    if (this.previous !== '') {
      this.operate();
    };
    this.operation = operation;
    this.previous = this.current;
    this.current = '';
};

operate() {
    let calculation;
    const prev = parseFloat(this.previous);
    const curr = parseFloat(this.current);
    if (prev === NaN || curr === NaN) return;
    if (this.operation === '+') {
        calculation = prev + curr;
    } else if (this.operation === '-') {
        calculation = prev - curr;
    } else if (this.operation === 'x') {
        calculation = prev * curr;
    } else if (this.operation === '÷') {
        calculation = prev / curr;
    } else {
        return;
    }
    this.current = calculation;
    this.operation = undefined;
    this.previous = '';
};

delete() {
    this.current = this.current.toString().slice(0, -1);
};

display() {
    this.currentText.innerText = this.current;
    if (this.operation != null) {
      this.previousText.innerText =`${this.previous} ${this.operation}`
    } else {
      this.previousText.innerText = ''
    };
};

};

const calc = new calculator(previousText, currentText);

numberBtns.forEach(button => {
    button.addEventListener('click', ()=> {
        calc.getNumber(button.innerText);
        calc.display();
    });
});

equalsBtn.addEventListener('click', button => {
    calc.operate();
    calc.display();
});

clearBtn.addEventListener('click', button => {
    calc.clear();
    calc.display();
});

operatorBtns.forEach(button => {
    button.addEventListener('click', ()=> {
        calc.chooseOperation(button.innerText);
        calc.display();
    });
});

deleteBtn.addEventListener('click', button => {
    calc.delete();
    calc.display();
});


