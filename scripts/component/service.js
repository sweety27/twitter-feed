angular.module('twitterFeed')
    .factory('twitterFactory', twitterFactory);

function twitterFactory($http) {
    var that = this;
     return {
        async: function() {
          return $http.get('scripts/component/twitter-feed.json');
        }
    };
}