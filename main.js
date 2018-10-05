const food = document.querySelector('.food');
const canvas = document.querySelector('.canvas');

class Snake {
    constructor() {
        this.body = [];
        this.direction = window.addEventListener('keydown', e => this.direction = e.keyCode);
        [this.x, this.y] = [10, 10];
        this.speed = 100;
    }
    manage() {
        setTimeout(() => {
            this.newHead();
            if (this.body[0].style.gridArea === food.style.gridArea) {
                this.grow();
            }
            this.eatTail();
            this.manage();
        }, this.speed)
    }
    getArea() {
        if (this.direction === 38) {
            this.x--;
        } else if (this.direction === 39) {
            this.y++;
        } else if (this.direction === 40) {
            this.x++;
        } else if (this.direction === 37){
            this.y--;
        } 
        return `${this.x} / ${this.y} / ${this.x + 1} / ${this.y + 1}`;
    }
    newHead() {
        const head = document.createElement('div');
        canvas.appendChild(head);
        this.body.unshift(head);
        head.style.gridArea = this.getArea();
    }
    eatTail() {
        const tail = this.body[this.body.length - 1];
        this.body.pop(tail);
        canvas.removeChild(tail);
    }
    grow() {
        this.newHead();
        newFood();
    }
}
function newFood() {
    const [x, y] = [(Math.floor(Math.random() * 20)), (Math.floor(Math.random() * 20))];
    food.style.gridArea = `${x} / ${y} / ${x + 1} / ${y + 1}`;
}
function play() {
    const snake = new Snake;
    newFood();
    snake.manage();
}
play();