import Ember from 'ember';


export default Ember.Component.extend({
  action: {
    saveQuestion() {
      var params = {
        userQuestion: this.get('userQuestion'),
        author: this.get('author'),
        notes: this.get('notes'),
        screenshot: this.get('screenshot')
      };
      this.sendAction('saveQuestion', params);
    }
  }
});
