/* swiper1 */
let mainSwiper = new Swiper('.swiper', {
    speed: 400,
    parallax: true,
    autoplay: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' - ' + '<span class="' + totalClass + '"></span>';
        }/* 로딩이 있음 처음부터 01/04로 변경이 안됨 */
    },
    
});
/* swiper2 */
let mainSwiper2 = new Swiper('#swiper2', {
    speed: 400,
    parallax:true,
    loop: true,
    // autoplay: true,
    freeMode: true,
    observer: true,	// 추가
    observeParents: true,	// 추가
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
});