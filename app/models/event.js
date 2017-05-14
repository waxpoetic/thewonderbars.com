import DS from 'ember-data';
import Event from 'ember-cli-waxpoetic/models/event';

export default Event.extend({
  image: DS.attr('string')
});
