/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

//
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transporter = nodemailer.createTransport(smtpTransport({
  host: "smtp.postmarkapp.com",
  port: 25,
  auth: {
    user: "d373205c-1420-48b5-8e20-380a79ea8f65",
    pass: "d373205c-1420-48b5-8e20-380a79ea8f65"
  }
}));

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  app.route('/postEmail')
    .post(function(req, res) {
      var data = req.body;
      transporter.sendMail(
        {
           from: 'admin@flynalda.com',
           to: 'contact@flynalda.com',
           subject: 'Ask NALDA from ' + data.name + ' <' + data.email + '>',
           text: data.content
        }, 
        function(error, response) {
           if(error){
               console.log(error);
               res.status(404).end();
           }else{
               // console.log("Message sent: " + response.message);
               res.end();
           }
        }
      );
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
