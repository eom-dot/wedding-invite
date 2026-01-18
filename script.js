const intro = document.getElementById("intro");
const content = document.getElementById("content");
const skipBtn = document.getElementById("skipBtn");
const video = document.getElementById("introVideo");

let done = false;

function showContent() {
  if (done) return;
  done = true;

  // 인트로 숨기기
  if (intro) intro.style.display = "none";

  // 본문 보이기
  if (content) {
    content.classList.remove("hidden");
    content.style.display = "block";
  }
}

// ✅ 스킵 버튼은 무조건 동작해야 함
if (skipBtn) {
  skipBtn.addEventListener("click", showContent);
}

// ✅ 영상이 있을 때만 ended 이벤트 연결
if (video) {
  video.addEventListener("ended", showContent);
}
