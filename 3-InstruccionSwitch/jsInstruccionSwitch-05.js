/**	Nombre: Miguel
 * 	Apellido: Leiva
 * Enunciado: Switch Ejercicio 5
 * Al ingresar una hora, informar:
 * si está entre las 7 y las 11 : "Es de mañana.".
 * 
 */
function mostrar()
{
	//declaro vars
	let horaDelDia;
	let mensaje;

	//tomo la hora
	horaDelDia = parseInt(document.getElementById("txtIdHora").value);
	
	//Evaluacion de Condiciones
	switch (true)
	{
		case horaDelDia >= 7 && horaDelDia <= 11:
			mensaje = "Es de mañana."		
			break;
			
		default:
			mensaje = "NO es de mañana"
			break;
	}//Fin de Evaluacion de condiciones
alert(mensaje);

}//FIN DE LA FUNCIÓN