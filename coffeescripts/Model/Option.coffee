define [
  'backbone'
], (Backbone) ->

  Backbone.Model.extend {
    defaults: {
      username: "elct9620"
      perPage: 10
    }
    storage: window.localStorage
    sync: (method, model, options) ->
      switch method
        when "create"
          username = "elct9620" if @.storage.getItem('FirePlurk_Username') is null
          perPage = 10 if @.storage.getItem('FirePlurk_PerPage') is null
          @.set('username', username)
          @.set('perPage', perPage)
        when "read"
          @.set('username', @.storage.getItem('FirePlurk_Username'))
          @.set('perPage', @.storage.getItem('FirePlurk_PerPage'))
        when "update"
          @.storage.setItem('FirePlurk_Username', @.get('username'))
          @.storage.setItem('FirePlurk_PerPage', @.get('perPage'))
        when "delete"
          @.storage.removeItem('FirePlurk_Username')
          @.storage.removeItem('FirePlurk_PerPage')
    save: ->
      @.storage.setItem('FirePlurk_Username', @.get('username'))
      @.storage.setItem('FirePlurk_PerPage', @.get('perPage'))
      @.trigger 'saved'

  }
