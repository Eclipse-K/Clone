function showContent(tabId) {
  // 모든 컨텐츠 숨김
  var contents = document.getElementsByClassName("content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }

  // 클릭한 탭에 해당하는 컨텐츠 보여줌
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.style.display = "block";
  }
}
