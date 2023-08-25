const template = ({ name, size, link, expiry, url }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Simple Transactional Email</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
            }
    
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f0f0f0;
            }
    
            .header {
                background-color: #3498db;
                color: #fff;
                padding: 10px;
                text-align: center;
                  border-radius: 10px;
            }
    
            .content {
                padding: 20px;
                background-color: #ffffff;
                border-radius: 5px;
                margin-top: 20px;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            }
    
            .footer {
                text-align: center;
                margin-top: 20px;
            }
    
            .footer a {
                color: #3498db;
                text-decoration: none;
            }
    
            .button {
                display: inline-block;
                padding: 10px 20px;
                background-color: #3498db;
                color: #fff;
                border-radius: 5px;
                text-decoration: none;
            }
    
            .info-box {
                border: 1px solid #3498db;
                padding: 10px 20px;
                border-radius: 5px;
                margin-top: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>File Express</h1>
            </div>
            <div class="content">
                <p>Hello <strong>Sir/Madam</strong>,</p>
                <p>You've received a file from <strong>${name}</strong> via File Express. Here are the details:</p>
                <p><a class="button" href="${link}">Download File</a></p>
                <div class="info-box">
                    <p><strong>File Size:</strong> ${size}</p>
                    <p><strong>Expiry Time:</strong>${expiry}</p>
                </div>
                <p>Please make sure to download the file before the expiration time.</p>
            </div>
            <div class="footer">
                <p>For more information about File Express, visit our <a href="${url}">website</a>.</p>
            </div>
          <p style="color: #666666;">Best regards,<br>Priyanshu<br>File Express - Send file before your text</p>
        </div>
    </body>
    </html>   
    `;
};
export default template;
