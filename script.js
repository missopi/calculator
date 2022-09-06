const numberBtns = document.querySelectorAll('[data-num]');
const clearBtn = document.querySelector('[data-clear]');
const operatorBtns = document.querySelectorAll('[data-op]');
const equalsBtn = document.querySelector('[data-equals]');
const previousText = document.querySelector('[data-pre]');
const currentText = document.querySelector('[data-current]');
const deleteBtn = document.querySelector('[data-delete]');

// class to house all of the calculator functions

class calculator {
    constructor(previousText, currentText) {
      this.previousText = previousText;
      this.currentText = currentText;
      this.clear();
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

chooseOperator(operation) {
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

roundNumber(number) {
    return Math.round(number * 10000) / 10000;
};

delete() {
    this.current = this.current.toString().slice(0, -1);
};

display() {
    this.currentText.innerText = this.roundNumber(this.current);
    if (this.operation != null) {
      this.previousText.innerText =`${this.roundNumber(this.previous)} ${this.operation}`;
    } else {
      this.previousText.innerText = '';
    };
};

keyboardSupport(e) {
    if (e.key === 'Escape') this.clear();
    if ((e.key >= 0 && e.key <= 9) || (e.key === '.')) this.getNumber(e.key);
    if (e.key === '=') this.operate();
    if (e.key === 'Backspace') this.delete();
    if ((e.key === '+') || (e.key === '-')) this.chooseOperator(e.key);
    if ((e.key === '/') || (e.key === '*')) this.chooseOperator(this.convertKey(e));
};

convertKey(e) {
    if (e.key === '/') return '÷';
    if (e.key === '*') return 'x';
}};

// event listeners for all of the buttons to link up to the functions

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
        calc.chooseOperator(button.innerText);
        calc.display();
    });
});

deleteBtn.addEventListener('click', button => {
    calc.delete();
    calc.display();
});

window.addEventListener('keydown', function(e) {
    calc.keyboardSupport(e);
    calc.display();
});



