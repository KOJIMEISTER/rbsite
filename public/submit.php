<?php
require './config.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

$name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
$phone = isset($_POST['phone']) ? strip_tags(trim($_POST['phone'])) : '';
$confirm = isset($_POST['confirm']) ? $_POST['confirm'] : 'off';

$errors = [];

if (empty($name) or !preg_match("/^[A-Za-z\s]+$/", $name)) {
    $errors['name'] = 'Name is invalid.';
}

if (empty($phone) or !preg_match("/^\+?[\d\s\-()]{7,20}$/", $phone)) {
    $errors['phone'] = 'Phone is invalid.';
}

if ($confirm !== 'on') {
    $errors['confirm'] = 'Confirm required.';
}

if (!empty($errors)) {
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

$to = 'kojimeister@yandex.ru';
$subject = "New request";
$body = "Имя: $name\nТелефон: $phone";

if (sendMail($to, $subject, $body)) {
    echo json_encode(['success' => true, 'message' => 'Message sended.']);
} else {
    echo json_encode(['success' => false, 'errors' => 'Message send failed.']);
}
