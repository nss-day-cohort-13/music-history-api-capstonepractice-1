'use strict'

angular.module('music-history')
  .config($routeProvider => {
    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        templateUrl: '/home/home.html'
      })
  })
