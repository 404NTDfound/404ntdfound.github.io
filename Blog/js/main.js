
$('button.navbar-toggle').click(function () { 
    $('.dropdown-menu').css('background','#fff');
});
$('.why-list-box').addClass('animation');
$('.about img').addClass('animation');
$('.about-txt').addClass('animation');
$('.Agents-card').addClass('animation');
$('.Pack-box>li').addClass('animation');
$('.blog-card').addClass('animation');
$('.book').addClass('animation');
$('.contact-box form').addClass('animation');
$('.block').addClass('animation');

$(document).scroll(function () { 
    // $('.animation').removeClass('animation')
    // $(document).scrollTop()
    // window.innerHeight
    // if ($('.animation').eq(0).offset().top < ($(document).scrollTop() + window.innerHeight)) {
    // 	// alert('滚动到了')
    // 	// $('.animation').eq(0).removeClass('animation')
    // }
    $('.animation').each(function (index, element) {
        // console.log(element);
        
        if ($(element).offset().top < ($(document).scrollTop() + window.innerHeight - 100)) {

            $(element).removeClass('animation')
    }
    })
});


box = document.getElementsByClassName('box')[0]
        var x = 1;
        setInterval(function name(params) {
            x++;
            box.style.transform = 'rotateX(30deg) rotateY(' + (30 + x) + 'deg)'
        }, 100)


