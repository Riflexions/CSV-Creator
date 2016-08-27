import Ember from 'ember';

export default Ember.Controller.extend({
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
            console.log(fileReader);
            var fname = this.get('fPath');
            console.log(fname);
            if (fname == undefined) {
                alert("Please input a file");
            } else {
                fileReader.onload = function (e) {
                    console.log(e);
                    var csv = Papa.parse(e.target.result);
                    console.log(csv);
                    console.log(JSON.stringify(csv.data));
                }   
                fileReader.readAsText($('#file-up')[0].files[0]);

                this.transitionToRoute('creator.fields');

            fileReader.onload = function (e) {
                console.log(e);
                var csv = Papa.parse(e.target.result);
                console.log(csv);
                console.log(JSON.stringify(csv.data));
                console.log('fields: ', csv.data);

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
                    console.log('S: ', data);
                    self.transitionToRoute('creator.data-view');
                });
            }
        }
    }
});
