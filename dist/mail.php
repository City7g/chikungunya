<?php

if ($_POST) {

  $message = "Line 1\r\nLine 2\r\nLine 3";
  // $email = count($_POST);


  // $message .= $_POST('firstName');

  // На случай если какая-то строка письма длиннее 70 символов мы используем wordwrap()
  $message = wordwrap($message, 70, "\r\n");

  // Отправляем
  // mail('City7gor@gmail.com', 'My Subject', $message);

  if (mail('City7gor@gmail.com', 'Subject', $message)) {
    http_response_code(200);
    echo "Письмо отправлено.";
  } else {
    http_response_code(400);
    echo "Ошибка. Данные не отправлены.";
  };
}

// var_dump($_POST['last']);
