"use strict"

angular.module('valeriovaudi', ['ngCookies', 'ui.router', "home", 'resume', "music","cs", "aboutMe","contact", "siteDirectiveModules"])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('root',{
                url: '',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'template/header.html'
                    },
                    'menu':{
                        templateUrl: 'template/menu.html'
                    },
                    'footer':{
                        templateUrl: 'template/footer.html'
                    }
                }
            });
    }]).controller("baseCtr",["$scope", function($scope){
        $scope.avatar="asset/images/myPhoto.jpeg";
    }]);