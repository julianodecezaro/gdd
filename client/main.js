/*Meteor.startup(() => {
    WebFontConfig = {
        google: { families: [ 'Roboto Slab:700,400:latin', 'Oswald:400', 'Mouse Memoirs' ] }
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
        //console.log("async fonts loaded", WebFontConfig);
    })();
});*/

References = new Mongo.Collection('references');

Template.menu.onRendered(function () {
    //this.$(".menu").menu();
    $('.ui.menu').on('click', '.item', function () {
        if (!$(this).hasClass('dropdown')) {
            $(this).addClass('active').siblings('.item').removeClass('active');
        }
    });
});
Template.references.onRendered(function () {
    this.$(".ui.dropdown").dropdown();
    this.$(".ui.checkbox").checkbox();
});

Template.references.helpers({
    references: function () {
        return References.find();
    }
});

Template.references.events({
    'submit .frm-references': function (event) {
        var name = event.target.name.value;
        var genre = event.target.country.value;
        References.insert({
            name: name
            , genre: genre
            , createdAt: new Date()
        });
        return false;
    }
    , 'click #delete-ref': function () {
        References.remove(this._id);
    }
});

Template.registerHelper('formatDate', function (date) {
    return moment(date).format('DD/MM/YYYY HH:mm:ss');
});

Template.registerHelper('btnDflt', function (_id, _class, _icon, _text) {
    return '<div id="' + _id + '" type="submit" class="' + _class + '"><div class="icon"><i class="mdi mdi-' + _icon + '"></i></div><div class="text">' + _text + '</div></div>';
});

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

Router.route('/references', function () {
    this.render('references');
});

$(document).ready(function () {
    $(document).on('click', '#discard-ref', function (event) {
        $('input[name=name]').val('');
        $('.ui.dropdown').dropdown('clear');
    });
    $(document).on('click', 'button', function (event) {
        if ($(event.target).hasClass('no-submit')) {
            event.preventDefault();
            return false;
        }
    });
});