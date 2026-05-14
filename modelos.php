<?php
$html = "";

if ($_POST["intereslegido"]=="Ventas") {
	$html = '<td ><label>Tema de interés:</label></td><td><select name="tema" id="tema" class="form-control form-group w-100">
	<option value="Máquina de Torsión Continua">Máquina de Torsión Continua</option>
    <option value="Equipos de Flotación">Equipos de Flotación</option>
    <option value="Terminación de pozos">Terminación de pozos</option></select></td>
	';	
}

echo $html;	
?>