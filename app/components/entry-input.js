import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save: function () {
            this.toggleProperty('isEditable1');
        },
        editRec: function () {
            this.toggleProperty('isEditable1');
        },
        deleteRec: function () {
            var col = this.get('index');
            var row = this.get('index1');
            this.sendAction('deleteRecs', row, col);
        },
        cancelEditing: function () {
            this.toggleProperty('isEditable1');
        },
        updateRec: function() {
            var col = this.get('index');
            var row = this.get('index1');
            this.sendAction('editRecs', this.get('recordValue'), row, col);
        }
    }
});
