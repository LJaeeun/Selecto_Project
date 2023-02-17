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

/* menuButtom 클릭이벤트 */
(function menuButtom() {
  /* 
    listButton_click
    checked
    displayNone
  */
  /* title */
  let signature = document.querySelector('#signature');
  let beverage = document.querySelector('#beverage');
  let coffee = document.querySelector('#coffee');
  let cookie = document.querySelector('#cookie');
  /* bg */
  let bg1 = document.querySelector('.bg1');
  let bg2 = document.querySelector('.bg2');
  let bg3 = document.querySelector('.bg3');
  let bg4 = document.querySelector('.bg4');
  /* subtitle */
  let text1 = document.querySelector('.text1');
  let text2 = document.querySelector('.text2');
  let text3 = document.querySelector('.text3');
  let text4 = document.querySelector('.text4');
  /* img */
  let imgbox1 = document.querySelector('#imgbox1');
  let imgbox2 = document.querySelector('#imgbox2');
  let imgbox3 = document.querySelector('#imgbox3');
  let imgbox4 = document.querySelector('#imgbox4');
  /* totting */
  let topping1 = document.querySelector('#topping1');
  let topping2 = document.querySelector('#topping2');
  let topping3 = document.querySelector('#topping3');
  let topping4 = document.querySelector('#topping4');
  /* 가운데 img */
  let centerImg1 = document.querySelector('#centerImg1');
  let centerImg2 = document.querySelector('#centerImg2');
  let centerImg3 = document.querySelector('#centerImg3');
  let centerImg4 = document.querySelector('#centerImg4');

  signature.addEventListener('click', () => {
    /* zindex 성공 */
    bg4.style.zIndex = '1';
    bg3.style.zIndex = '0';
    bg1.style.zIndex = '2';
    bg2.style.zIndex = '0';
    /* bg */
    bg4.classList.remove('checked');
    bg3.classList.remove('checked');
    bg2.classList.remove('checked');
    bg1.classList.add('checked');
    /* title */
    beverage.classList.remove('listButton_click');
    cookie.classList.remove('listButton_click');
    coffee.classList.remove('listButton_click');
    signature.classList.add('listButton_click');
    /* subtitle */
    text4.classList.add('displayNone');
    text3.classList.add('displayNone');
    text2.classList.add('displayNone');
    text1.classList.remove('displayNone');
    /* img */
    imgbox4.classList.add('displayNone');
    imgbox3.classList.add('displayNone');
    imgbox2.classList.add('displayNone');
    imgbox1.classList.remove('displayNone');
    /* totting */
    topping4.classList.add('displayNone');
    topping3.classList.add('displayNone');
    topping2.classList.add('displayNone');
    topping1.classList.remove('displayNone');
    /* centerImg */
    centerImg2.classList.add('displayNone');
    centerImg3.classList.add('displayNone');
    centerImg4.classList.add('displayNone');
    centerImg1.classList.remove('displayNone');
  });
  beverage.addEventListener('click', () => {
    /* zindex 성공 */
    bg4.style.zIndex = '0';
    bg3.style.zIndex = '0';
    bg1.style.zIndex = '1';
    bg2.style.zIndex = '2';
    /* bg */
    bg1.classList.remove('checked');
    bg4.classList.remove('checked');
    bg3.classList.remove('checked');
    bg2.classList.add('checked');
    /* title */
    cookie.classList.remove('listButton_click');
    coffee.classList.remove('listButton_click');
    signature.classList.remove('listButton_click');
    beverage.classList.add('listButton_click');
    /* subtitle */
    text1.classList.add('displayNone');
    text3.classList.add('displayNone');
    text4.classList.add('displayNone');
    text2.classList.remove('displayNone');
    /* img */
    imgbox4.classList.add('displayNone');
    imgbox3.classList.add('displayNone');
    imgbox1.classList.add('displayNone');
    imgbox2.classList.remove('displayNone');
    /* totting */
    topping4.classList.add('displayNone');
    topping3.classList.add('displayNone');
    topping1.classList.add('displayNone');
    topping2.classList.remove('displayNone');
    /* centerImg */
    centerImg4.classList.add('displayNone');
    centerImg3.classList.add('displayNone');
    centerImg1.classList.add('displayNone');
    centerImg2.classList.remove('displayNone');
  });
  coffee.addEventListener('click', () => {
    /* zindex 성공 */
    bg4.style.zIndex = '0';
    bg3.style.zIndex = '2';
    bg1.style.zIndex = '0';
    bg2.style.zIndex = '1';
    /* bg */   
    bg2.classList.remove('checked');
    bg4.classList.remove('checked');
    bg1.classList.remove('checked');
    bg3.classList.add('checked');
    /* title */
    beverage.classList.remove('listButton_click');
    cookie.classList.remove('listButton_click');
    signature.classList.remove('listButton_click');
    coffee.classList.add('listButton_click');
    /* subtitle */
    text1.classList.add('displayNone');
    text2.classList.add('displayNone');
    text4.classList.add('displayNone');
    text3.classList.remove('displayNone');
    /* img */
    imgbox4.classList.add('displayNone');
    imgbox2.classList.add('displayNone');
    imgbox1.classList.add('displayNone');
    imgbox3.classList.remove('displayNone');
    /* totting */
    topping4.classList.add('displayNone');
    topping2.classList.add('displayNone');
    topping1.classList.add('displayNone');
    topping3.classList.remove('displayNone');
    /* centerImg */
    centerImg4.classList.add('displayNone');
    centerImg2.classList.add('displayNone');
    centerImg1.classList.add('displayNone');
    centerImg3.classList.remove('displayNone');
  });
  cookie.addEventListener('click', () => {
    /* zindex 성공 */
    bg4.style.zIndex = '2';
    bg3.style.zIndex = '1';
    bg1.style.zIndex = '0';
    bg2.style.zIndex = '0';
    /* bg */ 
    bg3.classList.remove('checked');
    bg2.classList.remove('checked');
    bg1.classList.remove('checked');
    bg4.classList.add('checked');
    /* title */
    coffee.classList.remove('listButton_click');
    beverage.classList.remove('listButton_click');
    signature.classList.remove('listButton_click');
    cookie.classList.add('listButton_click');
    /* subtitle */
    text1.classList.add('displayNone');
    text2.classList.add('displayNone');
    text3.classList.add('displayNone');
    text4.classList.remove('displayNone');
    /* img */
    imgbox1.classList.add('displayNone');
    imgbox2.classList.add('displayNone');
    imgbox3.classList.add('displayNone');
    imgbox4.classList.remove('displayNone');
    /* totting */
    topping1.classList.add('displayNone');
    topping2.classList.add('displayNone');
    topping3.classList.add('displayNone');
    topping4.classList.remove('displayNone');
    /* centerImg */
    centerImg3.classList.add('displayNone');
    centerImg2.classList.add('displayNone');
    centerImg1.classList.add('displayNone');
    centerImg4.classList.remove('displayNone');
  });


})();

/* 카운트 업 */
(function numberCount() {

  let timer;

  document.addEventListener("scroll", () => {
    let value = this.scrollY;
    let section4offsetTop = document.querySelector(".main4_wrap").offsetTop;

    if (value >= section4offsetTop) {
      if (!timer) {
        timer = setTimeout(() => {
          timer = true;
          new numberCounter("count", $("#numCount").val());
        }, 1);
      }
    }
  });

  function numberCounter(target_frame, target_number) {
    this.count = 0;
    this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
  }
  numberCounter.prototype.counter = function () {
    var self = this;
    this.diff = this.target_count - this.count;
  
    if (this.diff > 0) {
      self.count += Math.ceil(this.diff / 5);
    }
  
    this.target_frame.innerHTML = this.count
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    if (this.count < this.target_count) {
      this.timer = setTimeout(function () {
        self.counter();
      }, 30);
    } else {
      clearTimeout(this.timer);
    }
  };
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

/* news 마우스 오버시 이미지 */
(function newsOver() {
  let newsOver1 = document.querySelector('#newsOver1');
  let newsOver2 = document.querySelector('#newsOver2');
  let newsOver3 = document.querySelector('#newsOver3');

  let newsImg1 = document.querySelector('#newsImg1 img');
  let newsImg2 = document.querySelector('#newsImg2 img');
  let newsImg3 = document.querySelector('#newsImg3 img');

  newsOver1.addEventListener('mouseover', () => {
    newsImg1.style.opacity = '1';
  })
  newsOver1.addEventListener('mouseout', () => {
    newsImg1.style.opacity = '0';
  })

  newsOver2.addEventListener('mouseover', () => {
    newsImg2.style.opacity = '1';
  })
  newsOver2.addEventListener('mouseout', () => {
    newsImg2.style.opacity = '0';
  })

  newsOver3.addEventListener('mouseover', () => {
    newsImg3.style.opacity = '1';
  })
  newsOver3.addEventListener('mouseout', () => {
    newsImg3.style.opacity = '0';
  })

})();
