define [
  'backbone'
], (Backbone)->

  Backbone.Model.extend {
    parse: (res, options) ->
      @.content = res.content.replace(res.author, '')
  }
