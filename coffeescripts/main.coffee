require.config {
  paths: {
    jquery: 'vendor/jquery'
    backbone: 'vendor/backbone-min'
    underscore: 'vendor/underscore-min'
    text: 'vendor/requirejs-text'
    mustache: 'vendor/mustache'
    jsPlurk: 'JSPlurk'
  }
  shim: {
    jquery: {
      exports: '$'
    }
    backbone: {
      deps: ['jquery', 'underscore']
      exports: 'Backbone'
    }
    underscore: {
      deps: ['jquery'],
      exports: '_'
    }
    jsPlurk: {
      deps: ['jsOAuth']
    }
    # Foundation
    'foundation/foundation': { deps: ['jquery'] }
    'foundation/foundation.topbar': { deps: ['jquery', 'foundation/foundation'] }
  }
}

require [
  'jquery', 'backbone', 'app'
  # Foundation
  'foundation/foundation', 'foundation/foundation.topbar'
], ($, Backbone, App) ->
    app = new App()
    Backbone.history.start()

    $(document).foundation()
