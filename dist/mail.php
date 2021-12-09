<?php

require  'PHPMailer.php';
require  'SMTP.php';

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

$labels = [
  'first' => 'First Name',
  'last' => 'Last Name',
  'email' => 'Email',
  'phone' => 'Phone',
  'text' => 'Text',
  'subscribe' => 'Subscribe'
];

$formName = [
  'contact-us' => 'Stay Connected',
  'privacy' => 'Personal Information Request Form',
  'share' => 'Share Your Story'
];

$labelFormName = isset($formName[$_POST['formName']]) ? $formName[$_POST['formName']] : "No subject!";

foreach ($_POST as $key => $value) {
  if ($value === "" || $key === 'formName') continue;

  $label = isset($labels[$key]) ? $labels[$key] : $key;

  $message .= "
    <p><strong>$label</strong>: $value</p>
  ";
}

$email = 'info@chikungunya.com';
$message_body = $message;
$subject = $labelFormName;
$mail = new PHPMailer;
$mail->isSMTP();
// $mail->SMTPDebug = SMTP::DEBUG_SERVER;  
$mail->Host = 'chikungunya.com';
$mail->SMTPAuth = true;
$mail->Username = 'noreply@chikungunya.com';
$mail->Password = 'i753f%qOled@#';
// $mail->SMTPSecure = 'ssl'; 
$mail->Port = 25;
$mail->setFrom('noreply@chikungunya.com', 'chikungunya.com');
$mail->addAddress($email);

$mail->isHTML(true);
$mail->Subject = $subject;
$mail->Body = $message_body;
$sentMail = $mail->send();

// $sentMail = mail("info@chikungunya.com", "No subject", $message, $headers);

if ($sentMail) {
  http_response_code(200);
  $output = json_encode(array("type" => "message", "text" => "Success!"));
  die($output);
} else {
  http_response_code(400);
  $output = json_encode(array("type" => "error", "text" => "Email failed."));
  die($output);
};
