var stage = document.querySelector('#stage')
var blockSize = 10
var Width = $('#stage').width();
var Height = $('#stage').height();
var blocksInWidth = Width / blockSize
var blocksInHeight = Height / blockSize
var btn = document.querySelector('button')
var scoreArea = document.querySelector('.score')
var score = 0;
var intervalID;
var Gameover = false;
var canMove = false;
var speed = 200;
var au = document.getElementById('au');

var ctx = stage.getContext("2d")

function Block(col, row) {
    this.col = col,
        this.row = row
}


Block.prototype.draw = function (color) {
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.rect(this.col, this.row, blockSize, blockSize)
    ctx.fill()
    ctx.closePath()
}

var Snake = function () {
    this.segments = [
        new Block(20, 0),
        new Block(10, 0),
        new Block(0, 0)
    ]
    this.direction = 'right'
}


Snake.prototype.draw = function () {

    if (this.tail) {
        stage.removeChild(this.tail.node)
    }

    this.segments.forEach(function (element) {
        // console.log(element)
        element.draw('lightblue')
    })
    this.segments[0].draw('orange')
}


Snake.prototype.move = function () {
    canMove = false;
    ctx.clearRect(0, 0, Width, Height)
    var head = this.segments[0]
    var newHead;

    switch (this.direction) {
        case 'right':
            newHead = new Block(head.col + blockSize, head.row)
            break;
        case 'left':
            newHead = new Block(head.col - blockSize, head.row)
            break;
        case 'down':
            newHead = new Block(head.col, head.row + blockSize)
            break;
        case 'up':
            newHead = new Block(head.col, head.row - blockSize)
            break;
    }

    this.segments.unshift(newHead)

    if (snake.segments[0].col === apple.segment.col && (snake.segments[0].row === apple.segment.row)) {
        score += 1
        apple.move()
        apple.draw()
        scoreArea.innerHTML = score
    } else {
        if (Gameover === false) {
            // 删掉数组里面的尾巴 
            this.segments.pop()

        }
    }
    canMove = true;
}


// 碰撞检测
Snake.prototype.checkCollision = function () {
    var overUp = this.segments[0].row < 0
    var overBottom = this.segments[0].row > Height
    var overLeft = this.segments[0].col < 0
    var overRight = this.segments[0].col > Width
    var eatSelf = false
    for (var i = 1; i < this.segments.length; i++) {
        if (this.segments[0].col === this.segments[i].col && this.segments[0].row === this.segments[i].row) {
            eatSelf = true
        }
    }
    if (overUp || overBottom || overLeft || overRight || eatSelf) {
        clearInterval(intervalID)
        Gameover = true;
        alert('Game Over\n' + '最终得分：' + score)

    }
}
// 方向控制
Snake.prototype.setDirection = function (newDirection) {
    if (canMove == true) {
        if (this.direction === 'right' && newDirection === 'left') {
            return
        }
        if (this.direction === 'left' && newDirection === 'right') {
            return
        }
        if (this.direction === 'up' && newDirection === 'down') {
            return
        }
        if (this.direction === 'down' && newDirection === 'up') {
            return
        }
        this.direction = newDirection
    }
}

var directions = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
}

window.onkeydown = function (e) {
    if (directions[e.keyCode]) {
        snake.setDirection(directions[e.keyCode])
    }
}

// 随机生成
var randomNum = function (r) {
    return Math.ceil(Math.random() * r) * blockSize
}

var Apple = function () {
    this.segment = new Block(100, 10)
}
Apple.prototype.draw = function () {
    this.segment.draw('red')
}

Apple.prototype.move = function () {
    var randomCol = randomNum(blocksInWidth)
    var randomRow = randomNum(blocksInHeight)
    do {
        var needReGenerate = false
        snake.segments.forEach(function (element) {
            if (element.col === randomCol && element.row === randomRow) {
                needReGenerate = true
            }
        })
    } while (needReGenerate);
    // ------------------------------------------------
    // au.play();
    // stage.removeChild(this.segment.node)
    this.segment = new Block(randomCol, randomRow)

}



var snake = new Snake()
snake.draw()

var apple = new Apple()
apple.draw()

function Start() {
    intervalID = setInterval(function () {
        snake.move()
        apple.draw()
        snake.checkCollision()
        // if (Gameover === true) {
        //     return
        // }
        snake.draw()
    }, speed)
}
btn.onclick = function () {
    if (Gameover === false) {
        Start();
    }
}
