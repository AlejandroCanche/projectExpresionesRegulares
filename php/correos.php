<?php
    
    $destinatario='canche.emma25@gmail.com';
    //Correo al que se enviará el mensaje
    $nombre=$_POST['nombre'];
    $correo=$_POST['correo'];
    $asunto=$_POST['asunto'];
    $mensaje=$_POST['mensaje'];

    $header="Enviado desde BOTER|Expresiones Regulares";
    $mensajeCompleto= $mensaje."\n\nAtentamente: ".$nombre;
        
    mail($destinatario, $asunto, $mensajeCompleto, $header);
    
    echo "OK"
?>