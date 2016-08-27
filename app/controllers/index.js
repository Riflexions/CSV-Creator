import Ember from 'ember';
import utils from './../utilities/utils';

export default Ember.Controller.extend({
    actions: {
        newCSV: function () {
            var self = this;
            var store = this.get('store');

            utils.deleteOldRecords(self).then(() => {
                var fields = store.createRecord('field-list', {
                    fields: []
                });
                var records = store.createRecord('csv-model', {
                    records: []
                });
                return Ember.RSVP.all([
                    fields.save(),
                    records.save()
                ]);
            }).then(() => {
                self.transitionToRoute('creator.fields');
            });
        },
        existingCSV: function () {

        },
        loadCsv: function () {
            var self = this;
            var store = this.get('store');

            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                console.log(e);
                var csv = Papa.parse(e.target.result);
                console.log(csv);
                console.log(JSON.stringify(csv.data));
                console.log('Total length including fields, data & empty last element : ', csv.data.length);

                utils.deleteOldRecords(self).then(() => {
                    var fields = store.createRecord('field-list', {
                        fields: csv.data.splice(0, 1)[0]
                    });
                    var records = store.createRecord('csv-model', {
                        records: csv.data
                    });
                    return Ember.RSVP.all([
                        fields.save(),
                        records.save()
                    ]);
                }).then(() => {
                    self.transitionToRoute('creator.data-view');
                });
            }
            fileReader.readAsText($('#file-up')[0].files[0]);
        }
    }
});
