let main = (function () {
    let handleMenuResponsive = function () {
        function close_menu() {
            $(".main-menu,.overlay-menu").removeClass("active");
            $(".hamburger").removeClass("is-active").addClass("unactive");
            // $("body").removeClass("overflow-hidden");
        }

        $(document).on("click", ".hamburger.unactive", function () {
            $(".main-menu,.overlay-menu").addClass("active");
            $(".hamburger").removeClass("unactive").addClass("is-active");
            // $("body").addClass("overflow-hidden");
            return false;
        });
        $(document).on(
            "click",
            ".hamburger.is-active,.bg-layer,.overlay-menu",
            function () {
                close_menu();
                return false;
            }
        );
        $(".main-menu a").on("click", function () {
            close_menu();
        })
        // document.getElementsByClassName('bg-layer')[0].addEventListener('click', () => {
        //     close_menu();
        // });
        // document.getElementsByClassName('overlay-menu')[0].addEventListener('click', () => {
        //     close_menu();
        // });
    };

    let heroSectionHeight = function () {
        let headerHeight = $("#header").height();
        $(".hero-section .container  > .row").css({minHeight: "calc(100vh - " + headerHeight + 'px - 0.7rem - 0.7rem' + ")"})
    }

    let homeVedio = function () {
        let $videoSrc;
        $('.video-btn').on('click',function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function () {

            $("#video").attr('src', "https://www.youtube.com/embed/" + $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function () {
            $("#video").attr('src', $videoSrc);
        })
    }

    let goUp = function () {
        window.onscroll = function () {
            scrollFunction()
        };

        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                // document.getElementById("goUp").style.display = "block";
                $("#goUp").fadeIn(500)
            } else {
                // document.getElementById("goUp").style.display = "none";
                $("#goUp").fadeOut(500)
            }

        }

// When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            $('html, body').delay(0).animate({scrollTop: 0}, {duration: 800});
        }

        $("#goUp").on("click", function () {
            topFunction()
        })
    }

// other way
    $(document).on('keyup change', '.fileuplaod', function () {
        var inputClick = $(this);
        if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                inputClick.closest('.upload-img').find('.img-preview').attr('src', e.target.result);
                inputClick.closest('.upload-img').addClass('uploded');
            };

            reader.readAsDataURL(this.files[0]);
        }
    })
    $("#image_file").change(function () {
        var fileExtension = ['png', 'svg'];
        if ($.inArray($(this).val().split('.').pop().toLowerCase(), fileExtension) === -1) {
            $(this).val('');
            $(this).next().html('');

        } else {
            var file = $(this)[0].files[0]
            $(this).next().html('<span class="me-2"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">\n' +
                '  <g id="Group_14061" data-name="Group 14061" transform="translate(-695.127 -62.586)">\n' +
                '    <circle id="Ellipse_405" data-name="Ellipse 405" cx="9.5" cy="9.5" r="9.5" transform="translate(695.127 62.586)" fill="#41bcd0"/>\n' +
                '    <path id="Path_14104" data-name="Path 14104" d="M700.6,72.086l2.592,2.592,5.738-5.738" fill="none" stroke="#fff" stroke-width="1.5"/>\n' +
                '  </g>\n' +
                '</svg>\n</span>' + file.name);
        }

    });
//tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    let swiperStrategySlider = function () {
        var swiper = new Swiper("#strategy_slider", {
            slidesPerView: 1,
            spaceBetween: 12,
            navigation: {
                // clickable: true,
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            breakpoints: {
                400: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
    }


    let planSwiper = function () {
        var swiper = new Swiper("#plan_slider", {
            slidesPerView: 2,
            spaceBetween: 0,
            loop: true,
            navigation: {
                // clickable: true,
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
            },
            breakpoints: {
                400: {
                    slidesPerView: 2,
                },
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
                1300: {
                    slidesPerView: 5,
                },
            },
        });
    }
    let fixedHeaderOnScroll = function () {
        $(window).scroll(function () {
            let sticky = $("#header"),
                scroll = $(window).scrollTop(),
                body = $("body");

            if (scroll >= 300) {
                sticky.addClass("fixed");
                body.addClass("header-is-fixed");
                if ($('.pages-header').length) {
                    body.addClass("pages-header-fixed");
                }
            } else {
                sticky.removeClass("fixed");
                body.removeClass("header-is-fixed");
                if ($('.pages-header').length) {
                    body.removeClass("pages-header-fixed");
                }
            }
        });
    };
    let fixedHeaderOnScroll2 = function () {
        $(window).scroll(function () {
            let sticky = $(".header-top"),
                scroll = $(window).scrollTop(),
                body = $("body");

            if (scroll >= 300) {
                sticky.addClass("fixed");
                body.addClass("header-is-fixed");
                if ($('.pages-header').length) {
                    body.addClass("pages-header-fixed");
                }
            } else {
                sticky.removeClass("fixed");
                body.removeClass("header-is-fixed");
                if ($('.pages-header').length) {
                    body.removeClass("pages-header-fixed");
                }
            }
        });
    };
    let bootstrapSelectValidation = function () {
        $("form").parsley({
            triggerAfterFailure: 'focusout changed.bs.select'
        })
    }

    let showPassword = function () {
        $(".password-toggle").on("change", function () {
            let passwordInput = $(this).parent().find("input.password-input");
            if ($(this).is(':checked')) {
                passwordInput.attr("type", "text");
            } else {
                passwordInput.attr("type", "password");
            }
        })
    }

    let tit_width = function () {
        //بلقن الأعلام خليها
        let phoneInput = $('.iti--allow-dropdown');
        let phoneNumberDrop = $(".iti__country-list")
        let phoneInputWidth = phoneInput.width();
        phoneNumberDrop.css('width', phoneInputWidth + 'px')
        $(window).on('resize', function () {
            let phoneInputWidth = phoneInput.width();
            phoneNumberDrop.css('width', phoneInputWidth + 'px');
        });
    };

    let scrollDown = function () {
        const navbar = document.querySelector('#header .main-menu');
        const scrollspy = VanillaScrollspy(navbar);
        scrollspy.init();
    }

    let addTeamCollapse = function () {
        var myCollapse = document.getElementById('collapseAddTeam')
        var bsCollapse = new bootstrap.Collapse(myCollapse, {
            toggle: false
        })
        $("#addTeamCheck").on("change", function () {
            if ($(this).is(":checked")) {
                bsCollapse.show()
            } else {
                bsCollapse.hide()
            }
        })
    }
    let fileStorageCollapse = function () {
        var myCollapse2 = document.getElementById('collapseFileStorage')
        var bsCollapse2 = new bootstrap.Collapse(myCollapse2, {
            toggle: false
        })
        $("#fileStorageCheck").on("change", function () {
            if ($(this).is(":checked")) {
                bsCollapse2.show()
            } else {
                bsCollapse2.hide()
            }
        })
    }

    let singleDate = function () {
        $('.single-date').daterangepicker({
            singleDatePicker: true,
            showDropdowns: true,
            minYear: 2000,
            locale: {
                cancelLabel: 'Clear'
            },
            autoUpdateInput: false,
            autoApply: true,
            // maxYear: parseInt(moment().format('YYYY'),10),
            opens: "left"
        });
        $('.single-date').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY'));
        });

        $('.single-date').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
    }
    let multiDate = function (){

        $('.multi-date').daterangepicker({
            showDropdowns: true,
            minYear: 2000,
            locale: {
                cancelLabel: 'Clear'
            },
            autoUpdateInput: false,
            autoApply: true,
            // maxYear: parseInt(moment().format('YYYY'),10),
            opens: "left"
        });
        $('.multi-date').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY')+ ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        $('.multi-date').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
    }
    let stagesSlider = function () {
        var swiper = new Swiper("#stages_slider", {
            slidesPerView: "auto",
            spaceBetween: 15,
            freeMode: true,
        });
    }
    $(document).on('click' , '.edit-and-show' ,function(e){
        e.preventDefault();
        // $(this).toggleClass('show-it');
        $(this).find('.edit-span').toggleClass('d-none');
        $(this).find('.cancel-span').toggleClass('d-none');
        $('.after-edit').toggleClass('d-none');
    });
    $(document).on('click', '#icon-more , .bc-trans', function () {
        $('.card-list-left').toggleClass('active');
        $('.bc-trans').toggleClass('hide');
    });
    return {
        init: function () {

            if ($("#stages_slider").length) {
                stagesSlider();
            }
            if ($(".multi-date").length) {
                multiDate();
            }
            if ($(".single-date").length) {
                singleDate();
            }
            if ($("#collapseAddTeam").length) {
                addTeamCollapse();
            }
            if ($("#collapseFileStorage").length) {
                fileStorageCollapse();
            }
            if ($("#header .main-menu").length) {
                scrollDown()
            }
            if($(".header-top").length){
                fixedHeaderOnScroll2()
            }
            if ($("#plan_slider").length) {
                planSwiper();
            }
            if ($("#header").length) {
                fixedHeaderOnScroll();
            }
            if ($(".password-toggle").length) {
                showPassword();
            }
            if ($(".selectpicker").length) {
                bootstrapSelectValidation()
            }
            if ($(".tit-input").length) {
                tit_width();
            }

            if ($("#goUp").length) {
                goUp();
            }

            if ($(".main-menu").length) {
                handleMenuResponsive()
            }
            if ($(".hero-section").length) {
                heroSectionHeight();
                $(window).resize(function () {
                    heroSectionHeight();
                });
            }
            if ($("#videoModal").length) {
                homeVedio()
            }
            if ($("#strategy_slider").length) {
                swiperStrategySlider()
            }

        },
    };
})();

$(function() {
    main.init();
});
