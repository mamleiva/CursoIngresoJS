/**
 * Nombre: Miguel
 * Apellido: Leiva
 * if-05
 * Al ingresar una edad solo debemos informar si la persona NO es adolescente osea entre 13 y 17 años (inclusive).
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

	if ( edad <13 || edad >17 ) 
	{
		alert("La persona NO es adolescente");
	}
	
}//FIN DE LA FUNCIÓN

/**
 * otra manera
 /**
 * Nombre: Miguel
 * Apellido: Leiva
 * if-05
 * Al ingresar una edad solo debemos informar si la persona NO es adolescente osea entre 13 y 17 años (inclusive).
 * 
 

function mostrar()
{
	//declaro vars
	let edad;
 
	//ingreso de datos
	edad = document.getElementById("txtIdEdad").value;
	//paso a entero
	edad = parseInt(edad);

	if ( edad <= 12 ) 
	{
		alert("La persona NO es adolescente");
	}
	if ( edad >= 18 )
	{
		alert("La persona NO es adolescente");
	}
	

}//FIN DE LA FUNCIÓN

 */