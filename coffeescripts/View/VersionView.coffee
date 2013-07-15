define [
  'jquery', 'backbone', 'mustache', 'text!javascripts/template/version.js.html',
  'underscore'
], ($, Backbone, Mustache, versionTemplate, _) ->

  Backbone.View.extend {
    initialize: (options)->
      options = options || {}

      @.template = versionTemplate
      @.appVersion = options.appVersion || "0.0.0"
    render: ->
      rendered = Mustache.to_html(
        @.template,
        {
          versions: [
            { package: "FirePlurk", version: @.appVersion }
            { package: "jQuery", version: $().jquery }
            { package: "Underscore", version: _.VERSION }
            { package: "Backbone", version: Backbone.VERSION }
            { package: "Mustache", version: Mustache.version }
          ]
        }
      )

      $(@.el).html(rendered)

      return @
  }
