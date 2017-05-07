import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Music',

  model() {
    return this.store.findAll('track');
  }
});
