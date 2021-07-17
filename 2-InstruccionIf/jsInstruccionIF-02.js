/**
 * Al ingresar una edad debemos informar solo si la persona es mayor de edad
 * Nombre: Miguel
 * Apellido: Leiva
 *  
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
		alert("Es mayor de Edad")
		
	}

	alert("NO es mayor de edad");
	
}
