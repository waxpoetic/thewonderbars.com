import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'iframe',
  classNames: ['youtube-playlist'],
  width: 560,
  height: 315,
  frameborder: 0,
  allowfullscreen: true,
  src: Ember.computed('video, playlist', function() {
    let video = this.get('video');
    let list = this.get('list');

    return `https://www.youtube.com/embed/${video}?list=${list}`;
  })
});
