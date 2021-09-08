(function(){

    Window.board = function (width, height){
    this.width = width;
    this.height = height;
    this.playing = false;
    this.game_over = false;
    this.bars = [];
    this.ball = null;

}

Window.board.prototype = {
    get elements(){
        var elements = this.bars;
        elements.push(this.ball);
        return elements;
    }
}
})();

(function(){
Window.bar = function(ejeX, ejeY, width, height, board){
    this.ejeX = ejeX;
    this.ejeY = ejeY;
    this.width = width;
    this.height = height;
    this.board = board;
    this.board.bars.push(this);
    this.kind = "rectangle";
}

Window.bar.prototype = {
    down: function(){

    },
    up: function(){
    }
}
})();

(function(){
    Window.boardView = function(canvas,board){
    canvas = document.getElementById("canvas");
    // canvas = CanvasRenderingContext2D;
    this.width = board.width;
    this.height = board.height;
    this.board = board;
    this.ctx = canvas.getContext("2d");
    canvas.style.width = "800px";
    canvas.style.height = "400px";
}

Window.boardView.prototype = {
    draw: function(){
        for (var i = this.board.elements.length - 1; i>= 0; i--){
             var el=  this.board.elements[i];
             draw(this.ctx, el);
        };
    }
 }
 function draw(ctx,element){
    if (element !== null && element.hasOwnProperty("kind")){
        switch (element.kind){
            case "rectangle":
                ctx.fillRect(element.ejeX, element.ejeX, element.width, element.height)
                break;
        }
    }
}
})();

window.addEventListener("load", main);

function main (){
var board = new Window.board(800, 400);
var boardView = new Window.boardView("canvas", board);
var bar = new Window.bar(10, 50, 10, 60, board);
var bar = new Window.bar(600, 50, 10, 60, board);
boardView.draw(); 
}
