/**
 * if-06
 * Nombre: Miguel
 * Apellido: Leiva
 * Al ingresar una edad debemos informar si la persona 
 * es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
 */

function mostrar()
{
	//declaro vars
	let edad;
 
	//ingreso de datos
	edad = document.getElementById("txtIdEdad").value;
	//paso a entero
	edad = parseInt(edad);

	if ( edad > 17 ) 
	{
		alert("es mayor de edad (mas de 18 años)");
	}
	
	/*
	else
	{
		if (edad > 12 && edad < 18  ) {
			alert("Es adolescente (entre 13 y 17 años)");			
		}
		else
		{
			alert("es un niño menor a 13");
		}

	}
	*/


}//FIN DE LA FUNCIÓN