const food = document.querySelector('.food');
const canvas = document.querySelector('.canvas');

class Snake {
    constructor() {
        this.body = [document.querySelector('.body')];
        this.direction = this.getDirection();
        [this.x, this.y] = [10, 10];
        this.speed = 150;
    }
    move() {
        setTimeout( () => {
            if (this.direction === 38) {
                this.x--;
            } else if (this.direction === 39) {
                this.y++;
            } else if (this.direction === 40) {
                this.x++;
            } else if (this.direction === 37){
                this.y--;
            } 
            this.body[0].style.gridArea = `${this.x} / ${this.y} / ${this.x + 1} / ${this.y + 1}`;
            
            if (this.body[0].style.gridArea === food.style.gridArea) {
                this.grow();
                newFood();
            }
            this.move();
            this.tail();
        }, this.speed);
    }
    getDirection() {
        setTimeout(() => {
            window.addEventListener('keydown', e => this.direction = e.keyCode);
            this.getDirection();
        }, this.speed);
    }
    grow() {
        const tail = document.createElement('div');
        tail.classList.add('body');
        canvas.appendChild(tail);
        this.body.push(tail);
        console.log(this.body);
    }
    tail() {

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