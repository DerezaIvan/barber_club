$('#submit').click(function () {
    let name = $('#name');
    let phone = $('#phone');
    let service = $('#tags-services');
    let master = $('#master');
    let date = $('#datepicker');
    let time = $('#time');
    let hasError = false;

    $('.error-input').hide();

    if (!name.val()) {
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.next().show();
        hasError = true;
    }
    if (!service.val()) {
        service.next().show();
        hasError = true;
    }
    if (!master.val()) {
        master.next().show();
        hasError = true;
    }
    if (!date.val()) {
        date.next().show();
        hasError = true;
    }
    if (!time.val()) {
        time.next().show();
        hasError = true;
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout ",
            data: {
                name: name.val(),
                phone: phone.val(),
                service: service.val(),
                master: master.val(),
                date: date.val(),
                time: time.val()
            },
        })
            .done(function (msg) {
                if (msg.success === 1) {
                    name.fadeOut();
                    phone.fadeOut();
                    service.fadeOut();
                    master.fadeOut();
                    date.fadeOut();
                    time.fadeOut();
                    $('.order-btn').remove();
                    $('.order-text').css({
                        'max-width': '300px',
                        'margin': '0 auto'
                    }).html('Мы перезвоним вам для уточнения данных в течении 5 минут');
                    $('.order-title').css('padding', '250px 30px 0').html('Спасибо за Ваш заказ!');
                } else {
                    alert('Возникла ошибка при оформлении заявки, мы свяжемся с вами в ближайшее время.');
                }
            });
    }

    $('input[required]').addClass('req');
})

$('#callSubmit').click(function () {
    let callName = $('#nameCall');
    let callPhone = $('#phoneCall');
    let hasError = false;

    $('.error-input').hide();

    if (!callName.val()) {
        callName.next().show();
        hasError = true;
    }
    if (!callPhone.val()) {
        callPhone.next().show();
        hasError = true;
    }

    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout ",
            data: {
                name: callName.val(),
                phone: callPhone.val(),
            },
        })
            .done(function (msg) {
                if (msg.success === 1) {
                    callName.fadeOut();
                    callPhone.fadeOut();
                    $('.call-order-text').fadeOut();
                    $('.order-btn').remove();
                    $('.call-order-title').html('Спасибо!Мы свяжемся с вами в ближайшее время!');
                } else {
                    alert('Возникла ошибка при оформлении заявки, мы свяжемся с вами в ближайшее время.');
                    $('.popup-call-form').trigger("reset");
                }
            });
    }

    $('input[required]').addClass('req');
})