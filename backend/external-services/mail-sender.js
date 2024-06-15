const path = require('node:path')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')

dotenv.config({ path: path.resolve(__dirname, '../../.env') })
const { MAILSENDER_USERID, MAILSENDER_PASSWORD } = process.env
const MAIL_FROM_ADDRESS = `${MAILSENDER_USERID}@naver.com`

const transporter = nodemailer.createTransport({
  service: 'naver',
  host: 'smtp.naver.com',
  port: 465,
  secure: false,
  requireTLS: true,
  auth: {
    user: MAILSENDER_USERID,  // 네이버 아이디
    pass: MAILSENDER_PASSWORD  // 발급하여 저장한 비밀 번호
  }
})

function sendMail ({
  to, // string | string[]
  title,
  content,
  isHTML = false
}) {
  const messageOpts = {
    from: `Sebin Song <pir248@naver.com>`,
    to: Array.isArray(to) ? to : [to],
    subject: title
  }
  messageOpts[isHTML ? 'html' : 'text'] = content

  return new Promise((resolve, reject) => {
    transporter.sendMail(messageOpts, (err) => {
      if (err) { reject (err) }
      else { resolve(true) }
    })
  })
}

function confirmInquiryReceipt ({
  name, to
}) {
  name = (name || '').trim()

  const params = {
    title: `[Sebin Song]: Message received`, // TODO: replace 'Sebin Song' here with the website URL.
    to,
    content: `
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            background-color: #F2F2F2;
          }
          :root {
            --text-0: #0D0D0D;
            --text-1: #8C8C8C;

          }
        </style>
      </head>
      <body>
        <h3 style='font-size: 18px;'>Thanks ${name}, for contacting me!</h3>
        <br><br>
        <p style='color: var(--text-1); font-size: 14px;'>
          I appreciate your time and interest and will respond to your inquiry soon.<br/><br/>
          Regards,<br/>
          Sebin
        </p>
      </body>
    </html>
    `,
    isHTML: true
  }

  return sendMail(params)
}

module.exports = {
  sendMail,
  confirmInquiryReceipt
}