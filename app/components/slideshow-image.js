import Ember from 'ember';

export default Ember.Component.extend({
  tag: 'li',
  classNames: ['slideshow__slide'],
  attributeBindings: ['style'],
  style: Ember.computed('src', function() {
    let imageURL = this.get('src');
    return `background-image: url('${imageURL}');`;
  })
});
