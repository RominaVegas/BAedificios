<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  $destinatario = "@gmail.com"; 

  $asunto = "Formulario de contacto desde mi sitio web";
  $cuerpoMensaje = "Nombre: " . $nombre . "\n";
  $cuerpoMensaje .= "Email: " . $email . "\n";
  $cuerpoMensaje .= "Mensaje: " . $mensaje;

  // Envío del correo electrónico
  if (mail($destinatario, $asunto, $cuerpoMensaje)) {
    echo "¡Gracias por tu mensaje! Pronto nos pondremos en contacto contigo.";
  } else {
    echo "Hubo un problema al enviar el mensaje. Por favor, inténtalo nuevamente.";
  }
}
?>
