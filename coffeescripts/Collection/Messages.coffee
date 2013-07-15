define [
  'backbone', 'Model/Message'
], (Backbone, MessageModel) ->

  Backbone.Collection.extend {
    initialize: (options)->
      options = options || {}
      @.plurkID = options.username
      @.perPage = options.perPage || 10

    url: ->
      unless @.plurkID is undefined
        "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.plurk.com/#{@.plurkID}.xml&num=#{@.perPage}"

    model: MessageModel
    sync: (method, collection, options) ->
      if method is 'read'
        options.dataType = 'jsonp'
        Backbone.sync method, collection, options
    parse: (res) ->
      res.responseData.feed.entries
  }
