angular.module('starter.services', ['ngResource'])

  //.factory('SignupSession', function($resource) {
  //return $resource('window.server_url + "/users.json"',{},{ headers:{'Content-Type':'application/vnd.api+json'} } ) //application/vnd.api+json
  // })

  .factory('SignupSession', function($resource) {
   return $resource(window.server_url + "/users.json") //application/vnd.api+json
  })

  .factory('UserSession', function($resource) {
    return $resource(window.server_url + "/users/sign_in.json");
  });
