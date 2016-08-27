import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addFields: function (name, age) {
            var self = this;
            var store = self.get('store');

            store.findAll('field-list').then((fields) => {
                
            })
        },
        deleteFields: function () {

        },
        clearFields: function () {

        }
    }
});
