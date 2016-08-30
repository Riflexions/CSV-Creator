import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addData(records) {
                var self = this;
                var store = self.get('store');

                console.log('Record Received: ', records);

                store.findAll('field-list').then((fields) => {
                    var model = fields.get('firstObject');
                    var fieldsList = model.get('fields');
                    return fieldsList.length;
                }).then((length) => {
                    store.findAll('csv-model').then((csvModels) => {
                        var model = csvModels.get('firstObject');
                        var modelsList = model.get('records');
                        var correctRecord = [];

                        for (var i = 0; i < length; i++) {
                            if (records[i] != undefined)
                                correctRecord[i] = records[i];
                            else
                                correctRecord[i] = "";
                        }
                        modelsList.push(correctRecord);
                        model.set('records', modelsList);
                        return model.save();
                    });
                }).catch((err) => {
                    console.log('Following error occurred: ', err);
                });
            },
            deleteRecs: function (row, col) {
                var self = this;
                var store = self.get('store');
                store.findAll('csv-model').then((fields) => {
                    var store = self.get('store');
                    var model = fields.get('firstObject');
                    var fieldsList = model.get('records');
                    console.log(fieldsList);
                    console.log("row", row);
                    console.log("col", col);
                    fieldsList[row][col] = "";
                    model.set('fields', fieldsList);
                    return model.save();
                });
            },
            editRecs: function (value, row, col) {
                var self = this;
                var store = self.get('store');

                store.findAll('csv-model').then((models) => {
                    var model = models.get('firstObject');
                    var modelsList = model.get('records');
                    modelsList[row][col] = value;
                    model.set('records', modelsList);
                    return model.save();
                });
            }
    }
});
