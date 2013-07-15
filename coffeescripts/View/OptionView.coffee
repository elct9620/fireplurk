define [
  'jquery', 'backbone', 'mustache', 'text!javascripts/template/option.js.html'
], ($, Backbone, Mustache, optionTemplate) ->

  Backbone.View.extend {
    initialize: ->
      @.template = optionTemplate

      self = @
      @.listenTo @.model, 'saved', ->
        $("#notice").fadeIn("slow", ->
          $(@).fadeOut("slow")
        )
    events: {
      'click button[type=submit]': "handleSave"
    }
    render: ->
      rendered = Mustache.to_html(
        @.template,
        {
          username: @.model.get('username')
          perPage: @.model.get('perPage')
        }
      )

      $(@.el).html(rendered)

      return @
    handleSave: (e)->
      username = $("input[name=username]").val()
      perPage = $("input[name=per_page]").val()

      @.model.set('username', username)
      @.model.set('perPage', perPage)
      @.model.save()

      e.preventDefault()
  }
