<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = "ben_j_stephens@hotmail.com";

    $email_subject = "New Form Submission";

    $email_body = "UserName: $name. \n";
        "UserEmail: $visitor_email. \n";
        "User Message: $message. \n";

    $to = "ben_j_stephens@hotmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n"

    mail($to,$email_subject, $email_body, $headers);

    header("Location: contact.html")
?>