const video = document.getElementById("introVideo");
const intro = document.getElementById("intro");
const content = document.getElementById("content");
const skipBtn = document.getElementById("skipBtn");

let done = false;

function showContent() {
  if (done) return;
  done = true;

  // 영상 멈추고, 인트로 fade-out
  try { video.pause(); } catch(e) {}
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    content.classList.remove("hidden");
    content.classList.add("fade-in");
  }, 700);
}

// 영상 끝나면 자동 전환
video.addEventListener("ended", showContent);

// 건너뛰기 버튼
skipBtn.addEventListener("click", showContent);

showContent(); // 영상 없이 바로 본문 보이게
