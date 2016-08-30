import Ember from 'ember';
import utils from './../utilities/utils';

export default Ember.Controller.extend({
    actions: {
        addData: function () {

        },
        saveRecord: function (record, rows) {
            var self = this;
            var store = this.get('store');
            utils.findOldRecords(self).then(() => {
                return Ember.RSVP.all([
                    fields.save(),
                    records.save()
                ]);
            }).then(() => {
                self.transitionToRoute('creator.fields');
            });
            console.log('Rows are:', rows, 'Record is: ', record);
        }
    }
});
