/**
 * if-03
 * Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.
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
		 alert("Es mayor de Edad");
		
 
	 }
	 else
	 {
		 alert("No es mayor de edad");
	 }
 
	 

}//FIN DE LA FUNCIÓN