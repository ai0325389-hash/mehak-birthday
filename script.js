let poppedCount = 0;
let isPlaying = false;

// 📸 Direct Image Links
const photos = [
  {
    url: "https://cdn.jsdelivr.net/gh/ai0325389-hash/mehak-birth@main/IMG_001.jpg",
    caption: "Har din tumhare saath haseen hai ❤️"
  },
  {
    url: "https://cdn.jsdelivr.net/gh/ai0325389-hash/mehak-birth@main/IMG_002.jpg",
    caption: "Tum meri zindagi ki sabse khoobsurat dua ho 🤲"
  },
  {
    url: "https://cdn.jsdelivr.net/gh/ai0325389-hash/mehak-birth@main/IMG_003.jpg",
    caption: "Forever & Always With You 💕"
  },
  {
    url: "https://cdn.jsdelivr.net/gh/ai0325389-hash/mehak-birth@main/IMG_004.jpg",
    caption: "Meri har khushi tumse hai ✨"
  },
  {
    url: "https://cdn.jsdelivr.net/gh/ai0325389-hash/mehak-birth@main/IMG_005.jpg",
    caption: "Happy Birthday Meri Jaan 🌹"
  }
];

let currentPhotoIndex = 0;

function startAutoMusic() {
  const music = document.getElementById('bgMusic');
  const btnText = document.getElementById('musicText');
  if (music && !isPlaying) {
    music.play().then(() => {
      isPlaying = true;
      if (btnText) btnText.innerText = "Pause Music";
    }).catch(err => {
      console.log("Autoplay blocked:", err);
    });
  }
}

function toggleMusic() {
  const music = document.getElementById('bgMusic');
  const btnText = document.getElementById('musicText');
  if (isPlaying) {
    if (music) music.pause();
    if (btnText) btnText.innerText = "Play Music";
  } else {
    if (music) music.play();
    if (btnText) btnText.innerText = "Pause Music";
  }
  isPlaying = !isPlaying;
}

function nextStep(stepNumber) {
  try {
    startAutoMusic();
  } catch (e) {
    console.log(e);
  }

  for (let i = 1; i <= 8; i++) {
    const el = document.getElementById(`step${i}`);
    if (el) el.classList.add('hidden');
  }
  const target = document.getElementById(`step${stepNumber}`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('animate-fade');
  }

  if (stepNumber === 6) {
    updateGallery();
  }
}

function popConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

function moveNo() {
  const btn = document.getElementById('noBtn');
  if (btn) {
    const randomX = Math.floor(Math.random() * 140) - 70;
    const randomY = Math.floor(Math.random() * 100) - 50;
    btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
}

function updateGallery() {
  const imgEl = document.getElementById('galleryImg');
  const captionEl = document.getElementById('galleryCaption');
  if (imgEl && photos[currentPhotoIndex]) {
    imgEl.src = photos[currentPhotoIndex].url;
  }
  if (captionEl && photos[currentPhotoIndex]) {
    captionEl.innerText = photos[currentPhotoIndex].caption;
  }
}

function nextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  updateGallery();
}

function prevPhoto() {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  updateGallery();
}

function popBalloon(btn, message) {
  if (!btn || btn.style.opacity === '0.2') return;
  
  btn.style.opacity = '0.2';
  btn.style.transform = 'scale(0.8)';
  const note = document.getElementById('balloonNote');
  if (note) note.innerText = message;
  
  popConfetti();
  poppedCount++;

  if (poppedCount >= 4) {
    const finalBtn = document.getElementById('finalBtn');
    if (finalBtn) finalBtn.classList.remove('hidden');
  }
}
