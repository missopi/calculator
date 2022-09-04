const numberBtns = document.querySelectorAll('[data-num]');
const clearBtn = document.querySelector('[data-clear]');
const operatorBtns = document.querySelectorAll('[data-op]');
const equalsBtn = document.querySelector('[data-equals]');
const previous = document.querySelector('[data-pre]');
const current = document.querySelector('[data-current]');
const deleteBtn = document.querySelector('[data-delete]');


class calculator {
    constructor(previous, current) {
      this.previous = previous;
      this.current = current;
      this.clear()
};

getNumber(number) {
    if (number === 'decimel' && this.current.includes('decimel')) return;
    this.current = this.current.toString() + number.toString();
    console.log(this.current);
};

chooseOperation(operation) {
    if (this.current === '') return;
    if (this.previous !== '') {
      this.operate();
    };
    this.operation = operation;
    this.previous = this.current;
    this.current = '';
    console.log(this.previous);
};

operate() {
    let calculation;
    let prev = parseFloat(this.previous);
    console.log(this.previous);
    let curr = parseFloat(this.current);
    console.log(this.current);
    if (prev === NaN || curr === NaN) return;
    console.log(this.operation);
    if (this.operation === '+') {
        calculation = prev + curr;
    } else if (this.operation === '-') {
        calculation = prev - curr;
    } else if (this.operation === 'x') {
        calculation = prev * curr;
    } else if (this.operation === '÷') {
        calculation = prev / curr;
    };
    this.current = calculation;
    this.operation = undefined;
    this.previous = '';
    console.log(this);
}

delete() {
    this.current = this.current.toString().slice(0, -1);
    console.log(this.current);
}

clear() {
    this.current = '';
    this.previous = '';
    this.operation = undefined;
    console.log(this);
};

display() {
    if (this.operation != null) {
        this.previous = `${this.previous} ${this.operation}`;
    };
    console.log(this);
}


};

const calc = new calculator(previous, current);

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


