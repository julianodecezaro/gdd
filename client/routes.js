Router.configure({
    layoutTemplate: 'appLayout'
});

Router.onBeforeAction(function () {
    //if (! Meteor.userId()) {
    /*if (!this.userId) {
    	this.render('login');
    } else {*/
    this.next();
    //}
});

Router.route('/', function () {
    this.render('home');
});

/*** Collections ***/
Router.route('/collections', function () {
    this.render('collections');
    this.render('menucollections', {
        to: 'menu'
    });
});

Router.route('/collections/references', function () {
    this.render('references');
    this.render('menucollections', {
        to: 'menu'
    });
});

Router.route('/collections/genres', function () {
    this.render('genres');
    this.render('menucollections', {
        to: 'menu'
    });
});
/*** Collections ***/

/*** Documents ***/
Router.route('/documents', function () {
    this.render('documents');
    this.render('menudocuments', {
        to: 'menu'
    });
});
/*** Documents ***/