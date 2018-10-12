const nodemailer = require('nodemailer')
const smtpTransporter = require('nodemailer-smtp-transport')
const mailerConfig = require('../config/mailer')

let transporter = nodemailer.createTransport(smtpTransporter(mailerConfig), {
  from: mailerConfig.auth.user,
})

/**
 * 发邮件
 * @param to 收件人
 * @param subject 发送内容
 * @param html
 */
const sendMail = async function (to, subject, html) {
  const mailOptions = {
    from: mailerConfig.auth.user,
    to,
    subject,
    html
  }
  const info = transporter.sendMail(mailOptions)
  return info
}

exports.sendMail = sendMail
