import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    super(controller, model);
    this.store.findAll('image').then(function(images) {
      controller.set('images', images);
    });
  }
});
