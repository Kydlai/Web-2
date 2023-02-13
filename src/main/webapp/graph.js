var graph, ctx;
function drawDot(x,y, text, ctx, color = "black"){
    ctx.fillStyle= color;
    ctx.beginPath();
    ctx.arc(x, y, 2, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.fillText(text, x + 3, y - 6);
}

function draw() {// Получаем canvas элемент
    graph = document.getElementById('graph');

// Указываем элемент для 2D рисования
    ctx = graph.getContext('2d');

    let width = graph.width;
    let height = graph.height;
    let R = width * 0.4;

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);

    ctx.fillStyle = '#4682B4';

//прямоугольник
    ctx.beginPath();
    ctx.fillRect(width / 2 - R, height / 2 - R, R, R,)

//треугольник
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.lineTo(width / 2, height / 2 - R);
    ctx.lineTo(width / 2 + R, height / 2);
    ctx.fill();


//четверть круга
    ctx.beginPath();
    ctx.moveTo(width / 2 + R / 2, height / 2);
    ctx.lineTo(width / 2, height / 2);
    ctx.lineTo(width / 2, height / 2 + R / 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(width / 2, height / 2, R / 2, Math.PI / 2, 0, true);
    ctx.fill();


//оси
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();


    drawDot(width/2+R/2, height/2, "R/2", ctx);
    drawDot(width/2+R, height/2, "R", ctx);
    drawDot(width/2-R/2, height/2, "-R/2", ctx);
    drawDot(width/2-R, height/2, "-R", ctx);
    drawDot(width/2, height/2+R/2, "-R/2", ctx);
    drawDot(width/2, height/2+R, "-R", ctx);
    drawDot(width/2, height/2-R/2, "R/2", ctx);
    drawDot(width/2, height/2-R, "R", ctx);
}

function restoreCanvas(){
    ctx.clearRect(0, 0, graph.width, graph.height);
    draw();
}

draw()