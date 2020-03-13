// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBJX3NGrT0_BT7Ly9hcpWFNX4Ovu-rsIys",
    authDomain: "proyectousuarios-7a948.firebaseapp.com",
    projectId: "proyectousuarios-7a948",
  });
  
  var db = firebase.firestore();

  function Guardar()
  {
      var nombre = document.getElementById("nombre").value;
      var apellidoP = document.getElementById("apellidoP").value;
      var apellidoM = document.getElementById("apellidoM").value;
      var edad = document.getElementById("edad").value;
      db.collection("users").add({
      Nombre: nombre,
      Apellido_paterno: apellidoP,
      Apellido_materno: apellidoM,
      Edad: edad
    
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      var nombre = document.getElementById("nombre").value='';
      var apellidoP = document.getElementById("apellidoP").value='';
      var apellidoM = document.getElementById("apellidoM").value='';
      var edad = document.getElementById("edad").value='';
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
      
  }

  //leer registros
  var tabla=document.getElementById('tabla');
  db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML='';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        tabla.innerHTML +=  ` 
        <tr>
        <th>${doc.id}</th>
        <td>${doc.data().Nombre}</td>
        <td>${doc.data().Apellido_paterno}</td>
        <td>${doc.data().Apellido_materno}</td>
        <td>${doc.data().Edad}</td>
        <td><button class="btn btn-danger" onclick="Eliminar('${doc.id}')">Eliminar</button></td>
        <td><button class="btn btn-warning" onclick="Editar('${doc.id}','${doc.data().Nombre}','${doc.data().Apellido_paterno}','${doc.data().Apellido_materno}','${doc.data().Edad}')">Editar</button></td>
        </tr>
        `
    });
});
  
//Borrar registros
function Eliminar(id)
{
  db.collection("users").doc(id).delete().then(function() {
    alert("Document successfully deleted!");
  }).catch(function(error) {
    console.error("Error removing document: ", error);
  });
}

//Actualizar


function Editar(id,nombre,apellidoP,apellidoM,edad){
  
  document.getElementById('nombre').value(nombre);
  document.getElementById('apellidoP').value(apellidoP);
  document.getElementById('apellidoM').value(apellidoM);
  document.getElementById('edad').value(edad);

  var boton = document.getElementById('boton');

  boton.innerHTML='Editar';

  boton.onclick=function(){
   
    var washingtonRef = db.collection("users").doc(id);

    var nombre = document.getElementById('nombre').value;
    var apellidoP = document.getElementById('apellidoP').value
    var apellidoM = document.getElementById('apellidoM').value
    var edad = document.getElementById('edad').value
  
    // Set the "capital" field of the city 'DC'
  return washingtonRef.update({
    Nombre: nombre,
    Apellido_paterno: apellidoP,
    Apellido_materno: apellidoM,
    Edad: edad
  })
  .then(function() {
      console.log("Document successfully updated!");
      boton.innerHTML='Guardar';
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
  });
  }
 
}




