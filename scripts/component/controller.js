angular.module("twitterFeed")
    .controller('twitterController', ['twitterFactory', '$state', '$stateParams', function(twitterFactory, $state, $stateParams) {

        var tweet = this;
        var init = function(){
          twitterFactory.async().then(function(res){
              tweet.response = res.data;
              angular.forEach(tweet.response, function(obj, index){
                tweet.createdDate = obj.created_date;
                tweet.difference = moment(tweet.createdDate).fromNow();
                obj["time"] = tweet.difference;
              })
          });
        }
        init();
        
    }])