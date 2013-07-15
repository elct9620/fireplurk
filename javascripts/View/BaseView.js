(function() {

  define(['jquery', 'backbone', 'mustache', 'text!javascripts/template/base.js.html'], function($, Backbone, Mustache, baseTemplate) {
    return Backbone.View.extend({
      initialize: function(options) {
        options = options || {};
        this.template = baseTemplate;
        return this.app = options.app || {};
      },
      render: function() {
        var rendered;
        rendered = Mustache.to_html(this.template, {});
        $(this.el).html(rendered);
        return this;
      },
      events: {
        "click a": "handleClick"
      },
      handleClick: function(e) {
        var $target, type;
        $target = $(e.target);
        type = $target.data('type');
        if (type === "app-page") {
          this.app.navigate($target.attr('href'), {
            trigger: true
          });
          return e.preventDefault();
        }
      }
    });
  });

}).call(this);
