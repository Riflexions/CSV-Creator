import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveIndividualRecordValue() {
            var index = this.get('index');
            var value = this.get('newRecordValue');

            var records = addValuesToRecord(value, index);
            console.log('Record entered:', records);
            this.sendAction('setRecordValue', records);
        }
    }
});

var recordArray = [];
function addValuesToRecord(value, index) {
    recordArray[index] = value;
    return recordArray;
}