const generateSixDigitCode = () => {
  return Math.floor(100000 + Math.random() * 900000);
}
const generateCodeVerificationHTML = (code, recieverFirstName, recieverLastName) => {
  const primaryColor = "#437FC7";
  const year = new Date().getFullYear();
  const fullName = `${recieverFirstName} ${recieverLastName}`;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your GTask Account</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f7fa; color: #334155;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; background-color: #f4f7fa;">
        <tr>
          <td align="center" style="padding: 40px 10px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
              
              <tr>
                <td align="center" style="padding: 40px 40px 20px 40px;">
                  <div style="background-color: ${primaryColor}; width: 60px; height: 60px; border-radius: 14px; display: inline-block; line-height: 60px; text-align: center;">
                    <span style="color: #ffffff; font-size: 32px; font-weight: bold; font-family: sans-serif;">G</span>
                  </div>
                  <h1 style="margin: 16px 0 0 0; color: #1e293b; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">GTask Verification</h1>
                </td>
              </tr>

              <tr>
                <td style="padding: 0 40px 30px 40px; text-align: center;">
                  <p style="font-size: 18px; font-weight: 600; color: #1e293b; margin-bottom: 8px;">
                    Hi, ${fullName}!
                  </p>
                  <p style="margin: 0; font-size: 15px; line-height: 24px; color: #64748b;">
                    Thanks for joining GTask. To finish setting up your account and start organizing your team, please enter the code below in the app.
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding: 0 40px 30px 40px;">
                  <div style="background-color: #f8fafc; border: 2px solid #e2e8f0; border-radius: 12px; padding: 20px;">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 38px; font-weight: 800; letter-spacing: 10px; color: ${primaryColor};">
                      ${code}
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding: 0 40px 40px 40px; text-align: center;">
                  <p style="margin: 0; font-size: 13px; line-height: 20px; color: #94a3b8;">
                    This code is valid for <span style="font-weight: 600;">10 minutes</span>. <br/>
                    If you didn't create an account with GTask, you can safely ignore this email.
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding: 30px 40px; background-color: #fcfcfd; border-top: 1px solid #f1f5f9; border-radius: 0 0 20px 20px; text-align: center;">
                  <p style="margin: 0; font-size: 12px; font-weight: 600; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">
                    AkiraCode
                  </p>
                  <p style="margin: 4px 0 0 0; font-size: 11px; color: #94a3b8;">
                    &copy; ${year} GTask • Built for productivity.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

const generateResendCodeHTML = (code) => {
  const primaryColor = "#437FC7";
  const year = new Date().getFullYear();

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your New GTask Code</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; color: #334155;">
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f8fafc;">
        <tr>
          <td align="center" style="padding: 40px 10px;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px; background-color: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              
              <tr>
                <td style="padding: 32px 40px 20px 40px; text-align: left;">
                  <div style="font-size: 22px; font-weight: 800; color: ${primaryColor}; letter-spacing: -0.5px;">GTask</div>
                </td>
              </tr>

              <tr>
                <td style="padding: 0 40px 20px 40px;">
                  <h2 style="margin: 0 0 16px 0; color: #1e293b; font-size: 20px; font-weight: 700;">New Verification Code</h2>
                  <p style="margin: 0; font-size: 15px; line-height: 24px; color: #64748b;">
                    Hello, we received a request for a new verification code for your account. Please use the code below to continue.
                  </p>
                </td>
              </tr>

              <tr>
                <td align="center" style="padding: 10px 40px 30px 40px;">
                  <div style="background-color: #f1f5f9; border-radius: 8px; padding: 24px; border: 1px solid #cbd5e1;">
                    <span style="font-family: 'Courier New', Courier, monospace; font-size: 42px; font-weight: 800; letter-spacing: 6px; color: #0f172a;">
                      ${code}
                    </span>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding: 0 40px 40px 40px;">
                   <div style="background-color: #fffbeb; border-left: 4px solid #f59e0b; padding: 12px 16px;">
                    <p style="margin: 0; font-size: 13px; color: #92400e; line-height: 1.5;">
                      <strong>Didn't work?</strong> Make sure you are using the most recent code sent to you. Old codes are automatically invalidated when a new one is requested.
                    </p>
                  </div>
                </td>
              </tr>

              <tr>
                <td style="padding: 24px 40px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; border-radius: 0 0 12px 12px; text-align: center;">
                  <p style="margin: 0; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">
                    Powered by AkiraCode
                  </p>
                  <p style="margin: 4px 0 0 0; font-size: 11px; color: #cbd5e1;">
                    &copy; ${year} GTask Project
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

module.exports = { generateSixDigitCode, generateCodeVerificationHTML, generateResendCodeHTML }