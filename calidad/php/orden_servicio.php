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

<html>
	<head>
		<title>In Hole Solutions</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="../php/assets/css/main.css" />
	</head>
	<body class="is-preload">
		<!-- Wrapper -->
			<div id="wrapper">
				<!-- Main -->
					<div id="main">
						<div class="inner">

							<!-- Header -->
								<header id="header">
									<a href="#" class="logo"><strong>In Hole Solutions</strong> </a>
									<ul class="icons">
										
										<li><a href="#" class="icon fa-times-circle"><span class="label"><a href="cerrar_sesion.php">Cerrar Session</a></span></a></li>
									</ul>
								</header>

							
							vfvdf

						</div>
					</div>

				
		
				
				<!-- Sidebar -->
					<div id="sidebar">
						<div class="inner">
							<!-- Menu -->
								<nav id="menu">
									<header class="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="#">Orden de Servicio</a></li>
										
									</ul>
								</nav>

						</div>
					</div>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>