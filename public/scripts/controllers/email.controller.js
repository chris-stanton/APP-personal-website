myApp.controller('EmailController', ['$location', '$http', function($location, $http) {

  console.log('EmailController running');

  var self = this;
  //notyf variable
  var notyf = new Notyf({
    delay:2000,
    alertIcon: 'fa fa-exclamation-circle',
    confirmIcon: 'fa fa-check-circle'
  });

  function homeRedirect() {
    $location.path('/home');
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
      notyf.confirm('Your email has been sent to Chris Stanton')
      self.email = {};
      homeRedirect();
    }).catch(function(error) {
      // swal("Sorry, we couldn't process your requests", "Try Again!", "error");
      console.log('error authenticating', error);
    });
}//end of sendEmail()


}]);//end of myApp.controller
