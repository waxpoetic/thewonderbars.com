import Ember from 'ember';

export default Ember.Controller.extend({
  onIndexPage: Ember.computed('routing.currentRouteName', function() {
    return this.get('routing.currentRouteName') == 'application.index';
  })
});
