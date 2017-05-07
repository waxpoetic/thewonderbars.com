import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Tour Dates',

  model() {
    return this.store.findAll('event');
  }
});
