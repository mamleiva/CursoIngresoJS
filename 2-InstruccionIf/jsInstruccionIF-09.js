/**
 * if-09
 * Nombre: Miguel
 * Apellido: Leiva
 * Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
 * 
 * 
 */
function mostrar()
{
	//declaro vars
	let numerorandom;
	let max;
	let min;

	//ingreso datos
	min = 1;
	max = 11;


	//Genero el número RANDOM entre 1 y 10 
	numerorandom = Math.random() * (max - min) + min;
	//paso a int
	numerorandom = parseInt(numerorandom)
	alert("el numero random entre 1 y 10 es: " + numerorandom );	

}//FIN DE LA FUNCIÓN