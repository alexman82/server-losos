addEventListener('load', initiate);
function initiate() {
var elem=document.getElementById('canvas');
var canvas=elem.getContext('2d');
canvas.save();
canvas.strokeStyle='blue'; //цвет линий
canvas.fillStyle='green'; // цвет заливки
canvas.globalAlfa='0.5';  //прозрачность
canvas.strokeRect(100, 400, 120, 120);
canvas.fillRect(110, 410, 100, 100);
canvas.clearRect(120, 420, 80, 80); 
var grad=canvas.createLinearGradient(0,0 , 921,683); //переменная для градиента цвета
grad.addColorStop(0, 'black'); //в каком месте градиент должен начать менять цвет
grad.addColorStop(0.5, 'grey');
grad.addColorStop(1, 'brown');
canvas.fillStyle=grad;
canvas.fillRect(10, 410, 60, 60);


canvas.beginPath(); //рисование сложных фигур - начало движения
canvas.moveTo(500, 500); //указываем куда поставить перо
canvas.lineTo(600, 600);
canvas.lineTo(500, 600);
canvas.fill();
canvas.closePath(); //рисование сложных фигур - конец движения
canvas.beginPath();
canvas.moveTo(500, 500);
canvas.lineTo(600, 600);
canvas.lineTo(500, 600);
canvas.clip();
for (var f=0; f<680; f=f+10){
	canvas.moveTo(0, f);
	canvas.lineTo(900, f);
}
canvas.stroke();
canvas.closePath();
canvas.restore();
canvas.fillStyle='yellow';

canvas.beginPath();  //рисуем круг
canvas.arc(500, 60, 50, 0, Math.PI*2, false);
canvas.fill();

canvas.beginPath();  //рисуем круг
canvas.arc(100, 60, 50, 0, Math.PI/180*30, true);
canvas.fill();

canvas.beginPath();
canvas.moveTo(50, 50);
canvas.quadraticCurveTo(200, 220, 80, 200);
canvas.stroke();

canvas.lineWidth=10;
canvas.lineCap='round';   //тип кончика линий butt, round, square
canvas.beginPath();
canvas.moveTo(230,150);
canvas.arc(200, 150, 30, 0, Math.PI, false);
canvas.stroke();
canvas.lineWidth=5;
canvas.lineJoin='bevel';   //форма соединения линий между собой  round, bevel, miter
canvas.beginPath();
canvas.moveTo(195, 135);
canvas.lineTo(215, 155);
canvas.lineTo(195, 155);
canvas.stroke();
}