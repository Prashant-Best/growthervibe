<?php
header('Content-Type: application/json; charset=utf-8');

const SITE_NAME = 'Growth Revibe';
const RECIPIENTS = 'business@grothervibe.com, info@growthrevibe.com';
const SENDER_EMAIL = 'business@grothervibe.com';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Only POST requests are allowed.',
    ]);
    exit;
}

function clean_text(string $value): string
{
    return trim(preg_replace("/[\r\n\t]+/", ' ', $value));
}

function field_value(string $value): string
{
    return $value !== '' ? $value : 'Not provided';
}

function html_value(string $value): string
{
    return htmlspecialchars(field_value($value), ENT_QUOTES, 'UTF-8');
}

function build_row(string $label, string $value): string
{
    return '<tr>'
        . '<td style="padding:10px 12px;border:1px solid #ead4df;font-weight:700;background:#fff6fa;width:180px;">'
        . htmlspecialchars($label, ENT_QUOTES, 'UTF-8')
        . '</td>'
        . '<td style="padding:10px 12px;border:1px solid #ead4df;background:#ffffff;">'
        . html_value($value)
        . '</td>'
        . '</tr>';
}

$submissionType = clean_text($_POST['submission_type'] ?? 'general-inquiry');
$name = clean_text($_POST['name'] ?? '');
$email = clean_text($_POST['email'] ?? '');
$phone = clean_text($_POST['phone'] ?? '');
$company = clean_text($_POST['company'] ?? ($_POST['business'] ?? ''));
$service = clean_text($_POST['service'] ?? '');
$budget = clean_text($_POST['budget'] ?? '');
$message = trim($_POST['message'] ?? '');
$appointmentDate = clean_text($_POST['appointment_date'] ?? '');
$appointmentTime = clean_text($_POST['appointment_time'] ?? '');
$appointmentTimezone = clean_text($_POST['appointment_timezone'] ?? '');
$selectedDateLabel = clean_text($_POST['selected_date_label'] ?? '');
$selectedTimeLabel = clean_text($_POST['selected_time_label'] ?? '');
$selectedTimezoneLabel = clean_text($_POST['selected_timezone_label'] ?? '');
$pageUrl = clean_text($_SERVER['HTTP_REFERER'] ?? '');
$submittedAt = date('Y-m-d H:i:s');

if ($name === '' || $email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Please enter a valid name and email address.',
    ]);
    exit;
}

if ($submissionType === 'availability-request' && ($appointmentDate === '' || $appointmentTime === '')) {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Please choose a date and time before sending the availability request.',
    ]);
    exit;
}

$safeName = clean_text($name);
$safeEmail = filter_var($email, FILTER_SANITIZE_EMAIL);

$subjectMap = [
    'homepage-inquiry' => 'New homepage inquiry from ' . $safeName,
    'contact-inquiry' => 'New contact inquiry from ' . $safeName,
    'availability-request' => 'New availability request from ' . $safeName,
];

$labelMap = [
    'homepage-inquiry' => 'Homepage Inquiry',
    'contact-inquiry' => 'Contact Inquiry',
    'availability-request' => 'Availability Request',
];

$subject = $subjectMap[$submissionType] ?? ('New website inquiry from ' . $safeName);
$submissionLabel = $labelMap[$submissionType] ?? 'Website Inquiry';

$summaryRows = [
    build_row('Submission type', $submissionLabel),
    build_row('Submitted at', $submittedAt),
    build_row('Name', $name),
    build_row('Email', $email),
    build_row('Phone', $phone),
    build_row('Company / Business', $company),
    build_row('Primary service', $service),
    build_row('Budget range', $budget),
    build_row('Page URL', $pageUrl),
];

$meetingRows = '';

if ($submissionType === 'availability-request') {
    $meetingRows = ''
        . build_row('Appointment date', $appointmentDate)
        . build_row('Appointment time', $appointmentTime)
        . build_row('Appointment timezone', $appointmentTimezone)
        . build_row('Readable date', $selectedDateLabel)
        . build_row('Readable time', $selectedTimeLabel)
        . build_row('Readable timezone', $selectedTimezoneLabel);
}

$safeMessage = nl2br(htmlspecialchars(field_value($message), ENT_QUOTES, 'UTF-8'));

$htmlBody = '<!DOCTYPE html>'
    . '<html lang="en"><head><meta charset="UTF-8"><title>' . htmlspecialchars($subject, ENT_QUOTES, 'UTF-8') . '</title></head>'
    . '<body style="margin:0;padding:24px;background:#f7f1f5;font-family:Arial,sans-serif;color:#24161e;">'
    . '<div style="max-width:760px;margin:0 auto;background:#ffffff;border:1px solid #ead4df;border-radius:18px;overflow:hidden;">'
    . '<div style="padding:24px 28px;background:linear-gradient(135deg,#a41f52,#ec4f8d);color:#ffffff;">'
    . '<div style="font-size:12px;letter-spacing:0.14em;text-transform:uppercase;opacity:0.82;">Website Lead Notification</div>'
    . '<h1 style="margin:10px 0 0;font-size:28px;line-height:1.1;">' . htmlspecialchars($submissionLabel, ENT_QUOTES, 'UTF-8') . '</h1>'
    . '<p style="margin:12px 0 0;font-size:14px;line-height:1.6;opacity:0.92;">A user submitted details through the Growth Revibe website.</p>'
    . '</div>'
    . '<div style="padding:24px 28px;">'
    . '<h2 style="margin:0 0 14px;font-size:18px;color:#a41f52;">Contact details</h2>'
    . '<table style="width:100%;border-collapse:collapse;margin:0 0 22px;">'
    . implode('', $summaryRows)
    . '</table>';

if ($meetingRows !== '') {
    $htmlBody .= '<h2 style="margin:0 0 14px;font-size:18px;color:#a41f52;">Meeting request</h2>'
        . '<table style="width:100%;border-collapse:collapse;margin:0 0 22px;">'
        . $meetingRows
        . '</table>';
}

$htmlBody .= '<h2 style="margin:0 0 14px;font-size:18px;color:#a41f52;">Project message</h2>'
    . '<div style="padding:16px 18px;border:1px solid #ead4df;border-radius:14px;background:#fff8fb;font-size:14px;line-height:1.7;">'
    . $safeMessage
    . '</div>'
    . '</div>'
    . '</div>'
    . '</body></html>';

$plainLines = [
    'Website: ' . SITE_NAME,
    'Submission type: ' . $submissionLabel,
    'Submitted at: ' . $submittedAt,
    'Name: ' . field_value($name),
    'Email: ' . field_value($email),
    'Phone: ' . field_value($phone),
    'Company / Business: ' . field_value($company),
    'Primary service: ' . field_value($service),
    'Budget range: ' . field_value($budget),
    'Page URL: ' . field_value($pageUrl),
];

if ($submissionType === 'availability-request') {
    $plainLines[] = 'Appointment date: ' . field_value($appointmentDate);
    $plainLines[] = 'Appointment time: ' . field_value($appointmentTime);
    $plainLines[] = 'Appointment timezone: ' . field_value($appointmentTimezone);
    $plainLines[] = 'Readable date: ' . field_value($selectedDateLabel);
    $plainLines[] = 'Readable time: ' . field_value($selectedTimeLabel);
    $plainLines[] = 'Readable timezone: ' . field_value($selectedTimezoneLabel);
}

$plainLines[] = '';
$plainLines[] = 'Project message:';
$plainLines[] = field_value($message);
$plainBody = implode("\n", $plainLines);

$boundary = 'growthrevibe-' . md5((string) microtime(true));
$headers = [
    'MIME-Version: 1.0',
    'From: ' . SITE_NAME . ' <' . SENDER_EMAIL . '>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
];

$mailBody = '--' . $boundary . "\r\n"
    . "Content-Type: text/plain; charset=UTF-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $plainBody . "\r\n\r\n"
    . '--' . $boundary . "\r\n"
    . "Content-Type: text/html; charset=UTF-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $htmlBody . "\r\n\r\n"
    . '--' . $boundary . "--";

$sent = mail(RECIPIENTS, $subject, $mailBody, implode("\r\n", $headers));

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
