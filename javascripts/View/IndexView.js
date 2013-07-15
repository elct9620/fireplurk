(function() {

  define(['jquery', 'backbone', 'mustache', 'text!javascripts/template/index.js.html', 'underscore'], function($, Backbone, Mustache, indexTemplate, _) {
    return Backbone.View.extend({
      initialize: function() {
        this.template = indexTemplate;
        return this.listenTo(this.collection, 'sync', this.render);
      },
      render: function() {
        var rendered;
        rendered = Mustache.to_html(this.template, {
          messages: this.collection.models
        });
        $(this.el).html(rendered);
        return this;
      }
    });
  });

}).call(this);
