import Ember from 'ember';

export default Ember.Component.extend({
  tag: 'li',
  classNames: ['slideshow__slide'],
  caption: '',
  attributeBindings: ['style'],
  style: Ember.computed('src', function() {
    let imageURL = this.get('src');
    return `background-image: url('${imageURL}');`;
  })
});
