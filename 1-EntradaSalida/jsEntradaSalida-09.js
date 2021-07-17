/*
Apellido: Leiva
Nombre: Miguel
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//defino vars
	let sueldo;

	//asigno valor a var
	sueldo = document.getElementById("txtIdSueldo").value;

	//convierto el valor a entero
	sueldo = parseInt(sueldo);

	//pido el porcentaje de aumento
	inputporcentaje = prompt("ingrese el porcetaje de aumento");

	//hago las operaciones para sacar el porcentaje
	porcentaje = sueldo * inputporcentaje;
	porcentajeaumento = porcentaje / 100;
	
	//sumo aumento al sueldo
	sueldoconaumento = sueldo + porcentajeaumento;

	document.getElementById("txtIdResultado").value = sueldoconaumento;
	
}
