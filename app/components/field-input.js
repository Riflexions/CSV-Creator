import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save() {
            this.toggleProperty('isEditable');
        },
        edit() {
            this.toggleProperty('isEditable');
        },
        delete() {
        }
    }
});
