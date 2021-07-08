/* 
Nombre: Miguel
Apellido: Leiva
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//reservo espacio en memoria para guardar el dato
	let nombre;
	//guardo en la var nombre el tenxto ingresado dentro de la ventana prompt
	nombre = prompt("ingrese un dato, por ej, su nombre")
	//copio el nombre ingresado en la caja de texto embebida en la pagina, en la var nombre
	document.getElementById("txtIdNombre").value = nombre;
	//muestro el alert
	alert(nombre);
}

