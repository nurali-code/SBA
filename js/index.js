$(function () {
    $('.ratingToggle').on('click', function () {
        $('.rating-modal').fadeIn(300);
        $('#magnifying-glass').croppie({
            enableExif: true,
            viewport: {
                width: 120,
                height: 120,
                type: 'circle',
            },
            boundary: {
                width: 200,
                height: 200,
            },
            circle: true,
            showZoomer: false
        });
    });

    $('.rating-modal__close').on('click', function () {
        $('.rating-modal').fadeOut(100);
        $('#magnifying-glass').croppie('destroy');
    });

    $('#myfile').on('change', function () {
        var input = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#magnifying-glass').croppie('bind', {
                    url: e.target.result
                });
            };

            reader.readAsDataURL(input.files[0]);
        }
    });

    if ($('div').hasClass('scroll') && $(window).width() >= '999') {
        $('.scroll>').getNiceScroll().resize();
        $('.scroll').niceScroll({
            touchbehavior: true,
            grabcursorenabled: true,
            emulatetouch: true,
            touchbehavior: true,
        });
    }
    var reviewsBlocks = $('.reviews-block');
    $('#reviews-scroll').scroll(function () {
        var scrollX = $(this).scrollLeft();
        reviewsBlocks.each(function () {
            var reviewsBlock = $(this);
            var blockOffsetX = reviewsBlock.offset().left;
            if (blockOffsetX < scrollX + 600) { reviewsBlock.addClass('active'); }
            else { reviewsBlock.removeClass('active'); }
        });
    });
    $('.modal-question__close').on('click', function () {
        $('.modal-question').addClass('off');
    });
    $('.fix-question').on('click', function () {
        $('.modal-question').removeClass('off');
    });
    $('#myForm').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            name: {
                required: true,
            },
            message: {
                required: true,
            },
        },
        messages: {
            email: {
                required: 'Поле не заполнено или заполнено не верно',
                email: 'Поле не заполнено или заполнено не верно',
            },
            name: {
                required: 'Поле не заполнено или заполнено не верно',
            },
            message: {
                required: 'Поле не заполнено или заполнено не верно',
            },
        },
        submitHandler: function () {
            alert('Валидация успешна!');
        },
    });
    $('#registerForm').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
            name: {
                required: true,
            },
            phone: {
                required: true,
                checkMask: true,
            },
        },
        messages: {
            email: {
                required: 'Поле не заполнено или заполнено не верно',
                email: 'Поле не заполнено или заполнено не верно',
            },
            name: {
                required: 'Поле не заполнено или заполнено не верно',
            },
            phone: {
                required: 'Поле не заполнено или заполнено не верно',
                checkMask: 'Введите полный номер телефона',
            },
        },
        submitHandler: function () {
            alert('Валидация успешна!');
        },
    });
    function windowSize() {
        if ($(window).width() >= '999') {
            $('.tab-1').hover(function () {
                $('.tab').addClass('tab-none');
                $('#tab-1').removeClass('tab-none');
                $('.tab-content').removeClass('tab-hover');
                $(this).addClass('tab-hover');
            });
            $('.tab-2').hover(function () {
                $('.tab').addClass('tab-none');
                $('#tab-2').removeClass('tab-none');
                $('.tab-content').removeClass('tab-hover');
                $(this).addClass('tab-hover');
            });
            $('.tab-3').hover(function () {
                $('.tab').addClass('tab-none');
                $('#tab-3').removeClass('tab-none');
                $('.tab-content').removeClass('tab-hover');
                $(this).addClass('tab-hover');
            });
        } else {
            $('.tab-1').on('click', function () {
                $('.tab').addClass('tab-none');
                $('#tab-1').removeClass('tab-none');
                $('.tab-content').removeClass('tab-hover');
                $(this).addClass('tab-hover');
            });
            $('.tab-2').on('click', function () {
                $('.tab').addClass('tab-none');
                $('#tab-2').removeClass('tab-none');
                $('.tab-content').removeClass('tab-hover');
                $(this).addClass('tab-hover');
            });
            $('.tab-3').on('click', function () {
                $('.tab').addClass('tab-none');
                $('#tab-3').removeClass('tab-none');
                $('.tab-content').removeClass('tab-hover');
                $(this).addClass('tab-hover');
            });
        }
    }
    $(window).on('load resize', windowSize);

    $('.programs-block').on('click', function () {
        $('.programs-block-active').slideUp();
        if ($(this).hasClass('active')) {
            $('.programs-button, .programs-block').removeClass('active');
        } else {
            $('.programs-button, .programs-block').removeClass('active');
            $(this)
                .addClass('active')
                .find('.programs-row')
                .find('.programs-button')
                .addClass('active');
            $(this).find('.programs-block-active').slideDown();
        }
    })

    $('#register-phone').inputmask('+9 (999) 999-99-99');





});
