import Ember from 'ember';

export default Ember.Route.extend({
  // Fall back to using Artist record as the model for most pages
  model() {
    return this.store.findRecord('artist', "5a008b20-a2e9-415c-ae52-be787bcefaf3");
  }
});
