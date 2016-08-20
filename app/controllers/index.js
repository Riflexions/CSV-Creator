import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        newCSV: function () {

        },
        existingCSV: function () {

        },
        loadCsv: function () {
            var fileReader = new FileReader();
            fileReader.onload = function (e) {
                var csv = Papa.parse(e.target.result);
                console.log(csv);
                console.log(JSON.stringify(csv.data));
            }
            fileReader.readAsText($('#file-up')[0].files[0]);

        }
    }
});

