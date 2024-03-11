var activeTabId = "eventsTab";

function showContent(tabId) {
  // 현재 활성화된 탭의 스타일 초기화
  document.getElementById(activeTabId).classList.remove("active");
  document.getElementById(activeTabId).style.fontWeight = "normal";
  document.getElementById(activeTabId).style.textDecoration = "none";

  // 현재 활성화된 탭의 컨텐츠 숨김
  var activeContent = document.getElementById(activeTabId + "-content");
  if (activeContent) {
    activeContent.style.display = "none";
  }

  // 클릭한 탭에 해당하는 컨텐츠 보여주고 스타일 변경
  var selectedTab = document.getElementById(tabId);
  if (selectedTab) {
    selectedTab.classList.add("active");
    selectedTab.style.fontWeight = "bold";
    selectedTab.style.textDecoration = "underline";

    var selectedContent = document.getElementById(tabId + "-content");
    if (selectedContent) {
      selectedContent.style.display = "block";
    }

    // 활성화된 탭 업데이트
    activeTabId = tabId;
  }
}
