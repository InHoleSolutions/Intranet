<!DOCTYPE html>
<html lang="es">
<head>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="description" content="In Hole Solutions">
  <link href="assets/images/favicon/favicon.png" rel="icon">
  <title>In Hole Solutions | Contacto</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,500,700%7cTeko:400,500,600,700&display=swap">
  <link rel="stylesheet" href="assets/css/libraries.css">
  <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
<div class="wrapper">

   
    <header id="header" class="header header-white">

      <nav class="navbar navbar-expand-lg sticky-navbar">

        <div class="container">

          <a class="navbar-brand" href="index.html">
            <img src="assets/images/logo/logo-light.svg" class="logo-light" alt="logo">
            <img src="assets/images/logo/logo-dark.svg" class="logo-dark" alt="logo">
          </a>

          <button class="navbar-toggler" type="button">
            <span class="menu-lines"><span></span></span>
          </button>

          <div class="collapse navbar-collapse m-5" id="mainNavigation">

            <ul class="navbar-nav ml-auto">

              <li class="nav__item with-dropdown">

                <a href="index.html" class="dropdown-toggle nav__item-link">Inicio</a>

                <i class="fa fa-angle-right" data-toggle="dropdown"></i>

              </li><!-- /.nav-item -->

              <li class="nav__item with-dropdown">

                <a href="nosotros.html" class="dropdown-toggle nav__item-link">Nosotros</a>

              </li><!-- /.nav-item -->

              <li class="nav__item with-dropdown">

                <a href="javascript:void(0)" class="dropdown-toggle nav__item-link">Productos</a>

                <i class="fa fa-angle-right" data-toggle="dropdown"></i>

                <ul class="dropdown-menu">

                  <li class="nav__item">

                    <a class="nav__item-link" href="productos-maquina-torsion-continua.html">Máquina de Torsión Continua</a>

                  </li>

                  <li class="nav__item">

                    <a class="nav__item-link" href="productos-equipos-flotacion.html">Equipos de Flotación</a>

                  </li>

                  <li class="nav__item">

                    <a class="nav__item-link" href="productos-equipos-terminacion-pozos.html">Terminación de pozos</a>

                  </li>

                </ul><!-- /.dropdown-menu -->

              </li><!-- /.nav-item -->

              <li class="nav__item with-dropdown">

                <a href="javascript:void(0)" class="dropdown-toggle nav__item-link">Servicios</a>

                <i class="fa fa-angle-right" data-toggle="dropdown"></i>

                <ul class="dropdown-menu">

                  <li class="nav__item">

                    <a href="#" class="nav__item-link">Apriete en banco horizontal</a>

                  </li>

                  <li class="nav__item">

                    <a href="#" class="nav__item-link">Calibración de equipos</a>

                  </li>

                  <li class="nav__item">

                    <a href="#" class="nav__item-link">Asistencia operativa</a>

                  </li>

                </ul><!-- /.dropdown-menu -->

              </li><!-- /.nav-item -->

              <li class="nav__item">

                <a href="#" class="nav__item-link active">Contacto</a>

              </li><!-- /.nav-item -->

            </ul><!-- /.navbar-nav -->

          </div><!-- /.navbar-collapse -->

          <div class="navbar-modules">

            <ul class="list-unstyled d-flex align-items-center modules__btns-list">

              <li><a href="#" class="module__btn module__btn-search"><i class="fa fa-search"></i></a></li>

              <li class="d-none d-lg-block"><a href="https://wa.me/9331197525?texto=Ejemplo"

                  class="btn btn__primary btn__bordered module__btn-request">

                  <i class="icon-phone"></i><span>993 142 7257</span>

                </a>

              </li>

            </ul><!-- /.modules-wrapper -->

          </div><!-- /.navbar-modules -->

        </div><!-- /.container -->

      </nav><!-- /.navabr -->

    </header><!-- /.Header -->



    <!-- ==========================

        contact layout 1

    =========================== -->

<section id="contactLayout1" class="contact contacto-section">
	<div class="container">
		<div class="row">
			<div class="col-sm-12 col-md-12 col-lg-12">
				<div class="contact__panel">				 
                	<div class="row">
							<div class="col-sm-4 contact__form-panel-header">
							
							<h4>Contáctanos</h4>
							<p>Complete el formulario a continuación.<!--.El control total sobre los productos nos permite garantizar que nuestros clientes reciban la mejor calidad. precios y servicio.--></p>
								
								<p><label>
			<?php  
		  $envio = $_GET["exito"];
		   if ($envio==1){ echo "El mensaje de correo ha sido enviado correctamente.";} ?></label> </p>
							</div>

					 <!-- <form class="contact__form-panel" method="post" action="sendemail.php"  >-->
					<!--<form action="/my-handling-form-page" method="post">-->
					
						
					
<form class="row" method="post" action="sendemail.php">
<table class="col-sm-12 col-md-12 col-lg-12">	
   <div class="form-group col-lg-10">
	   <tr><td> 
		   
		   </td></tr>
	   <tr>
			<td><label for="interes">Área de interés *</label></td>
		   <td>
		   <select name="interes" id="interes" class="form-control form-group w-100" required>
           <option value=""></option>
           <option value="Ventas">Ventas</option>
           <option value="Soporte técnico">Soporte técnico</option>
           <option value="Recursos Humanos">Recursos Humanos</option>
           </select
			</td>
		</tr>
    </div>
	<br>
	
    <tr id="tema"></tr>
	<br>
	
	<tr>
		<td><label for="name">Nombre de pila * </label></td>
		<td class="form-control form-group w-100"><input type="text" name="nombre" class="form-control" required></td>
	</tr>
							
							<tr><td><label for="name">Apellido * </label></td>
								<td class="form-control form-group w-100"><input type="text" name="apellido" class="form-control"  required>
								</td>
							</tr>
							<tr><td><label for="name">Teléfono* </label></td>
								<td class="form-control form-group w-100"><input type="text" name="telefono" class="form-control" required>
								</td>
							</tr>
							<tr><td><label for="name">Correo electrónico * </label></td>
								<td class="form-control form-group w-100"><input type="text" name="correo" class="form-control" required>
								</td>
							</tr>
							<tr><td><label for="name">Mensaje </label></td>
								<td><textarea class="form-control" name="comentario" placeholder="Comentarios adicionales"></textarea>
								</td>
							</tr>
</table>
	
	<div class="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center">

                    <button type="submit" class="btn btn__secondary mr-30">
                    <span>Enviar</span><i class="icon-arrow-right"></i>				
                    </button>
					  
					 <!-- <div class="input-radio">
                      <label class="label-radio">Acepto los t&eacute;rminos y condiciones.
                        <input type="checkbox" name="radioGroup2" required >
                        <span class="radio-indicator"></span>
                      </label>
                    </div>-->
                  </div><!-- /.col-lg-12 -->
</form>
                  

                  

                </div><!-- /.row -->

            </div><!-- /.contact__panel -->

          </div><!-- /.col-lg-12 -->

        </div><!-- /.row -->

      </div><!-- /.container -->

    </section><!-- /.contact layout 1 -->


     <!-- ========================= 

            Google Map

    =========================  -->

    <div class="container">
        <div class="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3794.5764090163384!2d-92.993409!3d17.998434000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDU5JzU0LjQiTiA5MsKwNTknMzYuMyJX!5e0!3m2!1ses-419!2smx!4v1695873453720!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
    </div>
    <!-- ==========================

       Contact Info

    ============================ -->

    <section id="contactInfo" class="contact contact-info pt-0">

      <div class="container">

        <div class="row">

          <!-- Contact panel #1 -->

          <div class="col-sm-12 col-md-6 col-lg-6">

            <div class="contact-info-box">

              <h4 class="contact__info-box-title">BASE OPERATIVA - OFICINA CENTRAL</h4>

              <ul class="contact__info-list list-unstyled">

                

                <li><label>Dirección: </label> Av. San Pío Mz. 6 Lt.14 Bg-4, Parque Logístico Industrial Tabasco (PLIT),
C.P. 86287, Villahermosa, Tabasco, México.
</li>

                <li><label>Teléfono fijo:</label>  +52 993 142 7257</li>

                <li><label>Horario de oficina:</label> Lunes-Viernes: 8:00 am – 06:00 pm</li>

              </ul><!-- /.contact__info-list -->

            </div><!-- /.contact-info-box -->

          </div><!-- /.col-lg-4 -->

        </div><!-- /.row -->

      </div><!-- /.container -->

    </section><!-- /.Contact Info -->

    <!-- ========================

      Footer

    ========================== -->

  <footer id="footer" class="footer">
      <div class="footer-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-8 col-xl-3 footer__widget footer__widget-about">
              
              <div class="footer__widget-content">
				  
				  <h6 class="footer__widget-title"><img src="assets/images/sliders/24-7.png" alt="client"></h6>
				  
                <!--<p class="color-gray">Si tiene alguna pregunta o necesita ayuda, no dude en contactar con nuestro equipo.</p>-->
               
                <p>Estamos aquí para ayudarte<br>
				  ¿Tienes alguna duda? <br> Contáctanos.<br>
				  +52 993 142 7257<br>
				  contacto@inholesolutions.com
				  
				  </p>
                <ul class="social__icons">
                  <li><a href="https://www.linkedin.com/company/in-hole-solutions/"><i class="fa fa-linkedin-square"></i></a></li>
                  
                </ul><!-- /.social-icons -->
              </div>
            </div><!-- /.col-xl-3 -->
            <div class="col-6 col-sm-6 col-md-6 col-lg-2 col-xl-3 offset-xl-1 footer__widget footer__widget-nav">
              <h6 class="footer__widget-title">In Hole Solutions</h6>
              <div class="footer__widget-content">
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Misión</a></li>
                    <li><a href="#">Visión</a></li>
                  </ul>
                </nav>
              </div><!-- /.footer-widget-content -->
            </div><!-- /.col-xl-2 -->
            <div class="col-6 col-sm-6 col-md-6 col-lg-3 col-xl-2 footer__widget footer__widget-nav">
              <h6 class="footer__widget-title">Industria</h6>
              <div class="footer__widget-content">
                <nav>
                  <ul class="list-unstyled">
                    <li><a href="#">Fully Rotational Torque Machine (FR)</a></li>
                    <li><a href="#">Calibración</a></li>
                    <li><a href="#">Servicio</a></li>
                    <li><a href="#">Pruebas Hidrostáticas</a></li>
                  </ul>
                </nav>
              </div><!-- /.footer-widget-content -->
            </div><!-- /.col-xl-2 -->
            <div class="col-sm-12 col-md-10 col-lg-6 col-xl-3 footer__widget footer__widget-newsletter">
              <div class="footer__widget-content">
				  <h6 class="footer__widget-title">Linea de Ética</h6>
                <p>Reportar conductas contrarias a las Políticas de In Hole Solutions o sus principios.</p>
               
                  
                    <p class="footer__contact-phone">
                  <i class="icon-arrow-right-2"></i>
                  <a href="mailto:contacto@inholesolutions.com">Reportar</a>
                </p>
            
              </div>
								
				<!-- /.footer-widget-content -->
              <!--<p class="text-right fz-13 mt-20 mb-0">Puedes darte de baja de nuestra lista de suscriptores en cualquier momento</p>-->
            </div><!-- /.col-xl-4 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.footer-top -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-3 col-lg-3">
              <img src="assets/images/logo/logo-dark.svg" alt="logo">
            </div><!-- /.col-lg-3 -->
            <div class="col-sm-12 col-md-9 col-lg-9 text-right">
              <div class="footer__copyright">
                <nav>
                  <ul class="footer__copyright-links list-unstyled d-flex flex-wrap justify-content-end">
                    <li><a href="assets/docs/Aviso de Privacidad In Hole Solutions .pdf">Aviso de privacidad</a></li>
                    <li><a href="assets/docs/Política de Calidad, Seguridad, Salud y Medio Ambiente.pdf">Política QHSE</a></li>
                    <li><a href="assets/docs/Política Esclavitud Moderna IHS.pdf">Esclavitud Moderna</a></li>
					  <li><a href="assets/docs/Política de ética empresarial IHS.pdf">Ética Empresarial</a></li>
                  </ul>
                </nav>
                <p class="mb-0"> &copy; 2025 In Hole Solutions, Todos los derechos reservados.
                </p>
              </div><!-- /.Footer-copyright -->
            </div><!-- /.col-lg-9 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.Footer-bottom -->
    </footer><!-- /.Footer -->

    <button id="scrollTopBtn"><i class="fa fa-long-arrow-up"></i></button>

    <div class="module__search-container">

      <i class="fa fa-times close-search"></i>

      <form class="module__search-form">

        <input type="text" class="search__input" placeholder="Escribe alguna palabra y presiona enter para buscar">

        <button class="module__search-btn"><i class="fa fa-search"></i></button>

      </form>

    </div><!-- /.module-search-container -->

  </div><!-- /.wrapper -->

  <script src="assets/js/jquery-3.3.1.min.js"></script>
  <script src="assets/js/plugins.js"></script>
  <script src="assets/js/main.js"></script>
	<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script language="javascript">
$(document).ready(function(){
    $("#interes").on('change', function () {
        $("#interes option:selected").each(function () {
            intereslegido=$(this).val();
            $.post("modelos.php", { intereslegido: intereslegido }, function(data){
                $("#tema").html(data);
            });         
        });
   });
});
	
	
	
</script>	

</body>
</html>
