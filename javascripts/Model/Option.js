(function() {

  define(['backbone'], function(Backbone) {
    return Backbone.Model.extend({
      defaults: {
        username: "elct9620",
        perPage: 10
      },
      storage: window.localStorage,
      sync: function(method, model, options) {
        var perPage, username;
        switch (method) {
          case "create":
            if (this.storage.getItem('FirePlurk_Username') === null) {
              username = "elct9620";
            }
            if (this.storage.getItem('FirePlurk_PerPage') === null) {
              perPage = 10;
            }
            this.set('username', username);
            return this.set('perPage', perPage);
          case "read":
            this.set('username', this.storage.getItem('FirePlurk_Username'));
            return this.set('perPage', this.storage.getItem('FirePlurk_PerPage'));
          case "update":
            this.storage.setItem('FirePlurk_Username', this.get('username'));
            return this.storage.setItem('FirePlurk_PerPage', this.get('perPage'));
          case "delete":
            this.storage.removeItem('FirePlurk_Username');
            return this.storage.removeItem('FirePlurk_PerPage');
        }
      },
      save: function() {
        this.storage.setItem('FirePlurk_Username', this.get('username'));
        this.storage.setItem('FirePlurk_PerPage', this.get('perPage'));
        return this.trigger('saved');
      }
    });
  });

}).call(this);
