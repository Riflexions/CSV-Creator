import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addFields: function () {
            var self = this;
            return self.get('store').findAll('field-list');
        },
        deleteFields: function () {

        },
        clearFields: function () {

        }
    }
});
