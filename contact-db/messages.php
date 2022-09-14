<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection.php");

$full_name = isset($_POST['full_name']) ? $_POST['full_name'] : "";
$email = isset($_POST['email']) ? $_POST['email'] : "";
$phone_number = isset($_POST['phone_number']) ? $_POST['phone_number'] : "";
$message = isset($_POST['message']) ? $_POST['message'] : "";


$query = $mysqli -> prepare(" INSERT INTO users(full_name, email, phone_number, message) VALUE (?,?,?,?)");
$query->bind_param("ssss", $full_name, $email, $phone_number, $message);
$query->execute();


echo "done";


?>
