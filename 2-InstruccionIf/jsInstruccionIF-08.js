/**
 * Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
 * pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
 * 
 * 
 */

function mostrar()
{
	//declaro vars
	let edad;
	let estadocivil;
 
	//ingreso de datos
	edad = document.getElementById("txtIdEdad").value;
	estadocivil = document.getElementById("estadoCivil").value;
	//paso a entero
	edad = parseInt(edad);

	//condiciones
	if ( edad > 17 && estadocivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}
	else
	{
		if ( edad < 18 && estadocivil != "Soltero" )
		{
			
		}

	}



}//FIN DE LA FUNCIÓN