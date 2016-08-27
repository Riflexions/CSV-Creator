import Ember from 'ember';
/* globals Papa, $ */
export default Ember.Controller.extend({
    fPath: '',
    showUploader: false,
    actions: {
        newCSV: function () {

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
            if ($('#file-up')[0].files[0] === undefined) {
                alert("Please input a file");
            } else {
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
                    }).then((data) => {
                        self.set('showUploader', false);
                        self.transitionToRoute('creator.data-view');
                    });
                };
                fileReader.readAsText($('#file-up')[0].files[0]);
            }
        }
    }
});
