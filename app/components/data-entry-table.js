import Ember from 'ember';

export default Ember.Component.extend({
    record: undefined,
    actions: {
        addRecord() {
            var totalRows = this.get('dataList').get('records').length;
            var totalRows = this.get('dataList').get('records').length;
            console.log("Rows: ", totalRows);
            console.log("Hello..", this.record);
            this.sendAction('saveRecord', this.record, totalRows);
        },

        createRecord(record) {
            this.record = record;
            console.log("Hi..", this.record);
        }
    }
});
