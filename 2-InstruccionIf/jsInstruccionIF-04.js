/**
 * if-04
 * Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .
 */

function mostrar()
{
	 //declaro vars
	 let edad;
 
	 //ingreso de datos
	 edad = document.getElementById("txtIdEdad").value;
	 //paso a entero
	 edad = parseInt(edad);
 
	 if ( edad > 12 && edad < 18 )
	 {
		 alert("Es adolescente");
		
 
	 }
	 else
	 {
		 alert("No es adolescente");
	 }


}//FIN DE LA FUNCIÓN