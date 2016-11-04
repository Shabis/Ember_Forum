import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['person: desc'],
  sortAnswers: Ember.computed.sort('question.answers', 'sortBy'),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    saveResponse(params) {
      this.sendAction('saveResponse', params);
    }
  }
});
