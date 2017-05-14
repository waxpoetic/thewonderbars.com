import Ember from 'ember';

export default Ember.Route.extend({
  title: function(tokens) {
    if (tokens.length) {
      return tokens.join('-') + ' - The Wonder Bars';
    } else {
      return 'The Wonder Bars';
    }
  },

  setupController(controller, model) {
    controller.set('model', model);
    // this.get('store').findAll('image').then(function(images) {
    //   let imageURLs = images.map((image) => image.get('file'));
    //   controller.set('images', imageURLs);
    // });
  }
});
