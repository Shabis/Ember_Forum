import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question, params) {
      console.log(question);
      console.log(params);
      this.sendAction('update', question, params);
    }
  }
});
