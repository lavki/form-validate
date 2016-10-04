$(document).ready(function()
{
    // Validate input field
    $('#folder').blur(function()
    {
        var value   = $(this).val(),
            answer  = $(this).parent().find('.answer'),
            pattern = new RegExp('[a-z_0-9]{3,}');

        function message(rem, add, msg) {
            answer.fadeIn(500, function(){
                answer.removeClass(rem).addClass(add).html(msg).delay(5000).fadeOut(500);
            }); 
        }
        
        if(value === '') {
            message('success', 'error', 'Поле не може бути пустим.');
        } else if(value.length < 3) {
            message('success', 'error', 'Введіть принаймні 3-и символи.');
        } else if(value != value.match(pattern)) {
            message('success', 'error', 'Дозволено лише латинські маленькі літери, цифри та нижній слеш.');
        } else {
            message('error', 'success', 'Подальша обробка Ajax-ом...'); }
    });
});

