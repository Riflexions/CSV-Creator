import Ember from 'ember';
import utils from './../utilities/utils';

export default Ember.Controller.extend({
    isVisible: true,
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
            var self = this;
            utils.findOldRecords(self).then((data) => {
                console.log('Existing Data: ', data.fields.content[0]._data.fields.length);
                if(data.fields.content[0]._data.fields.length > 0)
                    this.transitionToRoute('creator.data-view');
                else
                    this.transitionToRoute('creator.fields');
            }).catch(() => {
                console.log('Oops, something fishy happened in the promise.')
            });
        },

        showLoadCSVButtons: function() {
            console.log('isVisible:', this.isVisible);
            this.toggleProperty('isVisible');
            console.log('isVisible:', this.isVisible);
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