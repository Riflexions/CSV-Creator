import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addField: function () {
            var fieldName = this.get('newField');
            this.sendAction('addFields', fieldName);
            this.set('newField', '');
        },
        deleteFields: function (index) {
            console.log("rajath");
            this.sendAction('deleteFields', index);
        },
    }
});
