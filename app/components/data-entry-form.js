import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addField() {
            var fieldName = this.get('newField');
            this.sendAction('addFields', fieldName);
            this.set('newField', '');
        },
        updateField(field, index) {
            this.sendAction('updateFields', field, index);
        },
        deleteField(index) {
            this.sendAction('deleteFields', index);
        }
    }
});
