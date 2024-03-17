const tabLinks = document.querySelectorAll(".tab-link");
const tabContents = document.querySelectorAll(".mall-content");

tabLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    // 클릭한 탭의 데이터 속성 값 가져오기
    const tabId = link.getAttribute("data-tab");

    // 모든 탭 링크 비활성화
    tabLinks.forEach((tab) => tab.classList.remove("active"));
    // 모든 콘텐츠 비활성화
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // 클릭한 탭 활성화 및 해당 콘텐츠 표시
    link.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});
