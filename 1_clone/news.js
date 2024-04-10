function expandTitle(element) {
  // 모든 h4에서 clicked 클래스 제거
  var titles = document.querySelectorAll(".news-title h4");
  titles.forEach(function (title) {
    title.classList.remove("clicked");
  });

  // 클릭한 h4 요소에 clicked 클래스 추가하여 스타일을 변경
  element.querySelector("h4").classList.add("clicked");
}
