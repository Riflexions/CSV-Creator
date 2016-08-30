import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save: function () {
            this.toggleProperty('isEditable');
        },
        edit: function () {
            this.toggleProperty('isEditable');
        },
        deleteField: function () {
            this.sendAction('deleteFields', this.get('index'));
        }
    }
});
