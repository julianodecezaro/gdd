Template.menucollections.onRendered(function () {
    //this.$(".menu").menu();
    $('.ui.menu').on('click', '.item', function () {
        if (!$(this).hasClass('dropdown')) {
            $(this).addClass('active').siblings('.item').removeClass('active');
        }
    });
});

$(document).ready(function () {

});