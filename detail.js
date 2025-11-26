// 상세보기(토글) 구현 Script
document.querySelectorAll(".toggle-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const detail = this.nextElementSibling;
    detail.classList.toggle("open");
    this.textContent = detail.classList.contains("open") ? "닫기" : "상세보기";
  });

  // 키보드 접근(Enter)
  btn.parentElement.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
      btn.click();
    }
  });
});
