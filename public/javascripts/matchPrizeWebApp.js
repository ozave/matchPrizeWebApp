/**
 * Created by Ozav_Tom on 15/07/2015.
 */

/** GameHome Module */
angular.module('matchPrize.gameHome', [])
    .controller('MainCtrl', ['$scope',
        function($scope){
            $scope.homepage = "MatchPrize HomePage"
    }]);


var matchPrizeApp = angular.module('matchPrize', ['ui.router','matchPrize.gameHome'])
    .config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                });

            $urlRouterProvider.otherwise('home');

            // use the HTML5 History API
            $locationProvider.html5Mode(true);
    }]);

