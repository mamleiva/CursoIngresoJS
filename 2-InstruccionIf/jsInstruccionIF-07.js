/**
 * if-07
 * Nombre: Miguel
 * Apellido: Leiva
 * Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
 * mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
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

	if ( edad < 18 && estadocivil != "Soltero" )
	{
		alert("Es muy pequeño para NO ser soltero.")
	}
	


}//FIN DE LA FUNCIÓN