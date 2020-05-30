function CargarUsuarios(){
    tabla.innerHTML = '<tr><th>Id</th><th>Nombre</th><th>Apellido Paterno/th><th>Apellido Materno/th></tr>';

	let peticion = new XMLHttpRequest();
	peticion.open('GET', 'CargarUsuarios.php');

	peticion.onload = function(){
		var datos = JSON.parse(peticion.responseText);
		tabla.innerHTML='';
		if(datos.error){
			error_box.classList.add('active');
		} else {
		for(var i = 0; i < datos.length; i++){
		  tabla.innerHTML +=  ` 
          <tr>
          <th>${datos[i].Id}</th>
          <td>${datos[i].Nombre}</td>
          <td>${datos[i].Apellido_Paterno}</td>
          <td>${datos[i].Apellido_Materno}</td>
          </tr>
          `
		 }
		}
		
	}

	peticion.send();
}

function AgregarUsuario(){
    let nombre = document.getElementById('Nombre').value;
    let apPa = document.getElementById('Ap_Paterno').value;
    let apMa = document.getElementById('Ap_Materno').value;
    let peticion = new XMLHttpRequest();
    peticion.open('POST','AgregarUsuarios.php');
    let parametros = 'Nombre='+ nombre+'&ApPa='+apPa+'&ApMa='+apMa;
    peticion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  
    peticion.onreadystatechange = ()=>{
      if(peticion.readyState == 4 && peticion.status == 200){
        Swal.fire(
          'Excelente!',
          'Se a registrado un nuevo empleado!',
          'success'
        )
        CargarUsuarios();
        document.getElementById('Nombre').value='';
        document.getElementById('Ap_Paterno').value='';
        document.getElementById('Ap_Materno').value='';
        }
    }
  
   peticion.send(parametros);
}
CargarUsuarios();