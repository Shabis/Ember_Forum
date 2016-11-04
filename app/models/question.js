import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  inquiry: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  screenshot: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),


    favoritesList: Ember.inject.service(),
    inFavorites: Ember.computed('favoritesList.questions.[]', function() {
        return this.get('favoritesList').includes(this);
      })
    });
