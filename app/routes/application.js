import Ember from 'ember';

export default Ember.Route.extend({

    actions: {
        showLoader: function (show) {
            this.controller.set('loaderShown', show);
        }
    }
});
