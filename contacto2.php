<!DOCTYPE html>
<html lang="es">
<head>

  
<script src="https://code.jquery.com/jquery-3.6.0.js"></script>

<script language="javascript">
$(document).ready(function(){
    $("#area").on('change', function () {
        $("#area option:selected").each(function () {
            arealegido=$(this).val();
            $.post("modelos.php", { arealegido: arealegido }, function(data){
                $("#tema").html(data);
            });         
        });
   });
});
</script>
	
</head>

	
<body>

                
			<form class="row" action="" method="post">
    <div class="form-group col-lg-3">
        <label for="area">Área de interes:</label>
        <select name="area" id="area" class="form-control" required>
            <option value="">Seleccione...</option>
            <option value="1">Ventas</option>
            <option value="2">Soporte técnico</option>
            <option value="3">Recursos Humanos</option>
        </select>
    </div>
    <div class="form-group col-lg-3" >
        <label for="tema" id="tema"></label>
        
    </div>
</form>
							
							
             
</body>
</html>
