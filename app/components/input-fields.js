import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        saveData() {
            var store = this.get('store');

            var field = this.get('newRecord');
            var index = this.get('index');
            console.log('Inserted Data : ', field, ' at index : ', index);

            var data = insertField(field, index);
            console.log('Total Data : ', data);

            this.sendAction('createRecord', data);
        }
    }
});

var fields = [];

function insertField(field, index) {
    fields[index] = field;
    return fields;
}
