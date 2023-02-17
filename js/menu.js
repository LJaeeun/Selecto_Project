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

/* 커서 */
(function cursorCustomer() {
    const doc = document.documentElement;
    const cursor = document.querySelector('.cursor');
    let posX = 0;
    let posY = 0;
  
    document.addEventListener('mousemove', (e) => {
      posX = e.pageX + 'px';
      posY = e.pageY + 'px';
  
      cursor.style.top = posY;
      cursor.style.left = posX;
    });
  
})();

/* scrollHeader 위로 스크롤시 헤더보임 */
(function scrollHeader() {
    let header = document.querySelector('#header');
    let prevScroll = window.scrollY;
  
    const srcolled = () => {
        // 스크롤 이벤트가 발생될 때만 스크롤된 값 반환
        let currentScroll = window.scrollY; 

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

/* totop 버튼 클릭시 부드럽게 최상위로 스크롤 */
(function toTopBtn() {
    let toTop = document.querySelector('.toTop');
  
    toTop.addEventListener('click', () => {
      window.scrollTo({
        top:0,
        behavior: 'smooth',
      });
    });
})();

/* 클릭시 팝업창 뜸(개인정보취급방침) */
(function privacyPop() {
    let privacyPopUp = document.querySelector('#privacyPopUp');
    let privacyBtn = document.querySelector('.privacy_btn');
    let privacyCloseBtn = document.querySelector('.privacy_closeBtn');
    let bodyPopup = document.querySelector('body');
    let htmlPopup = document.querySelector('html');
    let headermenu = document.querySelector('#header');
    
    privacyBtn.addEventListener('click', () => {
      privacyPopUp.classList.remove('displayNone');
      htmlPopup.classList.add('popupOpen');
      headermenu.classList.add('scrollMenu');
    });
    privacyCloseBtn.addEventListener('click', () => {
      privacyPopUp.classList.add('displayNone');
      htmlPopup.classList.remove('popupOpen');
      headermenu.classList.remove('scrollMenu');
    });
})();

/* pc 메뉴 오버시 */
(function pcMenu() {
    let menu = document.querySelector('.menu');
    let menuPc = document.querySelector('.menuPcHidden');
    let main = document.querySelector('main');
    let btnLink = document.querySelector('.btn_link a');
  
    menu.addEventListener('mouseover', () => {
      menuPc.classList.add('menuOver');
      btnLink.classList.add('linkBtnOver');
    })
    main.addEventListener('mouseover', () => {
      menuPc.classList.remove('menuOver');
      btnLink.classList.remove('linkBtnOver');
    })
})();


