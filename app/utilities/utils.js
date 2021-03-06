function deleteOldRecords(thisObj) {
    var store = thisObj.get('store');
    return findOldRecords(thisObj).then((data) => {
        var fieldsList = data.fields.map((field) => (field.destroyRecord()));
        var modelList = data.models.map((model) => (model.destroyRecord()));
        return Ember.RSVP.hash({
            fields: Ember.RSVP.all(fieldsList),
            models: Ember.RSVP.all(modelList)
        });
    });
}

function findOldRecords(thisObj) {
    var store = thisObj.get('store');
    return Ember.RSVP.hash({
        fields: store.findAll('field-list'),
        models: store.findAll('csv-model')
    });
}

export default {
    deleteOldRecords: deleteOldRecords,
    findOldRecords: findOldRecords
}