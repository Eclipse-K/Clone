document.addEventListener("DOMContentLoaded", function () {
  var navBottomLiItems = document.querySelectorAll(".nav-bottom-li");

  // 각 .nav-bottom-li 요소에 이벤트 리스너 추가
  navBottomLiItems.forEach(function (navBottomLi) {
    navBottomLi.addEventListener("mouseenter", function () {
      // 호버됐을 때 .on 클래스 추가
      this.classList.add("on");
    });

    navBottomLi.addEventListener("mouseleave", function () {
      // 호버가 해제됐을 때 .on 클래스 제거
      this.classList.remove("on");
    });

    // 드롭다운 메뉴에 이벤트 리스너 추가 (있는 경우에만)
    var dropdown = navBottomLi.querySelector(".dropdown");
    if (dropdown) {
      dropdown.addEventListener("mouseenter", function () {
        navBottomLi.classList.add("on");
      });

      dropdown.addEventListener("mouseleave", function () {
        navBottomLi.classList.remove("on");
      });
    }
  });
});
