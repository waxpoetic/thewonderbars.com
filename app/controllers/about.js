import Ember from 'ember';

export default Ember.Controller.extend({
  bio: Ember.computed('model.bio', function() {
    return Ember.String.htmlSafe(this.get('model').get('bio'));
  })
});
