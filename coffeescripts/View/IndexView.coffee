define [
  'jquery', 'backbone', 'mustache', 'text!javascripts/template/index.js.html',
  'underscore'
], ($, Backbone, Mustache, indexTemplate, _) ->

  Backbone.View.extend {
    initialize: ()->
      @.template = indexTemplate
      @.listenTo @.collection, 'sync', @.render
    render: ->
      rendered = Mustache.to_html(
        @.template,
        {
          messages: @.collection.models
        }
      )

      $(@.el).html(rendered)

      return @
  }
