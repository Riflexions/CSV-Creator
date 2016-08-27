import Ember from 'ember';
<<<<<<< HEAD
import utils from './../utilities/utils';

=======
/* globals Papa, $ */
>>>>>>> origin/master
export default Ember.Controller.extend({
    fPath: '',
    showUploader: false,
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
                self.transitionToRoute('creator.data-entry');
            });
        },
        existingCSV: function () {

        },
        clickEx: function () {
            this.set('showUploader', true);
        },
        loadCsv: function () {
            var self = this;
            var store = this.get('store');
            var fileReader = new FileReader();
<<<<<<< HEAD
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
=======
            if ($('#file-up')[0].files[0] === undefined) {
                alert("Please input a file");
            } else {
                self.send('showLoader',true);
                fileReader.onload = function (e) {
                    var csv = Papa.parse(e.target.result);
                    Ember.RSVP.hash({
                        fields: store.findAll('field-list'),
                        models: store.findAll('csv-model')
                    }).then((data) => {
                        var fieldsList = data.fields.map((field) => (field.destroyRecord()));
                        var modelList = data.models.map((model) => (model.destroyRecord()));
                        return Ember.RSVP.hash({
                            fields: fieldsList,
                            models: modelList
                        });
                    }).then(() => {
                        return Ember.RSVP.all([
                        store.createRecord('field-list', {
                                fields: csv.data.splice(0, 1)[0]
                            }),
                        store.createRecord('csv-model', {
                                records: csv.data
                            })
                    ]);
                    }).then(() => {
                        self.set('showUploader', false);
                        self.send('showLoader',false);
                        self.transitionToRoute('creator.data-view');
                    });
                };
                fileReader.readAsText($('#file-up')[0].files[0]);
>>>>>>> origin/master
            }
        }
    }
});
