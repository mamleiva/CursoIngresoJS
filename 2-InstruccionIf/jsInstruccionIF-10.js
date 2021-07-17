/**
 * if-10
 * Nombre: Miguel
 * Apellido: Leiva
 * 
 * Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
 * "EXCELENTE" para notas igual a 9 o 10,
 * "APROBÓ" para notas mayores a 4,
 * "Vamos, la proxima se puede" para notas menores a 4
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
	numerorandom = parseInt(numerorandom);

	//condiciones

	if ( numerorandom > 8 ) 
	{
		alert("EXCELENTE " + numerorandom);
	}
	else
	{
		if (numerorandom > 4)
		{
			alert("APROBÓ " + numerorandom);
		}
		else
		{
			alert("Vamos, la proxima se puede " + numerorandom);
		}
		
	}
	

}//FIN DE LA FUNCIÓN