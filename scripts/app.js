angular.module('app', ['twitterFeed', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider','$sceDelegateProvider',  function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
        $urlRouterProvider.otherwise('/tweet');
        $stateProvider
            .state('tweet', { url: '/tweet', templateUrl: 'templates/tweet.html', controller: 'twitterController as tweet' })

        $sceDelegateProvider.resourceUrlWhitelist([
       		'self',
       		'*://www.youtube.com/**'
    	]);
    }]);