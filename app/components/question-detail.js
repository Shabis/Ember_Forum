import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    saveResponse(params) {
      this.sendAction('saveResponse', params);
    }
  }
});
