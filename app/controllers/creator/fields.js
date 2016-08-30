import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addFields: function (fieldName) {
            var self = this;
            var store = self.get('store');
            console.log(fieldName);
            store.findAll('field-list').then((fields) => {
                var model = fields.get('firstObject');
                var fieldsList = model.get('fields');
                console.log('Before addFields: ', fieldsList);
                fieldsList.push(fieldName);
                console.log('After addFields: ', fieldsList);
                model.set('fields', fieldsList);
                return model.save();
            }).then(() => {
                return store.findAll('csv-model');
            }).then((data) => {
                var model = data.get('firstObject');
                var modelList = model.get('records');
                model.set('records', modelList.map((d) => {
                    d.push('');
                    return d;
                }));
                return model.save();
            }).then(() => {
                alert('Field created successfully');
            });
        },

        updateFields: function (field, index) {
            var self = this;
            var store = self.get('store');
            console.log('Inside updateFields of fields controller');
            
            store.findAll('field-list').then((fields) => {
                var model = fields.get('firstObject');
                var fieldsList = model.get('fields');
                console.log('Old Fields: ', fieldsList);
                fieldsList[index] = field;
                console.log('updateFields: ', fieldsList);
                model.set('fields', fieldsList);
                return model.save();
            }).catch((err) => {
                console.log('Following error occurred: ', err);
            });
        },

        deleteFields: function (index) {
            var self = this;
            var store = self.get('store');
            console.log('Inside updateFields of fields controller');
            
            store.findAll('field-list').then((fields) => {
                var model = fields.get('firstObject');
                var fieldsList = model.get('fields');
                console.log('Old Fields: ', fieldsList);
                fieldsList.splice(index, 1);
                console.log('updateFields: ', fieldsList);
                model.set('fields', fieldsList);
                return model.save();
            }).then(() => {
                return store.findAll('csv-model');
            }).then((data) => {
                var model = data.get('firstObject');
                var modelList = model.get('records');
                console.log('Records: ', modelList);
                var newRecords = [];
                modelList.forEach((record) => {
                    record.splice(index, 1);
                    newRecords.push(record);
                });
                model.set('records', newRecords);
                return model.save();
            }).catch((err) => {
                console.log('Following error occurred: ', err);
            });
        }
    }
});
