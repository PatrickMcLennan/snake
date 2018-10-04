const food = document.querySelector('.food');

class Snake {
    constructor() {
        this.head = document.querySelector('.head');
        this.body = [this.head];
        this.direction = this.getDirection();
        this.x = 10;
        this.y = 10;
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
            this.head.style.gridArea = `${this.x} / ${this.y} / ${this.x + 1} / ${this.y + 1}`;
            this.move();
        }, 750)
    }
    getDirection() {
        setTimeout( () => {
            window.addEventListener('keydown', e => this.direction = e.keyCode);
            this.getDirection();
        }, 750)
    }
    grow() {
        console.log('yum');
        setFood();
    }
}
function setFood() {
    const [x, y] = [(Math.floor(Math.random() * 20)), (Math.floor(Math.random() * 20))];
    food.style.gridArea = `${x} / ${y} / ${x + 1} / ${y + 1}`;
}

const snake = new Snake;
snake.move()
setFood();
if (snake.head.style.gridArea === food.style.gridArea) {
    snake.grow();
}