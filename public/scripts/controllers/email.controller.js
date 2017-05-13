myApp.controller('EmailController', [function() {

  console.log('EmailController running');

  var self = this;

  self.sendEmail = function(email) {
    console.log(email);

// empties inputs after submit
    self.email = "";
  }


}]);//end of myApp.controller
