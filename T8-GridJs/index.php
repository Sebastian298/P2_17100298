<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
<div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-12">
      <h2 class="text-center font-weight-bold text-dark">Registro de empleados</h2>
      </div>
      <div class="col-sm-12 col-md-4 mt-3">
        <button type="button" data-toggle="modal" data-target="#reg-modal" class="btn btn-success btn-lg">Registrar Empleado</button>
        <div class="modal fade" id="reg-modal" tabindex="-1" role="dialog" aria-label="reg-modal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Capture los datos</h4>
                        <button id="closeModal" class="close" data-dismiss="modal" aria-label="cerrar">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body" id="form">
                        <div class="form-group">
                            <input type="text"class="form-control w-50" id="Nombre" placeholder="Nombre">
                        </div>
                        <div class="form-group">
                            <input type="text"class="form-control w-50" id="Ap_Paterno" placeholder="Apellido Paterno">
                        </div>
                        <div class="form-group">
                            <input type="text"class="form-control w-50" id="Ap_Materno" placeholder="Apellido Materno">
                        </div>
                        <button type="button" class="btn btn-dark" onclick="AgregarUsuario()">Aceptar</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    <div class="col-sm-12 col-md-12 mt-5">
      <table class="table table-hover table-responsive-sm table-striped">
        <thead class="thead-dark table-info">
          <tr>
            <th class="bg-info text-dark">Id</th>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
          </tr>
        </thead>
       <tbody id="tabla"></tbody>
      </table>
      </div>
    </div>
</div>
<script src="app.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</body>
</html>