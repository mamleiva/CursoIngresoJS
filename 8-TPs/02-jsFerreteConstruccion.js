/*
Apellido: Leiva
Nombre: Miguel
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //declaro vars
    let largoterre;
    let anchoterre;
    let perimetroterre;
    let cantalambre;
   

    //asigno valores a vars
    largoterre = document.getElementById("txtIdLargo").value;
    anchoterre = document.getElementById("txtIdAncho").value;

    //convierto a Float
    largoterre = parseFloat(largoterre);
    anchoterre = parseFloat(anchoterre);
    
    //operaciones
    perimetroterre = largoterre*2 + anchoterre*2;
    cantalambre = perimetroterre * 3;
    alert("La cantidad de alambre es: " + cantalambre);

}
function Circulo () 
{
    //declaro vars
	let radioterre;
    let diametro;
    let alambretotal;

    //asigno valores a vars
    radioterre = document.getElementById("txtIdRadio").value;
    
    //convierto a float
    radioterre = parseFloat(radioterre);

    //operaciones
    diametro = radioterre * 2;
    alambretotal = diametro * 3;

    alert("se necesitan " + alambretotal + " metros de alambre para un radio de terreno de " + radioterre );

}
function Materiales () 
{
    //declaro vars    
    let bolsascemen;
    let bolsascal;
    let metroscuad;
    let largoterre;
    let anchoterre;
    let cantcemen;
    let cantcal; 

    //asignos valores a vars
    bolsascemen = 2
    bolsascal = 3
    largoterre = document.getElementById("txtIdLargo").value;
    anchoterre = document.getElementById("txtIdAncho").value;
    
    //operaciones

    //convierto a float
    largoterre = parseFloat(largoterre);
    anchoterre = parseFloat(anchoterre);

    //calculo de materiales
    metroscuad = largoterre * anchoterre;
    cantcemen = metroscuad * bolsascemen;
    cantcal = metroscuad * bolsascal;

    alert("se necesitan " + cantcemen + " cementos y " + cantcal + " bolsas de cal"  );	
}