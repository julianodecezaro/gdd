References = new Mongo.Collection('references');

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

$(document).ready(function () {
    $(document).on('click', '#discard-ref', function (event) {
        $('input[name=name]').val('');
        $('.ui.dropdown').dropdown('clear');
    });
});