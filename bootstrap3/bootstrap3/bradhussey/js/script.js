//When you put jquery code within a function that tells
// jquery to wait until the browser has loaded the rest of the
// website and then execute this code.
$(function(){
    $('#alertMe').click(function(e) {
        e.preventDefault();
        $('#successAlert').slideDown();
    });
});