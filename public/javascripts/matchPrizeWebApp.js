/**
 * Created by Ozav_Tom on 15/07/2015.
 */

/** Controllers Module */
 angular.module('matchPrize.controllers', [])
    .controller('MainCtrl', ['$scope',
        function($scope){
            $scope.homepage = "MatchPrize HomePage"
    }])
     .controller('FixturesCtrl', ['$scope','fixtures',
         function($scope, fixtures){
             $scope.fixtures = fixtures.fixtures;
    }]);

/** Factories Module */
 angular.module('matchPrize.factories', [])
    .factory('fixtures', ['$http', function($http){
        var o = {
            fixtures: []
        };

        o.getAll = function() {
            return $http.get('/fixtures').success(function(data){
                angular.copy(data, o.fixtures);
            });
        };

        o.get = function(id) {
            return $http.get('/fixtures/' + id).then(function(res){
                return res.data;
            });
        };

        return o;
    }]
 );

 /** Filters Module */
 angular.module('matchPrize.filters', [])
     .filter('startFrom', function() {
         return function(input, start) {
             return input.slice(start);
         };
     }
 );


var matchPrizeApp = angular.module('matchPrize', ['ui.router','matchPrize.controllers','matchPrize.factories','matchPrize.filters'])
    .config(['$stateProvider','$urlRouterProvider','$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: '/home.html',
                    controller: 'MainCtrl'
                })
                .state('fixtures', {
                    url: '/fixtures',
                    templateUrl: '/fixtures.html',
                    controller: 'FixturesCtrl',
                    resolve: {
                        postPromise: ['fixtures', function(fixtures){
                            return fixtures.getAll();
                        }]
                    }
                })
            ;

            $urlRouterProvider.otherwise('home');

            // use the HTML5 History API
            $locationProvider.html5Mode(true);
    }]);


