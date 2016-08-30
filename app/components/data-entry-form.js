import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save() {
            var field = this.get('field');
            var index = this.get('index');
            this.sendAction('updateField', field, index);

            console.log('field:', field, ' index:', index);
            this.toggleProperty('isEditable');
        },
        edit() {
            this.toggleProperty('isEditable');
            console.log(this.get('field'));
            console.log(this.get('index'));
        },
        delete() {
            var index = this.get('index');
            this.sendAction('deleteField', index);
        }
    }
});