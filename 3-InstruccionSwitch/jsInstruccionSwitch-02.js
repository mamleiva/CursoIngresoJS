/**
	Nombre: Miguel
	Apellido: Leiva
	Switch Ejercicio 2
*  Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
  * 
 */
function mostrar()
{
	//tomo el mes
	let mesDelAno;
	let mensaje;

	//asigno valores:
	mesDelAno = document.getElementById("txtIdMes").value;
	
	//Evaluacion de Condiciones
	switch (mesDelAno)
	{
		case "Septiembre": case "Octubre": case "Noviembre": case "Diciembre":
			mensaje = "Ya pasamos el frio, ahora calor!!!.";
			break;

		case "Julio": case "Agosto":
			mensaje = "Abrigate que hace frio."	;		
			break;
		
		default:
			mensaje = "Falta para el invierno.";
			break;
	}//fin de evalucion de condiciones
	alert(mensaje);

}//FIN DE LA FUNCIÓN