(function() {

  define(['jquery', 'backbone', 'mustache', 'text!javascripts/template/option.js.html'], function($, Backbone, Mustache, optionTemplate) {
    return Backbone.View.extend({
      initialize: function() {
        var self;
        this.template = optionTemplate;
        self = this;
        return this.listenTo(this.model, 'saved', function() {
          return $("#notice").fadeIn("slow", function() {
            return $(this).fadeOut("slow");
          });
        });
      },
      events: {
        'click button[type=submit]': "handleSave"
      },
      render: function() {
        var rendered;
        rendered = Mustache.to_html(this.template, {
          username: this.model.get('username'),
          perPage: this.model.get('perPage')
        });
        $(this.el).html(rendered);
        return this;
      },
      handleSave: function(e) {
        var perPage, username;
        username = $("input[name=username]").val();
        perPage = $("input[name=per_page]").val();
        this.model.set('username', username);
        this.model.set('perPage', perPage);
        this.model.save();
        return e.preventDefault();
      }
    });
  });

}).call(this);
