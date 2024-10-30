<?php

// definir variables
$nombre = $apellido = $email = $ciudad = $direccion = $cp = $so = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = 	test_input($_POST["nombre"]);
  $apellido = 	test_input($_POST["apellido"]);
  $email = 	test_input($_POST["email"]);
  $ciudad = 	test_input($_POST["ciudad"]);
  $direccion = 	test_input($_POST["direccion"]);
  $cp = 	test_input($_POST["cp"]);
  $so = 	test_input($_POST["so"]);
}


function test_input($data) {
  $data = 	trim($data);
  $data = 	stripslashes($data);
  $data = 	htmlspecialchars($data);

  return $data;
}

$servername = 	"lola.internet-link.com";
$username = 	"scrabble";
$password = 	"Word$2015";

$dataBase = 	'scrabble';

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dataBase);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
if ( $so == 'radio1' ) {
  $so =       'Mac';
}
else {
  $so =       'Windows';
}

$sql = "INSERT INTO missingene_usuario ( nombre, apellidos, email, ciudad, direccion, cp, sistema)
VALUES ( '$nombre', '$apellido', '$email', '$ciudad', '$direccion', '$cp', '$so' )";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>