References = new Mongo.Collection('references');

Template.references.helpers({
	references: function(){
		return References.find();
	}
});

Template.references.events({
	'submit .frm-references': function(event){		
		var name = event.target.name.value;
		References.insert({
			name: name,
			createdAt: new Date()
		});
		event.target.name.value = '';
		return false;
	},
	'click #delete-ref': function(){
		References.remove(this._id);
	}
});

Template.registerHelper('formatDate', function(date) {
	return moment(date).format('DD/MM/YYYY HH:mm:ss');
});

Router.configure({
	layoutTemplate: 'appLayout'
});

Router.onBeforeAction(function() {
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

$(document).ready(function(){
	$(document).on('click', '#save-ref', function(){
		$('.frm-references').submit();
	});
});