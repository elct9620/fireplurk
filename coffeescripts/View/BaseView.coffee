define [
  'jquery', 'backbone', 'mustache', 'text!javascripts/template/base.js.html'
], ($, Backbone, Mustache, baseTemplate) ->

  Backbone.View.extend {
    initialize: (options)->
      options = options || {}

      @.template = baseTemplate
      @.app = options.app || {}

    render: ->
      rendered = Mustache.to_html(
        @.template,
        {}
      )

      $(@.el).html(rendered)

      return @
    events: {
      "click a": "handleClick"
    }

    handleClick: (e)->
      $target = $(e.target)
      type = $target.data('type')

      if type is "app-page"
        @.app.navigate($target.attr('href'), {trigger: true})
        e.preventDefault()

  }

