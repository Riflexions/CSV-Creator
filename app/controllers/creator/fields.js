import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addFields: function (fieldName) {
            var self = this;

            return self.get('store').findAll('field-list');

            var store = self.get('store');
            console.log(fieldName);
            store.findAll('field-list').then((fields) => {
                var model = fields.get('firstObject');
                var fieldsList = model.get('fields');
                fieldsList.push(fieldName);
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
        deleteFields: function () {

        },
        clearFields: function () {

        }
    }
});
