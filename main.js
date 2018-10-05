const food = document.querySelector('.food');
const canvas = document.querySelector('.canvas');

class Snake {
    constructor() {
        this.body = [];
        this.direction = window.addEventListener('keydown', e => this.direction = e.keyCode);
        [this.x, this.y] = [10, 10];
        this.speed = 100;
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
    add() {
        const limb = document.createElement('div');
        canvas.appendChild(limb);
        // this.body.splice(1, 0, )
        // FOLLOW UP ON SPLICE
    }
    move() {
        setTimeout(() => {
            this.add();
            this.body[0].style.gridArea = this.getArea();
            if (this.body[0].style.gridArea === food.style.gridArea) {
                this.grow();
            }
            this.body.shift();
            this.move();
        }, this.speed)
    }
    grow() {
        this.add();
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
    snake.move();
}

play();