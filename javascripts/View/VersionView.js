(function() {

  define(['jquery', 'backbone', 'mustache', 'text!javascripts/template/version.js.html', 'underscore'], function($, Backbone, Mustache, versionTemplate, _) {
    return Backbone.View.extend({
      initialize: function(options) {
        options = options || {};
        this.template = versionTemplate;
        return this.appVersion = options.appVersion || "0.0.0";
      },
      render: function() {
        var rendered;
        rendered = Mustache.to_html(this.template, {
          versions: [
            {
              "package": "FirePlurk",
              version: this.appVersion
            }, {
              "package": "jQuery",
              version: $().jquery
            }, {
              "package": "Underscore",
              version: _.VERSION
            }, {
              "package": "Backbone",
              version: Backbone.VERSION
            }, {
              "package": "Mustache",
              version: Mustache.version
            }
          ]
        });
        $(this.el).html(rendered);
        return this;
      }
    });
  });

}).call(this);
