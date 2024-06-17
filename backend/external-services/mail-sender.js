const path = require('node:path')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')

dotenv.config({ path: path.resolve(__dirname, '../../.env') })
const {
  MAILSENDER_USERID,
  MAILSENDER_PASSWORD,
  WEBSITE_NAME,
  NOTIFICATION_EMAIL_TO
} = process.env
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

// helpers
function CreateHTMLBody (bodyContent) {
  return `
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
          
          .list-item {
            display: flex;
            width: 100%;
            align-items: flex-start;
            column-gap: 6px;
            margin: 0 0 4px 0;
            font-size: 14px;
            text-align: left;
          }

          .list-item label {
            display: inline-block;
            font-weight: bold;
            flex-shrink: 0;
          }

          .list-item .value {
            display: block;
            flex-grow: 1;
          }
        </style>
      </head>
      <body>
        ${bodyContent}
      </body>
    </html>
  `
}

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

function sendInquiryNotification (message) {
  const { title, name, email, content } = message

  const params = {
    title: `[${WEBSITE_NAME}]: Inquiry sent`,
    to: NOTIFICATION_EMAIL_TO,
    isHTML: true,
    content: CreateHTMLBody(
      `
      <h3 style='font-size: 16px;'>웹사이트 문의 접수</h3>
      <br><br>
      <p class='list-item'>
        <label>제목:</label>
        <span class='value'>${title}</span>
      </p>
      <p class='list-item'>
        <label>이름:</label>
        <span class='value'>${name}</span>
      </p>
      <p class='list-item'>
        <label>메일주소:</label>
        <span class='value'>${email}</span>
      </p>
      <p class='list-item'>
        <label>내용:</label>
        <span class='value'>${content}</span>
      </p>
      `
    )
  }

  return sendMail(params)
}

function confirmInquiryReceipt ({
  name, to
}) {
  name = (name || '').trim()

  const params = {
    title: `[${WEBSITE_NAME}]: Message received`,
    to,
    isHTML: true,
    content: CreateHTMLBody(
      `
      <h3 style='font-size: 18px;'>Thanks ${name}, for contacting me!</h3>
      <br><br>
      <p style='color: var(--text-1); font-size: 14px;'>
        I appreciate your time and interest and will respond to your inquiry soon.<br/><br/>
        Regards,<br/>
        Sebin
      </p>
      `
    )
  }

  return sendMail(params)
}

module.exports = {
  sendMail,
  confirmInquiryReceipt,
  sendInquiryNotification
}