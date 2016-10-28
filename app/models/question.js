import DS from 'ember-data';

export default DS.Model.extend({
  userQuestion: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  screenshot: DS.attr()
  // answers: DS.hasMany('answer', { async: true })
});
