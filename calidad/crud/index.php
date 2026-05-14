<?php

    session_start();

    if(!isset($_SESSION['usuario'])){
        echo '
            <script>
            alert("Debes de Iniciar Sesion");
            window.location = "../index.php";
            </script>
        ';
        session_destroy();
        die();
    }


?>

<!DOCTYPE html>
<html lang="es">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>CRUD con archivos en PHP y MySQL</title>
	<link href="assets/css/bootstrap.min.css" rel="stylesheet">
	<link href="assets/css/all.min.css" rel="stylesheet">
	<link href="assets/css/datatables.min.css" rel="stylesheet">
	<link rel="stylesheet" href="../php/assets/css/main.css" />
</head>

<body>
	

                          <header id="header">
									<a href="#" class="logo"><strong>Orden de Servicio</strong> </a>
									<ul class="icons">
										<!--<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
										<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>-->
										<li><a href="#" class="icon fa-times-circle"><span class="label"><a href="cerrar_sesion.php">Cerrar Session</a></span></a></li>
									</ul>
								</header>

	<main class="container">
		<h3 class="text-center pt-3">CRUD con archivos en PHP y MySQL</h3>

		<a href="nuevo.php" class="btn btn-primary my-4">Nuevo Registro</a>

		<div class="table-responsive-sm">
			<table class="display table table-bordered" id="mitabla">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nombre</th>
						<th>Email</th>
						<th>Teléfono</th>
						<th width="5%"></th>
						<th width="5%"></th>
					</tr>
				</thead>

				<tbody>

				</tbody>
			</table>
		</div>
	</main>

	<!-- Modal elimina registro -->
	<div class="modal fade" id="eliminaModal" tabindex="-1" aria-labelledby="eliminaModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-sm">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">Eliminar Registro</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					¿Desea eliminar el registro?
				</div>

				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
					<a class="btn btn-danger btn-ok">Eliminar</a>
				</div>

			</div>
		</div>
	</div>

	<script src="assets/js/bootstrap.bundle.min.js"></script>
	<script src="assets/js/jquery.min.js"></script>
	<script src="assets/js/datatables.min.js"></script>

	<script>
		$(document).ready(function() {
			$('#mitabla').DataTable({
				"order": [
					[0, "asc"]
				],
				"language": {
					"lengthMenu": "Mostrar _MENU_ registros por pagina",
					"info": "Mostrando pagina _PAGE_ de _PAGES_",
					"infoEmpty": "No hay registros disponibles",
					"infoFiltered": "(filtrada de _MAX_ registros)",
					"loadingRecords": "Cargando...",
					"processing": "Procesando...",
					"search": "Buscar:",
					"zeroRecords": "No se encontraron registros coincidentes",
					"paginate": {
						"next": "Siguiente",
						"previous": "Anterior"
					},
				},
				"bProcessing": true,
				"bServerSide": true,
				"sAjaxSource": "server_process.php"
			});
		});

		let eliminaModal = document.getElementById('eliminaModal')
		eliminaModal.addEventListener('shown.bs.modal', event => {
			let button = event.relatedTarget
			let url = button.getAttribute('data-bs-href')
			eliminaModal.querySelector('.modal-footer .btn-ok').href = url
		})
	</script>
<script src="../php/assets/js/jquery.min.js"></script>
			<script src="../php/assets/js/browser.min.js"></script>
			<script src="../php/assets/js/breakpoints.min.js"></script>
			<script src="../php/assets/js/util.js"></script>
			<script src="../php/assets/js/main.js"></script>
</body>

</html>