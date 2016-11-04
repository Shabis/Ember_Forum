import Ember from 'ember';

export default Ember.Route.extend({
  sortBy: ['date:desc'],
  sortQuestions: Ember.computed.sort('model.questions', 'sortBy'),

  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
