<?php
    // Set the recipient email address.
    $recipient = "snitkdan@uw.edu";

    // Set the email subject.
    $subject = "Andy - Dishes Token";

    $message = 'Andy has used a Dish Token';

    // Build the email content.
    $email_content = "$message";

    mail($recipient, $subject, $email_content)
?>
