const path = require('node:path')
const dotenv = require('dotenv')
const nodemailer = require('nodemailer')
const pug = require('pug')
const templateStyles = require('./style-objects')
const getTemplatePath = filename => path.resolve(__dirname, `mail-templates/${filename}.pug`)

// mail-html-renderers
const renderInquiryNotification = pug.compileFile(getTemplatePath('inquiry-notification'))
const renderInquiryConfirmation = pug.compileFile(getTemplatePath('inquiry-confirmation'))
const renderFeedbackNotification = pug.compileFile(getTemplatePath('feedback-notification'))

dotenv.config({ path: path.resolve(__dirname, '../../.env') })
const {
  MAILSENDER_USERID,
  MAILSENDER_PASSWORD,
  APP_HTTPS_HOSTNAME,
  NOTIFICATION_EMAIL_TO
} = process.env
const MAIL_FROM_ADDRESS = `${MAILSENDER_USERID}@naver.com`
const WEBSITE_NAME = APP_HTTPS_HOSTNAME.split('https://')[1]

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

function sendInquiryNotification (message) {
  const { title, name, email, content } = message
  const params = {
    title: `[${WEBSITE_NAME}] Inquiry sent`,
    to: NOTIFICATION_EMAIL_TO,
    isHTML: true,
    content: renderInquiryNotification({
      data: {
        name, email, content,
        title: title || 'no-title'
      },
      styles: templateStyles
    })
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
    content: renderInquiryConfirmation({
      data: { name },
      styles: templateStyles
    })
  }

  return sendMail(params)
}

function sendFeedbackNotification (newFeedback) {
  const { name, content, _id } = newFeedback
  const params = {
    title: `[${WEBSITE_NAME}] Feedback created`,
    to: NOTIFICATION_EMAIL_TO,
    isHTML: true,
    content: renderFeedbackNotification({
      data: { name, content, id: _id },
      styles: templateStyles
    })
  }

  return sendMail(params)
}

module.exports = {
  sendMail,
  confirmInquiryReceipt,
  sendInquiryNotification,
  sendFeedbackNotification
}
