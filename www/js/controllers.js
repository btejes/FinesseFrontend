angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {

})


.controller('SignupCtrl', function($scope,SignupSession,$ionicPopup) {


  $scope.signup = function(email, password, repeat_password) {
    var user_session = new SignupSession({ user: { email: email, password: password }});
    user_session.$save(
      function(data){
        //window.localStorage['email'] = email;
        //window.localStorage['password'] = password;
        $location.path('/app/playlists');
      },
      function(err){
        $ionicPopup.alert({
          title: 'An error occured',
          template: err["data"]["error"]
        });
      }
    );
  }
})

.controller('LoginCtrl', function($scope, $location,UserSession,$ionicPopup,$state) {
  $scope.loadingMessage = null;

  $scope.login = function(email, password) {
    $scope.loadingMessage = "Logging in";
    var user_session = new UserSession({ user: { email: email, password: password, token: window.localStorage['token'] || "" }});
    user_session.$save(
      function(data){
        $scope.loadingMessage = null;
        //window.localStorage['email'] = email;
        //window.localStorage['password'] = password;
        $state.go('dashboard');
      },
      function(err){
        $scope.loadingMessage = null;
        $ionicPopup.alert({
          title: 'An error occured',
          template: err["data"]["error"]
        });
      }
    );
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
