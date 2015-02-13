'use strict';
/* global app:true */
/* exported app */
/* global firebase:true */
/* exported firebase */
/**
 * @ngdoc overview
 * @name redditApp
 * @description
 * # redditApp
 *
 * Main module of the application.
 */
var app = angular
  .module('redditApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
  ])
 
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  app.constant( 'FIREBASE_URL', 'https://boiling-fire-8005.firebaseio.com');