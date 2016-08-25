import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function () {
    this.route('creator', function () {
        this.route('fields');
        this.route('data-entry');
        this.route('data-view');
    });
});

export default Router;
