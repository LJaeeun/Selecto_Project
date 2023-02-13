/* swiper 메인 */
let mainSwiper = new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        formatFractionCurrent: function (number) {
          return ("0" + number).slice(-2);
        },
        formatFractionTotal: function (number) {
          return ("0" + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
          return (
            '<span class="' +
            currentClass +
            '"></span>' +
            " / " +
            '<span class="' +
            totalClass +
            '"></span>'
          );
        }
      },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true
});

/* 모바일 메뉴 */
(function menubar() {
    /* 모바일 메뉴 바 클릭시 메뉴바 나오기 */
    let burgerMenuOpen = document.querySelector('.burger');
    let moMenu = document.querySelector('.mo_menu');
    let burgerMenuClose = document.querySelector('.closeBtn');
    let wrapperBlur = document.querySelector('#wrapper');
    
    burgerMenuOpen.addEventListener('click', () => {
        moMenu.classList.add('mo_menu_active');
        wrapperBlur.classList.add('bg_blur');
    });
    burgerMenuClose.addEventListener('click', () => {
        moMenu.classList.remove('mo_menu_active');
        wrapperBlur.classList.remove('bg_blur');
    });
   /* 모바일 메뉴 바 클릭시 메뉴바 나오기 */


   /* 모바일 메뉴 클릭시 소메뉴 나오기 */

    /* 1번째 메뉴 */
    let menuArrow1 = document.querySelector('#menuArrow1');
    let clickMenu1 = document.querySelector('#clickmenu1');
    let listMenu1 = document.querySelector('#listmenu1');
    /* 2번째 메뉴 */
    let menuArrow2 = document.querySelector('#menuArrow2');
    let clickMenu2 = document.querySelector('#clickmenu2');
    let listMenu2 = document.querySelector('#listmenu2');
    /* 3번째 메뉴 */
    let menuArrow3 = document.querySelector('#menuArrow3');
    let clickMenu3 = document.querySelector('#clickmenu3');
    let listMenu3 = document.querySelector('#listmenu3');
    /* 4번째 메뉴 */
    let menuArrow4 = document.querySelector('#menuArrow4');
    let clickMenu4 = document.querySelector('#clickmenu4');
    let listMenu4 = document.querySelector('#listmenu4');

    /* 1번째 메뉴 */
    menuArrow1.addEventListener('click', () => {
     clickMenu1.classList.toggle('clickmenu_active');
     listMenu1.classList.toggle('listmenu_active');
    })
    /* 2번째 메뉴 */
    menuArrow2.addEventListener('click', () => {
     clickMenu2.classList.toggle('clickmenu_active');
     listMenu2.classList.toggle('listmenu_active');
    })
    /* 3번째 메뉴 */
    menuArrow3.addEventListener('click', () => {
     clickMenu3.classList.toggle('clickmenu_active');
     listMenu3.classList.toggle('listmenu_active');
    })
    /* 4번째 메뉴 */
    menuArrow4.addEventListener('click', () => {
     clickMenu4.classList.toggle('clickmenu_active');
     listMenu4.classList.toggle('listmenu_active');
    })
    /* 모바일 메뉴 클릭시 소메뉴 나오기 */
    
})();

/*  */
(function scrollHeader() {
    let header = document.querySelector('#header');
    let prevScroll = scrollY;

    const srcolled = () => {
        // 스크롤 이벤트가 발생될 때만 스크롤된 값 반환
        let currentScroll = scrollY; 

        const headerHt = header.offsetHeight;
        prevScroll < currentScroll ? posTop(headerHt) : posTop(0);

        // 이전 스크롤 값에 현재 스크롤값 대입
        prevScroll = currentScroll;

    }
    function posTop(top) {
        header.style.top = `-${top}px`;
    }
    addEventListener('scroll', srcolled);
})();
