import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
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
