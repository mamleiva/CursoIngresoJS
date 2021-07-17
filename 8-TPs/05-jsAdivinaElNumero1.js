/*
Nombre: Miguel
Apellido: Leiva
1. Adivina el número (v 1.0): 
Al comenzar el juego generamos un número secreto del 1 al 100,
en la pantalla del juego dispondremos de un cuadro de texto
para ingresar un número y un botón “Verificar”, 
si el número ingresado es el mismo que el número secreto
 se dará por terminado el juego con un mensaje similar a este:
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…” 
para llegar al número secreto o si “se pasó…” del número secreto.
*/
let numeroSecreto;
let numeroIngresado; 
let contadorIntentos;
let max;
let min;

//ingreso de datos
numeroIngresado = parseInt(document.getElementById("txtIdNumero").value);
min = 1;
max = 101;
contadorIntentos = parseInt(document.getElementById("txtIdIntentos").value);

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100	 
	numeroSecreto = Math.random() * (max - min) + min; 
	

  //alert(numeroSecreto );
	

}

function verificar()
{
	if ( numeroIngresado == numeroSecreto ) 
  {
    alert("Usted es un ganador!!! y en solo " + "\" " + contadorIntentos + "\"" + "intentos");
  }
  else
  {
    alert("falta...")
  }
	
}