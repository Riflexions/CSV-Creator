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
            }
        }
    }
});
