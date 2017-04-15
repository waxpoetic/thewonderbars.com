import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    super(controller, model);
    this.store.findRecord('artist', 1).then(function(artist) {
      controller.set('artist', artist);
    });
  }
});
