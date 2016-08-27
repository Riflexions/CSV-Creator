import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var self = this;
        return Ember.RSVP.hash({
            fields: self.get('store').findAll('field-list'),
            records: self.get('store').findAll('csv-model')
        });
    }
});
