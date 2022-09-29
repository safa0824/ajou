$(document).ready(function () {
    "use strict";

    let pop_index = 0;
    $(".pop-open").on("click", function () {
        let popName = $(this).attr("data-call-popup");
        $(".popup[data-popup="+popName+"]").fadeIn().addClass("open");
        // swiper.update();
        // swiper2.update();
        // swiper3.update();
        // swiper4.update();
    });

    $(".popup-close").on("click", function () {        
        let popName = $(this).closest(".popup").attr("data-popup");
        $(this).closest(".popup").fadeOut();
        setTimeout(function(){$(".popup." + popName).removeClass('open')}, 300 )
    });

    $(".btn-favorite, .btn-heart").on("click", function () {
        $(this).toggleClass("on");
    });

    $("#datepicker").length ? $("#datepicker").datepicker({
        monthNames: [ "01","02","03","04","05","06",
        "07","08","09","10","11","12" ],
        monthNamesShort: [ "01","02","03","04","05","06",
        "07","08","09","10","11","12" ],
        dayNames: [ "S","M","T","W","T","F","S" ],
        dayNamesShort: [ "S","M","T","W","T","F","S" ],
        dayNamesMin: [ "S","M","T","W","T","F","S" ],
    }) : '';

    $(".search-result-wrap").on("click", "li", function(){
        $(this).addClass('active').siblings().removeClass('active');
    });

    $(window).on("scroll", headerAni());
    $(window).on("scroll", function () {
        if ( $(".header-bg-check").length && $(this).scrollTop() >= Math.ceil($(".header-bg-check").offset().top) - 62) {
            $(".header").addClass("header-white");
        } else {
            $(".header").removeClass("header-white");
        }
    });

    const swiper = new Swiper(".main-slider-wrap", {
        loop: true,
        autoplay: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


	let langList = document.querySelector('.lang-list .swiper-wrapper');
	let veganList = document.querySelector('.vegan-list .swiper-wrapper');
	let countryList = document.querySelector('.country-list .swiper-wrapper');
	let hourList = document.querySelector('.hour-list .swiper-wrapper');
	let minuteList = document.querySelector('.minute-list .swiper-wrapper');

    let selectLang = '';
    let selectVegan = '';
    let selectCountry = '';
    let selectHour = '';
    let selectMinute = '';
    let selectMA = '';

    if ( langList ){
        const langArray = [
            'English', 'Korean', '中国人', '日本語', 'español', 'Русский'
        ]
        for(let i = 0; i<langArray.length; i++){
            let listHtml = `<div class="swiper-slide">${langArray[i]}</div> `
            langList.innerHTML += listHtml
        }

        const swiper2 = new Swiper(".lang-list", {
            direction: 'vertical',
            loop: false,
            slidesPerView : 5,
            centeredSlides : true,
            slideToClickedSlide : true,
            cssMode : true,
            on : {
                activeIndexChange : function(){
                    selectLang = this.slides[this.activeIndex].outerText
                    console.log(selectLang)
                }
            }
        });
    }
    
    if ( veganList ){
        const veganArray = [
            'Vegan', 'Lacto', 'Ovo', 'Lacto Ovo', 'Pollo', 'Pesco'
        ]
        for(let i = 0; i<veganArray.length; i++){
            let listHtml = `<div class="swiper-slide">${veganArray[i]}</div> `

            veganList.innerHTML += listHtml
        }
        const swiper3 = new Swiper(".vegan-list", {
            direction: 'vertical',
            loop: false,
            slidesPerView : 5,
            centeredSlides : true,
            slideToClickedSlide : true,
            cssMode : true,
            on : {
                activeIndexChange : function(){
                    selectVegan = this.slides[this.activeIndex].outerText
                    console.log(selectVegan)
                }
            }
        });
    }
    
    if ( countryList ){
        const countryArray = [
            'United States of America', 'Republic of Korea', 'China', 'Japan', 'United Kingdom', 'France','Germany', 'Italy', 'Taiwan', 'Phileppines'
        ]
        for(let i = 0; i<countryArray.length; i++){
            let listHtml = `<div class="swiper-slide">${countryArray[i]}</div> `

            countryList.innerHTML += listHtml
        }
        const swiper4 = new Swiper(".country-list", {
            direction: 'vertical',
            loop: false,
            slidesPerView : 5,
            centeredSlides : true,
            slideToClickedSlide : true,
            cssMode : true,
            on : {
                activeIndexChange : function(){
                    selectConuntry = this.slides[this.activeIndex].outerText
                    console.log(selectCountry)
                }
            }
        });
    }

    if ( hourList ){
        for(let i = 1; i< 13; i++){
            let listHtml = `<div class="swiper-slide">${i}</div> `
            hourList.innerHTML += listHtml
        }
        for(let i = 0; i< 60; i++){
            let listHtml = `<div class="swiper-slide">${i}</div> `
            minuteList.innerHTML += listHtml
        }
        const swiper6 = new Swiper(".hour-list", {
            direction: 'vertical',
            loop: false,
            slidesPerView : 3,
            centeredSlides : true,
            slideToClickedSlide : true,
            cssMode : true,
            on : {
                activeIndexChange : function(){
                    selectHour = this.slides[this.activeIndex].outerText
                    console.log(selectHour)
                }
            }
        });
        const swiper7 = new Swiper(".minute-list", {
            direction: 'vertical',
            loop: false,
            slidesPerView : 3,
            centeredSlides : true,
            slideToClickedSlide : true,
            cssMode : true,
            on : {
                activeIndexChange : function(){
                    selectMinute = this.slides[this.activeIndex].outerText
                    console.log(selectMinute)
                }
            }
        });
        const swiper8 = new Swiper(".am-list", {
            direction: 'vertical',
            loop: false,
            slidesPerView : 3,
            centeredSlides : true,
            slideToClickedSlide : true,
            cssMode : true,
            on : {
                activeIndexChange : function(){
                    selectMA = this.slides[this.activeIndex].outerText
                    console.log(selectMA)
                }
            }
        });
    }
    
});

var headerAni = function(){
	var didScroll;
	var lastScrollTop = 0;
	var delta = -1;
	var navbarHeight = $('.header').outerHeight();

	$(window).on('scroll', function(event){
		didScroll = true;
	});

	setInterval(function(){
		if (didScroll) {
			hasScrolled();
			didScroll = false;
		}
	}, 100);

	function hasScrolled(){
		var st = $(this).scrollTop();
		if (Math.abs(lastScrollTop - st) <= delta)
			return;
		if (st > lastScrollTop && st > navbarHeight) {
			$('.header').removeClass('header_dw').addClass('header_up');
			$('.header.fixed').removeClass('header_up').addClass('header_dw'); 

		} else {
			if (st + $(window).height() < $(document).height()) {
				$('.header').removeClass('header_up').addClass('header_dw');
			}
		}
		if (st == 0 || st == $(document).height() - $(window).height()) {
			$('.header').removeClass('header_up, header_dw');
		}
		//$(".list_float").text("last:" + lastScrollTop + " , st:" + st + ", " );
		lastScrollTop = st;
	}
}