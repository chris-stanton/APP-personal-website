myApp.controller('EmailController', ['$location', function($location) {

  console.log('EmailController running');

  var self = this;

// redirect to contact view
  function contactView() {
    $location.path('/contact');
  }


// user sends email
  self.sendEmail = function(email) {
    console.log("Submitted Email: ", email);

  contactView();
}//end of sendEmail()


}]);//end of myApp.controller
