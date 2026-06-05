<!DOCTYPE html>
<html lang="es">
<head>

  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <meta name="description" content="In Hole Solutions">
  <link href="assets/images/favicon/favicon.png" rel="icon">
  <title>In Hole Solutions | Contacto</title>
  <link rel="stylesheet" href="assets/css/libraries.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="stylesheet" type="text/css" href="assets/css/hoja_estilo.css">
</head>

<body>
<div class="wrapper">
  <div id="header-componente"></div>
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
    <div id="footer-componente"></div>

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
<script>
  fetch('header.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('header-componente').innerHTML = html;

      // Ahora sí el header existe, activamos los triggers
      const triggers = document.querySelectorAll('.mobile-trigger');
      triggers.forEach(trigger => {
        trigger.addEventListener('click', function (e) {
          if (window.innerWidth < 992) {
            e.preventDefault();
            e.stopPropagation();

            const subMenu = this.closest('.nav__item').querySelector('.dropdown-menu');

            if (subMenu.classList.contains('show')) {
              subMenu.classList.remove('show');
            } else {
              document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
              subMenu.classList.add('show');
            }
          }
        });
      });
    });

  fetch('footer.html')
    .then(res => res.text())
    .then(html => {
      document.getElementById('footer-componente').innerHTML = html;
    });
</script>
</body>
</html>
