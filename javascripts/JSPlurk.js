(function() {

  define(['jsOAuth'], function(OAuth) {
    var JSPlurk;
    return JSPlurk = (function() {

      function JSPlurk(options) {
        options = options || {};
        if (options.key === void 0 || options.secret === void 0) {
          throw Error("Consumer Key or Consumer Secret didn't set correctly");
        }
        if (options.requestTokenURL === void 0 || options.authorizationURL === void 0 || options.accessTokenURL === void 0) {
          throw Error("Request Token URL or Authorization URL or Access Token URL didn't set correctly");
        }
        this.oauth = new OAuth({
          consumerKey: options.key,
          consumerSecret: options.secret,
          requestTokenUrl: options.requestTokenURL,
          authorizationUrl: options.authorizationURL,
          accessTokenURL: options.accessTokenURL
        });
      }

      JSPlurk.prototype.getRequestToken = function() {
        return this.oauth.fetchRequestToken(this.openAuthorizationWindow, this.handleAuthorizationFaile);
      };

      JSPlurk.prototype.openAuthorizationWindow = function(url) {
        var win;
        return win = window.open(url, 'authorise');
      };

      JSPlurk.prototype.handleAuthorizationFaile = function() {};

      JSPlurk.prototype.getTimeline = function() {};

      return JSPlurk;

    })();
  });

}).call(this);
