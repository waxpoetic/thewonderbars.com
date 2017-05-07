import Ember from 'ember';

export default Ember.Route.extend({
  titleToken: 'Live Video',

  model() {
    return this.store.findRecord('artist', "5a008b20-a2e9-415c-ae52-be787bcefaf3");
  }
});
