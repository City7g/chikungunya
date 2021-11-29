<?php

$_POST = json_decode(file_get_contents("php://input"), true);

if (!isset($_SERVER["HTTP_X_REQUESTED_WITH"]) and strtolower($_SERVER["HTTP_X_REQUESTED_WITH"]) != "xmlhttprequest") {
  $output = json_encode(
    array(
      "type" => "Error",
      "text" => "Request must come from Ajax"
    )
  );
  http_response_code(400);
  die($output);
}

if (!isset($_POST["email"])) {
  $output = json_encode(array("type" => "Error", "text" => "Email error"));
  http_response_code(400);
  die($output);
}

// die(var_dump($_POST));

$message = "";

foreach ($_POST as $key => $value) {
  if ($value === "") continue;

  $message .= "
    <p><strong>$key</strong>: $value</p>
  ";
}

$headers = "MIME-Version: 1.0\r\n" .
  "Content-type: text/html; charset=utf-8\r\n" .
  "From: info@chikungunya.com\r\n" .
  "X-Mailer: PHP";

$sentMail = mail("havac35589@latovic.com", "No subject", $message, $headers);

if ($sentMail) {
  http_response_code(200);
  $output = json_encode(array("type" => "message", "text" => "Success!"));
  die($output);
} else {
  http_response_code(400);
  $output = json_encode(array("type" => "error", "text" => "Email failed."));
  die($output);
};
