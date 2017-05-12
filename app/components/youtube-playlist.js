import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['youtube-playlist'],
  src: Ember.computed('video,playlist', function() {
    let video = this.get('video');
    let list = this.get('list');

    return `https://www.youtube.com/embed/${video}?list=${list}`;
  })
});
