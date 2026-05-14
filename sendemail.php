<?php
$interes       	= $_POST["interes"];
$tema       	= $_POST["tema"]; 
$nombre       	= $_POST["nombre"];
$apellido      	= $_POST["apellido"];
$telefono    	= $_POST["telefono"];
$correo       	= $_POST["correo"]; 
$comentario   	= $_POST["comentario"];


    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );

if ($interes=="Ventas" or $interes=="Soporte técnico"){
    $from = "contacto@inholesolutions.com";
    $to = "ventas@inholesolutions.com";
    $subject = "Mensaje de contacto WEB";
    $message = "Mensaje del contacto: 
	Se ha recibido el siguiente mensaje de: ". $nombre ." ". $apellido ."
	Area de interes: ". $interes."
	Tema de interes: ". $tema."
	Tel.: ". $telefono."
	Correo electronico: ". $correo."
    Mensaje: ". $comentario;
}
else {
	$from = "contacto@inholesolutions.com";
    $to = "contacto@inholesolutions.com";
    $subject = "Mensaje de contacto WEB";
    $message = "Mensaje del contacto: 
	Se ha recibido el siguiente mensaje de: ". $nombre ." ". $apellido ."
	Area de interes: ". $interes."
	Tel.: ". $telefono."
	Correo electronico: ". $correo."
    Mensaje: ". $comentario;
	
}
	
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
	header ("Location: contacto.php?exito=1")
    //echo "The email message was sent.";
?>