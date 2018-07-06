


$(document).ready(function ()
{
    $('.input2').each(function ()
    {
        $(this).on('blur', function ()
        {
            if ($(this).val().trim() != "")
            {
                $(this).addClass('has-val');
            } else
            {
                $(this).removeClass('has-val');
            }
        })
    })
});



var sections_offset = [];


$(document).scroll(function (e)
{
    var scrollTop = $(document).scrollTop();

    if (scrollTop > 0)
    {
        $('#fixed-menu').addClass('scrolled');
    } else
    {
        $('#fixed-menu').removeClass('scrolled');
    }

    //zaznaczanie menu
    mark_as_active_nav(scrollTop);

});



var id_el;




function mark_as_active_nav(offset)
{

    //tworzenie tablicy z odlelosciami sekcji menu
    $('.menu__item a[data-scroll]').each(function (i)
    {
        var navbar_height = $('#fixed-menu').height();
        var id_element = $(this).attr('data-scroll');

        var offset_element = ($('#' + id_element).offset().top - navbar_height) - 50;
        offset_element = offset_element < 0 ? 0 : offset_element;

        sections_offset[i] = [id_element, offset_element];
    });

    var id_el;

    //sprawdzam odleglosci
    $(sections_offset).each(function (i)
    {
        var offset_el = sections_offset[i][1];
        if (offset_el <= offset)
        {
            id_el = sections_offset[i][0];
            return;
        }
    });

    //oznaczam menu
    $('.menu__item').removeClass('active');
    $('.menu__item a[data-scroll=' + id_el + ']').closest('li').addClass('active');
}


function scroll_to_div(id)
{
    var navbar_height = $('#fixed-menu').height();

    $("html, body").animate({
        scrollTop: $('#' + id).offset().top - navbar_height
    }, 1000);
}

//scrolloanie
$('a[data-scroll]').click(function (e)
{
    e.preventDefault();

    var scroll_to_id = $(this).attr('data-scroll');
    scroll_to_div(scroll_to_id);


});

$(document).ready(function ()
{
    var navbar_height = $('header').height();
    $('.sec_main__scroll').click(function ()
    {
        $('html, body').animate({
            scrollTop: $(".sec_examples").offset().top - navbar_height
        }, 1500);
    });
});

$(document).ready(function ()
{
    $('.hamburger').click(function () {

        $(this).toggleClass('opening');
        $('#mobile-menu').toggleClass('open');
        $('#overlay').toggleClass('show');
    });
});