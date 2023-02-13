const x_values = [-5, -4, -3, -2, -1, 0, 1, 2, 3]
const r_values = [1, 2, 3, 4, 5]
let x = null;
let y = null;
let r = null;

let flag = true;
let graph = document.getElementById("graph");
ctx = graph.getContext('2d');

function getXYR() {

    if(x == null){
        exception("Выберите значение Х")
        event.preventDefault()
        return null
    } else if(y == null){
        exception("Введите значение Y")
        event.preventDefault()
        return null
    } else if(r == null){
        exception("Выберите значение R")
        event.preventDefault()
        return null
    } else {
        return [x, y, r]
    }
}

function put_x(id){
    x = document.getElementById(id).value
    document.getElementById("x").value = x;
    document.cookie = "x=" + x;
    draw_form_dot()
    for (let i = 0; i < x_values.length; i++){
        if(x_values[i] == x) {
            document.getElementById("x_value").innerHTML = "X: " + x;
            break
        }
        document.getElementById("X" + x_values[i]).checked = false
    }
}

function put_r(id) {
    r = document.getElementById(id).value
    document.getElementById("r").value = r;
    document.cookie = "r=" + r;
    draw_form_dot()
    for (let i = 0; i < r_values.length; i++) {
        if (r_values[i] == r) {
            document.getElementById("r_value").innerHTML = "R: " + r;
            break
        }
        document.getElementById("R" + r_values[i]).checked = false
    }
}


function put_y() {
    exception("")
    draw_form_dot()
    let input = document.getElementById("input_y");
    let input_string = input.value.replace(/,/, ".")
    if (input_string > -3 && input_string < 5) {
        if (/([.,])$/i.test(input.value) || isNaN(input_string)) {
            exception("Неправльное значение y")
            input.value = "";
            document.getElementById("y_value").innerHTML = "Y: ";
            return null;
        } else {
            y = input.value.replace("\,", ".");
            document.cookie = "y=" + y;
            document.getElementById("y_value").innerHTML = "Y: " + y;
            document.getElementById("y").value = y.toString();
        }
    } else if (/([.,])$/i.test(input.value) || isNaN(input_string)) {
        exception("Неправльное значение y")
        input.value = "";
        document.getElementById("y_value").innerHTML = "Y: ";
        return null;
    } else {
        exception("Неправльное значение y, должно быть в пределах (-3, 5)")
        input.value = "";
        document.getElementById("y_value").innerHTML = "Y: ";
        return null;
    }
}

function exception(exception_value){
    document.getElementById("warning").innerHTML = exception_value;
}

function draw_form_dot() {
    exception("");
    if (r !== 0) {
        if (r < x || r < y) {
            restoreCanvas();
            exception("Точку невозможно нарисовать");
        } else {
            restoreCanvas();
            drawDot(100 + (x / r) * 80, 100 - (y / r) * 80, "",ctx, "red");
        }
    }
}

const textY = document.querySelector('#y');
if (textY !== null) {
    textY.addEventListener('keydown', function (event) {
        if (event.code === 'Enter') {
            event.preventDefault();
            put_y();
            if (flag) document.getElementById("form").submit();
        }
    });
}

window.onload = function () {
    let cookies = document.cookie.split(";")[0];
    for (let i = 0; i < cookies.length; i++) {
        let params = cookies[i].split("=");
        let name = params[0].trim();
        if (name === "x") {
            let value = Number(params[1]);
            if(!isNaN(value)) {
                x = value;
                document.getElementById("x_value").innerHTML = "X: " + x;
            }
        }
        if (name === "r") {
            let value = Number(params[1]);
            if(!isNaN(value)) {
                r = value;
                document.getElementById("r_value").innerHTML = "R: " + r;
            }
        }
        if (name === "y") {
            let value = Number(params[1]);
            if(!isNaN(value)) {
                y = value;
                document.getElementById("y_value").innerHTML = "Y: " + y;
            }
        }
    }
}

function returning() {
    let href = window.location.href.split("/");
    let new_href = '';
    for (let i = 0; i < href.length - 1; i++) {
        new_href += href[i] + '/';
    }
    window.location.href = new_href;
}

if (graph !== null) {
    graph.onclick = function (e) {
        exception("");
        restoreCanvas();
        let zero_x = e.pageX - 108;
        let zero_y = -(e.pageY - 240);

        let x_val = Math.floor(zero_x * r * 12.5) / 1000;
        let y_val = Math.floor(zero_y * r * 12.5) / 1000;

        console.log(x_val)
        if (r != null && !isNaN(r)) {
             if ((x_val > 5 || x_val < -3) && (y_val > 5 || y_val < -3) && !isNaN(x_val) && !isNaN(y_val)) {
                 exception("Невозможно определить значения x и y");
             } else if (x_val > 5 || x_val < -3 && !isNaN(x_val)) {
                 exception("Невозможно определить значение x");
             } else if (y_val > 5 || y_val < -3 && !isNaN(y_val)) {
                 exception("Невозможно определить значение y");
             } else {
                 drawDot(e.pageX - 108 + graph.height / 2, e.pageY + graph.width / 2 - 240, "", ctx, "red");
                 document.getElementById("x_value").innerHTML = "X: " + x_val;
                 document.getElementById("y_value").innerHTML = "Y: " + y_val;
                 document.getElementById("r_value").innerHTML = "R: " + r;

                 document.getElementById("x").value = x_val.toString();
                 document.getElementById("input_y").value = y_val.toString();
                 document.getElementById("r").value = r;

                 document.cookie = "y=" + y_val;
                 document.cookie = "x=" + x_val;
                 document.cookie = "r=" + r;
                 document.getElementById("form").submit();
             }
         } else exception("Вы не ввели значение R");
    }
}
