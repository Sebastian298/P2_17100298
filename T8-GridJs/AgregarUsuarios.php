<?php
$mysqly;

$nombre = $_POST['Nombre'];
$apellidoP = $_POST['ApPa'];
$apellidoM = $_POST['ApMa'];

	include 'conexion.php';
	$conexion = new mysqli($db_dom, $db_user, $db_pass);
	$db = mysqli_select_db($conexion,$db_name);
	$conexion->set_charset('utf8');

	if(!$conexion){
		$respuesta = ['error' => true];
	} else {
		if($db){
			$query = "INSERT INTO empleados(Nombre,Apellido_Paterno,Apellido_Materno) VALUES('$nombre','$apellidoP','$apellidoM')";
			$ejec = mysqli_query($conexion,$query);
			if($ejec){
				$respuesta = [];
				echo 'Insertado';
			} else{
				echo 'Error';	
				$respuesta = ['error' =>true];

			}
	
		} else {
			$respuesta = ['error' =>true];
		}
	}

require 'index.php';
?>