import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question) {
      var params = {
        userQuestion: this.get('updateUserQuestion'),
        author: this.get('updateAuthor'),
        notes: this.get('updateNotes'),
        screenshot: this.get('updateScreenshot'),
      };
      this.sendAction('update', question, params);
    }
  }
});
