import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question) {
      var params = {
        userQuestion: this.get('userQuestion'),
        author: this.get('author'),
        notes: this.get('notes'),
        screenshot: this.get('screenshot'),
      };
      this.sendAction('update', question, params);
    }
  }
});
