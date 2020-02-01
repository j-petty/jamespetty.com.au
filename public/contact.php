<?php
    // headers to allow request from LocalHost
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    if ($_SERVER['REQUEST_METHOD'] == "OPTIONS") {
        header("HTTP/1.1 200 OK");
        die();
    }

    $rest_json = file_get_contents("php://input");
    $post_data = json_decode($rest_json, true);

    // validate input fields
    if (empty($post_data['name']) || empty($post_data['email']) || empty($post_data['message'])) 
    {
        http_response_code(401);
        echo json_encode([
            "success" => false,
            "statusCode" => 401,
            "message" => "Missing required fields"
        ]);
        die();
    }

    if ($post_data)
	{
        // return a success status code
        http_response_code(200);

        // decode url encoding
        $name = urldecode($post_data['name']);
        $email = urldecode($post_data['email']);
        $message = urldecode($post_data['message']);

        // replace line breaks
        $message = nl2br($message);

        // configure data for email
        $subject = "Portfolio Correspondence | " . $name;
        $to = "james303petty@hotmail.com";
        $from = "contact@jamespetty.com.au";
        $reply_to = $email;

        $headers = "MIME-Version: 1.0\r\n";
        $headers.= "Content-type: text/html; charset=UTF-8\r\n";
        $headers.= "From: <" . $from . ">\r\n";
        $headers.= "Reply-To: " . $name . " <" . $reply_to . ">\r\n";

        // format email body
        $email_body = '
        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>James Petty | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </head>
        <body style="margin: 0; padding: 0;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                <tr>
                    <td style="padding: 15px 0 30px 0;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                            <tr>
                                <td bgcolor="#141414" style="padding: 30px 30px 30px 30px;color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
                                    <a href="https://www.jamespetty.com.au/" style="color: #ffffff;">www.jamespetty.com.au</a>
                                </td>
                            </tr>
                            <tr>
                                <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                        <tr>
                                            <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                                <b>' . $name . ' has submitted a message.</b>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 30px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">
                                                ' . $message . '
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
        </html>
        ';

        // send mail to configured address
        mail($to, $subject, $email_body, $headers);

        // return success message
        echo json_encode([
            "success" => true,
            "statusCode" => 200,
            "message" => "Message sent"
        ]);
	}
    else
	{
        // return error message if something didn't work
        echo json_encode([
            "success" => false,
            "statusCode" => 500,
            "message" => "Something went wrong"
        ]);
	}
?>