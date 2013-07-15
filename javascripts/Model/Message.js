(function() {

  define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
      parse: function(res, options) {
        return this.content = res.content.replace(res.author, '');
      }
    });
  });

}).call(this);
