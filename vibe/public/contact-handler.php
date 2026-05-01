<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Only POST requests are allowed.',
    ]);
    exit;
}

$submissionType = trim($_POST['submission_type'] ?? 'general-inquiry');
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$company = trim($_POST['company'] ?? ($_POST['business'] ?? ''));
$service = trim($_POST['service'] ?? '');
$budget = trim($_POST['budget'] ?? '');
$message = trim($_POST['message'] ?? '');
$appointmentDate = trim($_POST['appointment_date'] ?? '');
$appointmentTime = trim($_POST['appointment_time'] ?? '');
$appointmentTimezone = trim($_POST['appointment_timezone'] ?? '');
$selectedDateLabel = trim($_POST['selected_date_label'] ?? '');
$selectedTimeLabel = trim($_POST['selected_time_label'] ?? '');
$selectedTimezoneLabel = trim($_POST['selected_timezone_label'] ?? '');

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Please enter a valid name and email address.',
    ]);
    exit;
}

$to = 'business@grothervibe.com, info@growthrevibe.com';
$siteName = 'Growth Revibe';
$safeName = preg_replace("/[\r\n]+/", ' ', $name);
$safeEmail = filter_var($email, FILTER_SANITIZE_EMAIL);

$subjectMap = [
    'homepage-inquiry' => 'New homepage inquiry from ' . $safeName,
    'contact-inquiry' => 'New contact inquiry from ' . $safeName,
    'availability-request' => 'New availability request from ' . $safeName,
];

$subject = $subjectMap[$submissionType] ?? ('New website inquiry from ' . $safeName);

$lines = [
    'Website: ' . $siteName,
    'Submission type: ' . $submissionType,
    '',
    'Name: ' . ($name !== '' ? $name : 'Not provided'),
    'Email: ' . ($email !== '' ? $email : 'Not provided'),
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Company/Business: ' . ($company !== '' ? $company : 'Not provided'),
    'Service: ' . ($service !== '' ? $service : 'Not provided'),
    'Budget: ' . ($budget !== '' ? $budget : 'Not provided'),
    '',
    'Project details:',
    $message !== '' ? $message : 'Not provided',
];

if ($submissionType === 'availability-request') {
    $lines[] = '';
    $lines[] = 'Availability request details:';
    $lines[] = 'Appointment date: ' . ($appointmentDate !== '' ? $appointmentDate : 'Not provided');
    $lines[] = 'Appointment time: ' . ($appointmentTime !== '' ? $appointmentTime : 'Not provided');
    $lines[] = 'Appointment timezone: ' . ($appointmentTimezone !== '' ? $appointmentTimezone : 'Not provided');
    $lines[] = 'Readable date: ' . ($selectedDateLabel !== '' ? $selectedDateLabel : 'Not provided');
    $lines[] = 'Readable time: ' . ($selectedTimeLabel !== '' ? $selectedTimeLabel : 'Not provided');
    $lines[] = 'Readable timezone: ' . ($selectedTimezoneLabel !== '' ? $selectedTimezoneLabel : 'Not provided');
}

$body = implode("\n", $lines);
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: ' . $siteName . ' <business@grothervibe.com>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Email could not be sent from the server. Please check your Hostinger mail configuration.',
    ]);
    exit;
}

echo json_encode([
    'ok' => true,
]);
