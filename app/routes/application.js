import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    if (tokens.length) {
      return tokens.join('-') + ' - The Wonder Bars';
    } else {
      return 'The Wonder Bars';
    }
  },

  // Slideshow images
  images: Ember.computed('store', function() {
    return this.get('store').findAll('image');
  }),

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('images', this.get('images'));
  }
});
