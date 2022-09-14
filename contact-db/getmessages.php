<?php
header("Access-Control-Allow-Origin: *");
include("connection.php");

$query = $mysqli->prepare("SELECT email, message FROM users");
$query->execute();
$result = $query->get_result();

$messages = [];

// get all messages and emails from database and store them in json array messages
while ($row = $result->fetch_assoc()) {
    $message["message"][] = ["email" => $row['email'], "message" => $row['message']];
}

$json = json_encode($message);
echo $json;
