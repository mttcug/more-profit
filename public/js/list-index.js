(function () {

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay: 2000,

        // 如果需要分页器
        pagination: '.swiper-pagination'
    });

    $(".nav-ul-li").eq(0).addClass('selected');

})();