class Snake {
    constructor() {
        this.head = document.querySelector('.head');
        this.body = [this.head];
        // this.direction = this.getDirection();
    }
    move() {
        console.log(this.body);

    }
    getDirection() {
        setTimeout( () => {
            let direction;
            window.addEventListener('keydown', e => e.keyCode === direction);
            this.getDirection();
            console.log(direction);
            return direction;
        }, 1000)
    }
}


const snake = new Snake;
snake.move();
console.log(snake.direction);