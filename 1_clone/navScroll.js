// 초기에 한 번만 해당 요소를 찾아 변수에 저장합니다.
var navbottom = document.getElementById("nav-bottom");
var navbottom_main = document.querySelectorAll(".nav-bottom-li-main");
var navTop = document.querySelector(".nav-top");
var navMiddle = document.querySelector(".nav-middle");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // 스크롤 위치를 한 번만 가져옵니다.
  var scrollPosition = window.pageYOffset;

  // navbottom의 위치를 한 번만 가져옵니다.
  var navbottomOffset = navbottom.offsetTop;

  if (scrollPosition > navbottomOffset) {
    navbottom.classList.add("fixed");

    // navbottom_main을 반복하는 대신 forEach를 사용하여 각 요소에 클래스를 추가합니다.
    navbottom_main.forEach(function (element) {
      element.classList.add("fixed");
    });
    navTop.classList.add("hide-on-scroll");
    navMiddle.classList.add("hide-on-scroll");
  } else {
    navbottom.classList.remove("fixed");

    // navbottom_main을 반복하는 대신 forEach를 사용하여 각 요소에 클래스를 제거합니다.
    navbottom_main.forEach(function (element) {
      element.classList.remove("fixed");
    });

    navTop.classList.remove("hide-on-scroll");
    navMiddle.classList.remove("hide-on-scroll");
  }
}
