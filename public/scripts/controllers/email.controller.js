myApp.controller('EmailController', ['$location', '$http', function($location, $http) {

  console.log('EmailController running');

  var self = this;
  //must have variable for notyf
  var notyf = new Notyf();

// redirect to contact view
  function contactView() {
    $location.path('/contact');
  }


// user sends email
  self.sendEmail = function(email) {
    console.log("Submitted Email: ", email);
    $http({
      method: 'POST',
      url: '/sendEmail',
      data: email
    }).then(function(response){
      console.log("email sent");
      notyf.confirm('Email has been sent to Chris stanton. Thank You!!')
      self.email = {};
    }).catch(function(error) {
      // swal("Sorry, we couldn't process your requests", "Try Again!", "error");
      console.log('error authenticating', error);
    });
  // contactView();
}//end of sendEmail()


}]);//end of myApp.controller
