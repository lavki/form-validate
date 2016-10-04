$(document).ready(function()
{
    // Validate input field
    $('#folder').blur(function()
    {
        var value   = $(this).val(),
            answer  = $(this).parent().find('.answer'),
            pattern = new RegExp('[a-z_0-9]{3,}');

        function message(add, msg) {
            answer.fadeIn(500, function(){
                answer.addClass(add).html(msg).delay(3000).fadeOut(500, function(){
                    answer.removeClass(add);
                });
            }); 
        }
        
        if(value === '') {
            message('error', 'Поле не може бути пустим.');
        } else if(value.length < 3) {
            message('error', 'Введіть принаймні 3-и символи.');
        } else if(value != value.match(pattern)) {
            message('error', 'Дозволено лише латинські маленькі літери, цифри та нижній слеш.');
        } else {
            message('success', 'Валідація пройшла успішно.'); }
    });
});

