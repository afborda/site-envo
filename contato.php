<?php
/**
 * Created by Kaleb borda fonseca.
 * User: kaleb borda fonseca
 * Date: 05/03/19
 * Time: 10:11
 */
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailto = 'abner.borda@gmail.com';
$message = "Telefone : $phone<br\>". $message;

// a random hash will be necessary to send mixed content
$separator = md5(time());

// carriage return type (RFC)
$eol = "\r\n";

// main header (multipart mandatory)
$headers = "From: $name <$email>" . $eol;
$headers .= "MIME-Version: 1.0" . $eol;
$headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
$headers .= "Content-Transfer-Encoding: 7bit" . $eol;
$headers .= "This is a MIME encoded message." . $eol;

// message
$body = "--" . $separator . $eol;
$body .= "Content-Type: text/plain; charset=\"iso-8859-1\"" . $eol;
$body .= "Content-Transfer-Encoding: 8bit" . $eol;
$body .= $message . $eol;

//SEND Mail
if (mail($mailto, $subject, $body, $headers)) {
 echo "mail send ... OK"; // or use booleans here
 header('Location: ' . $_SERVER['HTTP_REFERER']);
} else {
 echo "mail send ... ERROR!";
 print_r( error_get_last() );
 header('Location: ' . $_SERVER['HTTP_REFERER']);
}
