const food = document.querySelector('.food');
const canvas = document.querySelector('.canvas');
const limb = document.createElement('div');

class Snake {
    constructor() {
        this.body = [];
        this.body[0] = document.createElement('div');
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
    move() {
        setTimeout(() => {
            this.body[0].style.gridArea = this.getArea();
            canvas.appendChild(limb);
            this.body.shift();
            this.body.push(limb);
            if (this.body[0].style.gridArea === food.style.gridArea) {
                this.grow();
            }
            this.move();
        }, this.speed)
    }
    grow() {
        const limb = document.createElement('div');
        canvas.appendChild(limb);
        this.body.push(limb);
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