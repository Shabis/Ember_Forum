import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  tagName: 'ul',
  sortBy: ['question.date:desc'],
  sortQuestions: Ember.computed.sort('questions', 'sortBy'),

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    }
  }
});
