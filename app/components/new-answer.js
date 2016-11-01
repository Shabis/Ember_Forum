import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    addNewAnswer() {
      this.set('addNewAnswer', true);
    },
    saveResponse() {
      var params = {
        response: this.get('response'),
        respondent: this.get('respondent')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveResponse', params);
    }
  }
});
