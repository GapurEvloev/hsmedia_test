$(document).ready(function () {
    $('.discover__btn').click(function () {
        $(this).parent().toggleClass('discover--active');
        $('.questions').toggleClass('questions--active');
    });
    $('#burger').click(function () {
        $('#modal-nav-overlay').toggleClass('overlay-active');
        $('#modal-nav').toggleClass('modal-nav--active');
    });
    $('#modal-close').click(function () {
        $('#modal-nav-overlay').toggleClass('overlay-active');
        $('#modal-nav').toggleClass('modal-nav--active');
    });
});