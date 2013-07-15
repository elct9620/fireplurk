(function() {

  define(['jquery', 'backbone', 'require', 'Model/Option', 'Collection/Messages', 'View/BaseView', 'View/VersionView', 'View/IndexView', 'View/OptionView'], function($, Backbone, require) {
    var VERSION;
    VERSION = "0.1.0";
    return Backbone.Router.extend({
      initialize: function() {
        var $targetEl, BaseView;
        BaseView = require('View/BaseView');
        $targetEl = $("#app");
        this.view = new BaseView({
          el: $targetEl,
          app: this
        });
        this.view.render();
        this.appEl = $("#app-inner");
        return this.$loader = $("#app-loading").hide();
      },
      routes: {
        "": "index",
        "options": "options",
        "version": "version"
      },
      index: function() {
        var IndexView, Messages, OptionModel, messages, options, view;
        IndexView = require('View/IndexView');
        Messages = require('Collection/Messages');
        OptionModel = require('Model/Option');
        options = new OptionModel;
        options.fetch();
        messages = new Messages({
          username: options.get('username'),
          perPage: options.get('perPage')
        });
        messages.fetch();
        view = new IndexView({
          el: this.appEl,
          collection: messages
        });
        return view.render();
      },
      options: function() {
        var OptionModel, OptionView, options, view;
        OptionView = require('View/OptionView');
        OptionModel = require('Model/Option');
        options = new OptionModel;
        options.fetch();
        view = new OptionView({
          el: this.appEl,
          model: options
        });
        return view.render();
      },
      version: function() {
        var VersionView, view;
        VersionView = require('View/VersionView');
        view = new VersionView({
          el: this.appEl,
          appVersion: VERSION
        });
        return view.render();
      }
    });
  });

}).call(this);
