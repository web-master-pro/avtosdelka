$(document).ready(function(){

    $(".ask-form__textarea")
        .focus(function() {
            $(this).next(".ask-form__textarea-placeholder").fadeOut(300);
        })
        .blur(function() {
            if ($(this).val().length == 0) {
                $(this).next(".ask-form__textarea-placeholder").fadeIn(300);
            }
        });

    $(".ask-form__textarea-placeholder").click(function(){
        $(this).fadeOut(300);
        $(this).prev(".ask-form__textarea").focus();
    })

});
