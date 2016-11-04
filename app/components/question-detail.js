import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['respondent: desc'],
  sortAnswers: Ember.computed.sort('question.answers', 'sortBy'),
  favoritesList: Ember.inject.service(),

  actions: {
    update(question, params) {
      this.sendAction('update', question, params);
    },
    saveResponse(params) {
      this.sendAction('saveResponse', params);
    },
    addToFavorites(question) {
      this.get('favoritesList').add(question);
    },
  }
});
