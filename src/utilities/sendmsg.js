import nodemailer from 'nodemailer'

export default function (config) {
  let text =
            `
            <b>Поступила заявка с сайта mobilizetoday.com</b><br/>
            <b>Страница формы:</b> ${config.pathname}</br></br>
            `
  for (let key in config) {
    redactor(key, config[key])
  }
  function redactor (key, value) {
    let arr = key.split('value')
    if (arr[1]) {
      text += `<b>${arr[1]}:</b> ${value}<br/>`
    }
  }
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  return nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      // host: 'smtp.gmail.com',
      // port: 587,
      // secure: false, // true for 465, false for other ports
      service: 'gmail',
      auth: {
        user: 'job88kh@gmail.com', // generated ethereal user
        pass: '110717google' // generated ethereal password
      }

    })

    // setup email data with unicode symbols
    let mailOptions = {
      from: '"Admin 👻" <job88kh@gmail.com>', // sender address
      to: `
       artem.vanakov@i3design.com,
       emperor343@gmail.com
       `, // list of receivers andrey.kolodochka@mobilizetoday.ru  alexey.zolotarev@mobilizetoday.ru
      subject: 'Test ✔', // Subject line
      text: 'Hello admin', // plain text body
      html: text// html body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Message sent: %s', info.messageId)
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    })
  })
}
