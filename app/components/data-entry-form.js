import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        addField: function () {
            alert("gandu");
            var fieldName = this.get('newField');
            this.sendAction('addFields', fieldName);
            this.set('newField', '');
        },
        deleteFields: function () {
            alert("hi");
           console.log("rajath");
            this.sendAction('deleteFields');


        },
       

    }
});
