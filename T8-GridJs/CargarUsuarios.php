<?php
include 'conexion.php';

$conexion = new mysqli($db_dom, $db_user, $db_pass, $db_name);

if($conexion->connect_errno){
	$respuesta = [
		'error' => true
	];
} else {
	$conexion->set_charset("utf8");
	$statement = $conexion->prepare("SELECT * FROM empleados");
	$statement->execute();
	$resultados = $statement->get_result();
	
	$respuesta = [];
	
	while($fila = $resultados->fetch_assoc()){
		$usuario = [
			'Id' 		=> $fila['Id'],
			'Nombre' 	=> $fila['Nombre'],
			'Apellido_Paterno' => $fila['Apellido_Paterno'],
			'Apellido_Materno' => $fila['Apellido_Materno'],
		];
		array_push($respuesta, $usuario);
	}
}

echo json_encode($respuesta);


?>