'use strict';
/* global app:true */
/* exported app */
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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      }),
  });
