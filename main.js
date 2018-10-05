const food = document.querySelector('.food');
const canvas = document.querySelector('.canvas');

class Snake {
    constructor() {
        this.head = document.querySelector('.canvas div');
        this.body = [this.head];
        this.direction = window.addEventListener('keydown', e => this.direction = e.keyCode);
        [this.x, this.y] = [10, 10];
        this.speed = 150;
    }
    move() {
        setTimeout(() => {
            if (this.direction === 38) {
                this.x--;
            } else if (this.direction === 39) {
                this.y++;
            } else if (this.direction === 40) {
                this.x++;
            } else if (this.direction === 37){
                this.y--;
            } 
            this.head.style.gridArea = `${this.x} / ${this.y} / ${this.x + 1} / ${this.y + 1}`;
            if(this.head.style.gridArea === food.style.gridArea) {
                this.grow();
                newFood();
            }
            if (this.body.length >= 2) {
                this.tailManagement(this.body);
            }
            this.move();
        }, this.speed);
    }
    grow() {
        const limb = document.createElement('div');
        canvas.appendChild(limb);
        this.body.unshift(limb);
        console.log(this.body);
    }
    tailManagement(array) {
        array.forEach()
    }
}

function newFood() {
    const [x, y] = [(Math.floor(Math.random() * 20)), (Math.floor(Math.random() * 20))];
    food.style.gridArea = `${x} / ${y} / ${x + 1} / ${y + 1}`;
}
function start() {
    const snake = new Snake;
    snake.move()
    newFood();
}
start();