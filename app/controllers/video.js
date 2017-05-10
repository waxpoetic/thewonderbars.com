import Ember from 'ember';

export default Ember.Controller.extend({
  playlistID: Ember.computed('model.youtubePlaylistId', function() {
    return this.get('model.youtubePlaylistId');
  }),


  startingVideoID: Ember.computed('model.startingYoutubeVideoId', function() {
    return this.get('model.startingYoutubeVideoId');
  }),
});
