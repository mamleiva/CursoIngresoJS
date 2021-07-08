/*
Nombre: Miguel
Apellido: Leiva
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value; //esta es la manera estandar de Javascript
	
	/*esta es otra manera nombre = txtIdNombre.value; /esto es porque cada elemento que tiene un id en html, los ultimos 
	navegadores como chrome, los guardan en una variable con el nombre del id */
	
	alert(nombre);

	nombre = document.getElementById("txtIdNombre").value = "";

	

}


