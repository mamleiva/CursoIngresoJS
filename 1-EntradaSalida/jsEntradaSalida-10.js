/*
Apellido: Leiva
Nombre: Miguel
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//declaro vars
	let importe;
	let resultado;
	let valordescuento;
	let inputporcentajedesc;

	//asigno valor a var
	importe = document.getElementById("txtIdImporte").value;
	
	//convierto a float
	importe = parseFloat(importe);

	//pido el porcentaje de descuento
	inputporcentajedesc = prompt("ingrese el porcentaje que desea descontar");
	//convierto a float
	inputporcentajedesc = parseFloat(inputporcentajedesc)

	//realizo operaciones

	resultado = importe - (importe*inputporcentajedesc/100);
	/* otras maneras de hacer los mismo.
	resultado = importe - (importe*0.25);
	resultado = importe * 0.75; // si le quiero sumar el 25 seria: resultado = importe * 1.25;
	valordescuento = importe * 0.25;
	resultado = importe - valordescuento;
	*/	
	document.getElementById("txtIdResultado").value = resultado;
}
