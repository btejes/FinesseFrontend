angular.module('starter.services', ['ngResource'])

  .factory('SignupSession', function($resource) {
    return $resource(window.server_url + "/users.json");
  })

  .factory('UserSession', function($resource) {
    return $resource(window.server_url + "/users/sign_in.json");
  });
