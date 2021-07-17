/**
 * Nombre: Miguel
 * Apellido: Leiva
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
 
 */
function mostrar()
{
	//tomo el mes
	let mes;
	let mensaje;

	//ingreso de valores
	mes = document.getElementById("txtIdMes").value;
	

	//condiciones
	switch (mes)
	{
		case "Enero":
			mensaje = "que comiences bien el año!!!.";						
			break;
		case "Marzo":
			mensaje = "a clases!!!.";
			break;
		case "Julio":
			mensaje = "se vienen las vacaciones!!!.";
			break;	
		case "Diciembre":
			mensaje = "Felices fiestas!!!..";
			break;
		default:
			mensaje = "Este mes no tiene onda";
			break;
	}//fin de las condiciones
	
	
	
	
	
	
	/*
	if (mes == "Enero")
	{
		mensaje = "que comiences bien el año!!!."
	}
	else
	{
		if (mes == "Marzo") 
		{
			mensaje = "a clases!!!."
		}
		else
		{
			if (mes == "Julio")
			{
				mensaje = "se vienen las vacaciones!!!."				
			}
			else
			{
				if (mes == "Diciembre") 
				{
					mensaje = "Felices fiestas!!!.."
				}
			}
		}
	}
*/


	alert(mensaje);
}//FIN DE LA FUNCIÓN