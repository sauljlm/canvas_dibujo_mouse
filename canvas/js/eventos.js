/*const teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
  };
  
  document.addEventListener("keydown", dibujarTeclado);
  let cuadrito = document.getElementById("area_de_dibujo");
  let papel = cuadrito.getContext("2d");
  let x = 150;
  let y = 150;
  
  dibujarLinea("red", x-1, y-1, x+1, y+1, papel);
  
  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
  {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
  }
  
  function dibujarTeclado(evento)
  {
    let colorcito = "#FAA";
    let movimiento = 5;
    switch(evento.keyCode)
    {
      case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
      break;
      case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
      break;
      case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
      break;
      case teclas.RIGHT:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
      break;
    }
  }
*/
var estado = 0;          // estado del click      
var colorLinea = "blue"; // color a la linea
var area = document.getElementById('area_de_dibujo');
var papel = area.getContext("2d");
var x;                   // guardar coordenada en X
var y;                   // guardar coordenada en Y
document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse
// dibujo del borde
dibujarLinea("red", 0, 0, 300, 0, papel)
dibujarLinea("red", 300, 0, 300, 300, papel)
dibujarLinea("red", 300, 300, 0, 300, papel)
dibujarLinea("red", 0, 300, 0, 0, papel)

// Funcion para mousemove
function dibujarMouse(evento){
    if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
      dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
  }
// Funcion para mousedown
function presionarMouse(evento){
    estado = 1;         //click presionado  
    x = evento.layerX;
    y = evento.layerY;
}

// Funcion para mouseup
function soltarMouse(evento){
    estado = 0;         // click suelto
    x = evento.layerX;
    y = evento.layerY;
}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();                  // Inicia el trazo
    lienzo.strokeStyle = color;          // Estilo de trazo (color)
    lienzo.lineWidth = 2;                // Ancho de la linea
    lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
    lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
    lienzo.stroke();                     // Dibuja con el estio de trazo
    lienzo.closePath();                  // Cierra el dibujo
}
