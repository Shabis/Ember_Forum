import Ember from 'ember';

export default Ember.Route.extend({
  action: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('userQuestion', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
