define [
  'jquery', 'backbone', 'require',
  # Model
  'Model/Option',
  # Collection
  'Collection/Messages',
  # Views
  'View/BaseView', 'View/VersionView', 'View/IndexView', 'View/OptionView'
], ($, Backbone, require) ->

  VERSION = "0.1.0"

  Backbone.Router.extend {
    initialize: ->
      BaseView = require('View/BaseView')
      $targetEl = $("#app")

      @.view = new BaseView({el: $targetEl, app: @})
      @.view.render()

      @.appEl = $("#app-inner")

      @.$loader = $("#app-loading").hide()

    routes: {
      "": "index"
      "options": "options"
      "version": "version"
    }
    # Pages
    index: ->
      IndexView = require('View/IndexView')
      Messages = require('Collection/Messages')
      OptionModel = require('Model/Option')

      options = new OptionModel
      options.fetch()

      messages = new Messages {username: options.get('username'), perPage: options.get('perPage')}
      messages.fetch()

      view = new IndexView({el: @.appEl, collection: messages})
      view.render()

    options: ->
      OptionView = require('View/OptionView')
      OptionModel = require('Model/Option')

      options = new OptionModel
      options.fetch()

      view = new OptionView({el: @.appEl, model: options})
      view.render()

    version: ->
      VersionView = require('View/VersionView')

      view = new VersionView({el: @.appEl, appVersion: VERSION})
      view.render()

  }
