class Snake {
    constructor() {
        this.body = [];
        this.body[0] = document.querySelector('.head');
        this.direction = window.addEventListener('keydown', e => direction == e.keyCode);
    }
    move() {
        console.log(this.body);

    }
    getDirection() {
        setTimeout( () => {
            console.log(this.direction);
            this.getDirection();
        }, 1000)
    }
}


const snake = new Snake;
snake.move();
snake.getDirection();