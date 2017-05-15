
DotEnv = require('dotenv-node');
new DotEnv();
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

// app.use('/inboundURLbase',router)

//Serve back static files
app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Handle index file separately
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '.public/index.html'));
})

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
      user: process.env.ACCOUNT_NAME,
      pass: process.env.ACCOUNT_PASSWORD
  }
});

app.post('/sendEmail', function(req,res){
  var email = req.body;
  console.log("Email ", email);

  var mailOptions = {
      from: 'development.testing84@yahoo.com',
      to: 'cstanton0760@yahoo.com',
      subject: email.subject,
      text: email.message,
      html: '<b>' + email.message + '</b>'
  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
          return console.log(error);
      }
      console.log('Message %s sent: %s', info.messageId, info.response);
  });//end of transporter
  res.send(200);
});//end of router.post

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});
