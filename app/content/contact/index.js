angular.module('contact', ["commonService"])
    .value("mailServiceUrl", "https://valeriovaudiio-backend.cfapps.io/mail")
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                views: {
                    'container@': {
                        templateUrl: 'dist/content/contact/template/content.html',
                        controller: "contactController"
                    }
                }
            });
    }])
    .controller("contactController", ["$scope", "$http", "mailServiceUrl", "i18nPageContentResolver",
        function ($scope, $http, mailServiceUrl, i18nPageContentResolver) {

            $scope.sendMail = function () {
                $http.post(mailServiceUrl, $scope.mailMessage)
                    .then(function () {
                        showOutcomeMailSendingModal(true);
                        $scope.mailMessage = {};
                    }, function () {
                        showOutcomeMailSendingModal(false);
                    })
            };

            function showOutcomeMailSendingModal(outcome) {
                $scope.mailSendIsSuccess = outcome;
                var outcomeMailSendingModal = document.getElementById("outcomeMailSendingModal");
                angular.element(outcomeMailSendingModal).modal("show");
                console.log("fine showOutcomeMailSendingModal");
            }

            $scope.init = function () {
                i18nPageContentResolver.jsonMessagesResolver("dist/content/contact/data/messages").then(function (response) {
                    $scope.messages = response.data.data
                });
            };
        }]);