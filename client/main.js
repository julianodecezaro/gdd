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

//import 'collections/references/references.html';

Template.registerHelper('formatDate', function (date) {
    return moment(date).format('DD/MM/YYYY HH:mm:ss');
});

Template.registerHelper('btnDflt', function (_id, _class, _icon, _text) {
    return '<div id="' + _id + '" type="submit" class="' + _class + '"><div class="icon"><i class="mdi mdi-' + _icon + '"></i></div><div class="text">' + _text + '</div></div>';
});

$(document).ready(function () {
    $(document).on('click', 'button', function (event) {
        if ($(event.target).hasClass('no-submit')) {
            event.preventDefault();
            return false;
        }
    });
});