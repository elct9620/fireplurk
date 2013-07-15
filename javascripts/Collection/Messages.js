(function() {

  define(['backbone', 'Model/Message'], function(Backbone, MessageModel) {
    return Backbone.Collection.extend({
      initialize: function(options) {
        options = options || {};
        this.plurkID = options.username;
        return this.perPage = options.perPage || 10;
      },
      url: function() {
        if (this.plurkID !== void 0) {
          return "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.plurk.com/" + this.plurkID + ".xml&num=" + this.perPage;
        }
      },
      model: MessageModel,
      sync: function(method, collection, options) {
        if (method === 'read') {
          options.dataType = 'jsonp';
          return Backbone.sync(method, collection, options);
        }
      },
      parse: function(res) {
        return res.responseData.feed.entries;
      }
    });
  });

}).call(this);
