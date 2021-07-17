/**
	Nombre: Miguel
	Apellido: Leiva
Enunciado: Switch Ejercicio 4
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
 */
function mostrar()
{
	//creo vars
	let mesDelAno;
	let mensaje;

	//asigno valores:
	mesDelAno = document.getElementById("txtIdMes").value;

	switch (mesDelAno)
	{
		case "Febrero":
			mensaje = "si. tiene 28 días.";
			break;
		case "Septiembre": case "Noviembre": case "Abril": case "Junio":
			mensaje = "si. tiene 30 días.";
			break;		
		default:
			mensaje = "si. tiene 31 días";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN