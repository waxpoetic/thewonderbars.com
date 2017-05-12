import Ember from 'ember';

export default Ember.Controller.extend({
  playlist: Ember.computed('model.youtubePlaylistId,model.startingYoutubeVideoId', function() {
    let video = this.get('model.startingYoutubeVideoId');
    let list = this.get('model.youtubePlaylistId');

    return `https://www.youtube.com/embed/${video}?list=${list}`;
  }),
});
