<?php
    // Set the recipient email address.
    $recipient = "snitkdan@uw.edu";

    // Set the email subject.
    $subject = "Andy - Meal Token";

    $message = 'Andy has used a Meal Token';

    // Build the email content.
    $email_content .= "$message";

    mail($recipient, $subject, $email_content)
?>
