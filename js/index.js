
new WOW().init();

//Реализация Слайдера

$('.carousel-cards').slick({
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.social-carousel-cards').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

//Попап звонка
const popupCall = $('#popup-call-order');

// Попап открытие
$('.header-button').on('click', function () {
    popupCall.fadeIn();
})
$('.contacts-content-card-btn').on('click', function () {
    popupCall.fadeIn();
})

//  Попап закрытие
$('.call-close-btn').on('click', function () {
    popupCall.fadeOut();
})

//Попап записи
const popupEnroll = $('#popup-order');

// Попап открытие
$('#promo-application').on('click', function () {
    popupEnroll.fadeIn();
})

$('#price-application').on('click', function () {
    popupEnroll.fadeIn();
})

// Попап закрытие
$('.order-close-btn').on('click', function () {
    popupEnroll.fadeOut();
})

// Попап для скидки

const popupDiscount = $('#discount');

// Попап открытие
$('.certificate-info-btn').on('click', function () {
    popupDiscount.fadeIn();
})

// Попап закрытие

$('#discount-btn-close').on('click', function () {
    popupDiscount.fadeOut();
})
$('#discount-btn').on('click', function () {
    popupDiscount.fadeOut();
})

$(function () {
    $("#datepicker").datepicker();
});
$(function () {
    let availableTags = [
        "Стрижка бороды",
        "Стрижка машинкой",
        "Стрижка мужская",
        "Стрижка удлиненная",
        "Стрижка детская"
    ];
    $("#tags-services").autocomplete({
        source: availableTags
    });
});

let masterInput = $('#master');
$('.carousel-card-item-btn').click((e) => {
    masterInput.val($(e.target).parents('.carousel-card-item').find('.carousel-card-item-title').text());
    popupEnroll.fadeIn();

});


//Плавный скролл к сецкиям

$('#about-link').click(function () {
    let scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top;

    $('html, body').animate({
        scrollTop: scrollTop
    }, 500);
});


$('#price-link').click(function () {
    let scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top;

    $('html, body').animate({
        scrollTop: scrollTop
    }, 500);
});


$('#certificate-link').click(function () {
    let scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top;

    $('html, body').animate({
        scrollTop: scrollTop
    }, 500);
});


$('#master-link').click(function () {
    let scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top;

    $('html, body').animate({
        scrollTop: scrollTop
    }, 500);
});


$('#contacts-link').click(function () {
    let scrollName = $(this).attr('data-scroll'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top;

    $('html, body').animate({
        scrollTop: scrollTop
    }, 500);
});

// Бургер меню

$('#burger-menu').click(function () {
    $('#menu').addClass('open');
});
$('.burger-menu-close').click(function () {
    $('#menu').removeClass('open');
})

$('#list-content').click(function (e) {
    $('.list-content').css('display', 'flex');
    $('.list-content-shaving').css('display', 'none');
    $('.list-content-complex').css('display', 'none');
    $('.list-content-additionally').css('display', 'none');
    e.preventDefault();
});

$('#list-content-shaving').click(function (e) {
    $('.list-content').css('display', 'none');
    $('.list-content-shaving').css('display', 'flex');
    $('.list-content-complex').css('display', 'none');
    $('.list-content-additionally').css('display', 'none');
    e.preventDefault();
});

$('#list-content-complex').click(function (e) {
    $('.list-content').css('display', 'none');
    $('.list-content-shaving').css('display', 'none');
    $('.list-content-complex').css('display', 'flex');
    $('.list-content-additionally').css('display', 'none');
    e.preventDefault();
});

$('#list-content-additionally').click(function (e) {
    $('.list-content').css('display', 'none');
    $('.list-content-shaving').css('display', 'none');
    $('.list-content-complex').css('display', 'none');
    $('.list-content-additionally').css('display', 'flex');
    e.preventDefault();
});
