var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vmurali100@gmail.com',
    pass: 'Testing!23'
  }
});

var mailOptions = {
  from: 'vmurali100@gmail.com',
  to: 'murali.veesambattu@gmail.com',
  subject: 'Sending Email using Node.js',
  // text: `Hi Smartherd, thank you for your nice Node.js tutorials.
  //         I will donate 50$ for this course. Please send me payment options.`
  html: '<h1 style="color:"red"">Hi Welcome to NodeJS Mailer</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});