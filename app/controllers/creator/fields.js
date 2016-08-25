import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {

        addFields: function (name, age) {
            alert(name, age);

        },
        deleteFields: function () {

        },
        clearFields: function () {

        }
    }
});
