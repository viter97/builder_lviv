$(document).ready(function () {
    'use strict';
    /** animation stopper on resize */
    document.body.classList.remove("resize-animation-stopper");
    let resizeTimer;
    window.addEventListener("resize", () => {
        document.body.classList.add("resize-animation-stopper");
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove("resize-animation-stopper");
        }, 400);
    });

    let header = $("header");
    let bodyOverlay = $(".body__overlay");
    let headerNav = $("#header-nav");
    let hamburger = $("#header-hamburger");


    /** hamburger menu*/
    hamburger.click(function (event) {
        headerNav.toggleClass("nav-bar--open");
        hamburger.toggleClass("hamburger--open");
        bodyOverlay.toggleClass("body__overlay--open");
        header.toggleClass("header--mobile-open");
    });
    bodyOverlay.click(function (event) {
        if (hamburger.hasClass("hamburger--open")) {
            headerNav.toggleClass("nav-bar--open");
            hamburger.toggleClass("hamburger--open");
            bodyOverlay.toggleClass("body__overlay--open");
            header.toggleClass("header--mobile-open");
        }
    });

    /** scroll animation */
    if (scroll > 0) {
        header.addClass("header--scrolled");
    } else {
        header.removeClass("header--scrolled");
    }

    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll > 0) {
            header.addClass("header--scrolled");
        } else {
            header.removeClass("header--scrolled");
        }
    });

    /** slider images changer*/
    $('.portfolio .swiper-slide').find('.slider__secondary-image').click(function () {
        let mainBg = $(this).parent().siblings('.slider__main-image').css('background-image');
        let secondaryBg = $(this).css('background-image');

        $(this).css('background-image', mainBg);
        $(this).parent().siblings('.slider__main-image').css('background-image', secondaryBg);
    });

    /** sliders*/
    const portfolioSwiper = new Swiper('.portfolio .swiper-container', {
        pagination: {
            el: '.portfolio .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.portfolio .swiper-button-next',
            prevEl: '.portfolio .swiper-button-prev',
        },
    });

    const reviewsSwiper = new Swiper('.reviews .swiper-container', {
        pagination: {
            el: '.reviews .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews .swiper-button-next',
            prevEl: '.reviews .swiper-button-prev',
        },
    });


    /** hamburger animation */
    /**
     * forEach implementation for Objects/NodeLists/Arrays, automatic type loops and context options
     *
     * @private
     * @author Todd Motto
     * @link https://github.com/toddmotto/foreach
     * @param {Array|Object|NodeList} collection - Collection of items to iterate, could be an Array, Object or NodeList
     * @callback requestCallback      callback   - Callback function for each iteration.
     * @param {Array|Object|NodeList} scope=null - Object/NodeList/Array that forEach is iterating over, to use as the this value when executing callback.
     * @returns {}
     */
    let forEach = function (t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t)) for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t); else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };

    let hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
            hamburger.addEventListener("click", function () {
                this.classList.toggle("is-active");
            }, false);
        });
    }


    /** scrollToTopBtn animation*/
    let scrollToTopBtn = document.querySelector(".scrollToTopBtn");
    let rootElement = document.documentElement;
    function handleScroll() {
        // Do something on scroll
        let scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
            // Show button
            scrollToTopBtn.classList.add("scrollToTopBtn--show")
        } else {
            // Hide button
            scrollToTopBtn.classList.remove("scrollToTopBtn--show")
        }
    }
    function scrollToTop() {
        // Scroll to top logic
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);

});

