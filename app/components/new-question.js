import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion1() {
      var params = {
        userQuestion: this.get('userQuestion'),
        author: this.get('questionAuthor'),
        notes: this.get('notes'),
        screenshot: this.get('screenshot'),
      };
      this.sendAction('saveQuestion2', params);
    }
  }
});
