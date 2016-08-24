import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        var csv = {
            fields: fields,
            data: data
        };
        console.log(csv);
        return csv;
    }
});

var fields = ['id', 'name', 'age'];
var data = [["1", "Chirag", "24"], ["2", "Rajat", "24"], ["3", "Bharath", "23"]];

/*
[
    Ember.Object.create({
        id: '1',
        name: 'abc',
        age: '27'
    })
];
*/
