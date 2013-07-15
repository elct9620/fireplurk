(function() {

  require.config({
    paths: {
      jquery: 'vendor/jquery',
      backbone: 'vendor/backbone-min',
      underscore: 'vendor/underscore-min',
      text: 'vendor/requirejs-text',
      mustache: 'vendor/mustache',
      jsPlurk: 'JSPlurk'
    },
    shim: {
      jquery: {
        exports: '$'
      },
      backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      underscore: {
        deps: ['jquery'],
        exports: '_'
      },
      jsPlurk: {
        deps: ['jsOAuth']
      },
      'foundation/foundation': {
        deps: ['jquery']
      },
      'foundation/foundation.topbar': {
        deps: ['jquery', 'foundation/foundation']
      }
    }
  });

  require(['jquery', 'backbone', 'app', 'foundation/foundation', 'foundation/foundation.topbar'], function($, Backbone, App) {
    var app;
    app = new App();
    Backbone.history.start();
    return $(document).foundation();
  });

}).call(this);
