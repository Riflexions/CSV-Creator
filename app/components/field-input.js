import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save: function () {
            alert("bye");
            this.toggleProperty('isEditable');
        },
        edit: function () {
            this.toggleProperty('isEditable');
        },
        deleteField: function () {
            alert("delete");
            this.get('deleteFields');

        }


    }
});
