import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        save: function () {
            this.toggleProperty('isEditable1');
        },
        editRecs: function (value, row, col) {
            this.toggleProperty('isEditable1');
            this.sendAction('editRecs', value, row, col);
        },
        deleteRecs: function (row, col) {
            this.sendAction('deleteRecs', row, col);
        },
        setRecordValue(record) {
            receivedRecord = record;
        },
        saveToDS() {
            this.sendAction('addData', receivedRecord);
        }

    }
});

var receivedRecord;
