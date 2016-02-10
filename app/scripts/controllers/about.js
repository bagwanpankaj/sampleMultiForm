'use strict';

/**
 * @ngdoc function
 * @name testMultiStepApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testMultiStepApp
 */
angular.module('testMultiStepApp')
  .controller('AboutCtrl', function ( $scope ) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.steps = [
        {
            templateUrl: 'views/templates/step_1.html'
        },
        {
            templateUrl: 'views/templates/step_2.html'
        },
        {
            templateUrl: 'views/templates/step_3.html'
        }
    ];

    $scope.getForm = function( nextStepFunc ){
      if(typeof(form1) !== "undefined"){
        console.log(form1)
        alert("Form1 valid: " + form1.$valid)
      };
      if(typeof(form2) !== "undefined"){
        console.log(form2)
        alert("Form2 valid: " + form2.$valid)
      };
      nextStepFunc();
    };
  });
