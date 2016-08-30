import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        setRecordValue(record) {
            receivedRecord = record;
        },
        saveToDS() {
            this.sendAction('addData', receivedRecord);
        }
    }
});

var receivedRecord;