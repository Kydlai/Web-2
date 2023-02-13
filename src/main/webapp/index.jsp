<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="desctiption" content="ITMO 3 sem Web lab 2">
    <meta name="keywords" content="ITMO, lab, web">
    <meta name="author" content="Kydlai Nikita">
    <title>Lab 2 Web</title>
    <link href="css/style.css" rel="stylesheet" type="text/css"/>
    <link rel="icon" href="./favicon.ico">
</head>

<body>
    <table>
        <tr id="header" class="gradient">
            <td id="group" class="shadow">
                <h2>P32141<br></h2>
                <h3>14137</h3>
            </td>
            <td id="name"  class="shadow">
                <h1>Кудлай Никита</h1>
                <h2>
                    Лабораторная работа №2
                </h2>
            </td>
        </tr>
    </table>
    <div id="graph-table">
        <canvas id="graph" height="200" width="200">Обновите браузер</canvas>
        <script src="graph.js"></script>
    </div>

    <div class="form">
        <form id="form" method="get" action="${pageContext.request.contextPath}/table">
            <input type="hidden" id="x" name="x">
            <input type="hidden" id="r" name="r">
            <table class="select-table">
                <tr>
                    <td class="rightcol" id="x_value">X:</td>
                    <td>
                        <input class="Xbutton" type="button" id="X-5" name="x" value="-5" onclick="put_x(id)">
                        <input class="Xbutton" type="button" id="X-4" name="x" value="-4" onclick="put_x(id)">
                        <input class="Xbutton" type="button" id="X-3" name="x" value="-3" onclick="put_x(id)">
                        <input class="Xbutton" type="button" id="X-2" name="x" value="-2" onclick="put_x(id)">
                        <input class="Xbutton" type="button" id="X-1" name="x" value="-1" onclick="put_x(id)">
                        <input class="Xbutton" type="button" id="X0" name="x" value="0" onclick="put_x(id)">
                        <input class="Xbutton" type="button" id="X1" name="x" value="1" onclick="put_x(id)">
                        <input class="Xbutton" type="button" id="X2" name="x" value="2" onclick="put_x(id)">
                        <input class="Xbutton" type="button" id="X3" name="x" value="3" onclick="put_x(id)">
                    </td>
                </tr>
                <tr>
                    <td class="rightcol" id="y_value"><label for="input_y">Y:</label></td>
                    <td>
                        <input type="text" name="y" id="input_y" maxlength="5" placeholder="(-3 ... 5)" onchange="put_y()">
                    </td>
                </tr>
                <tr>
                    <td class="rightcol" id="r_value">R:</td>
                    <td id="input_r">
                        <input class="Rbutton" type="button" id="R1" name="R=1" value="1" onclick="put_r(id)">
                        <input class="Rbutton" type="button" id="R2" name="R=2" value="2" onclick="put_r(id)">
                        <input class="Rbutton" type="button" id="R3" name="R=3" value="3" onclick="put_r(id)">
                        <input class="Rbutton" type="button" id="R4" name="R=4" value="4" onclick="put_r(id)">
                        <input class="Rbutton" type="button" id="R5" name="R=5" value="5" onclick="put_r(id)">
                    </td>
                </tr>


                <tr>
                    <td>------------------------</td>
                    <td>--------------------------------------------------</td>
                </tr>

                <tr>
                    <td>
                        <input type="submit" onclick="getXYR()" value="Проверить">
                    </td>
                    <td id="warning"></td>
                </tr>

            </table>
        </form>
    </div>
    <script type="text/javascript" src="client.js"></script>
</body>
</html>