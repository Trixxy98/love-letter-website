const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const blurOverlay = document.getElementById('blurOverlay');

let currentScale = 1;

yesBtn.addEventListener('click', () => {
  currentScale = 1; // reset scale on Yes
  yesBtn.style.transform = 'scale(1)';
  envelope.classList.add('open');
  letter.classList.add('show');
  blurOverlay.classList.add('active');
  for (let i = 0; i < 20; i++) {
    setTimeout(() => spawnEmoji(), i * 100);
    setTimeout(() => spawnWhiteEmoji(), i * 150);
  }
});

noBtn.addEventListener('click', () => {
  if (currentScale < 20) {
    currentScale += 0.2;
    yesBtn.style.transform = `scale(${currentScale})`;
    yesBtn.style.zIndex = 999;
    yesBtn.style.position = 'relative';
  }
});
function spawnEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.textContent = '💖';
  
    // Position the emoji relative to the envelope
    const envelope = document.getElementById('envelope');
    envelope.appendChild(emoji);
  
    emoji.style.left = `${50 + Math.random() * 40 - 20}%`;
    emoji.style.top = `50%`;
  
    setTimeout(() => emoji.remove(), 2000);
  }

  function spawnWhiteEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji-white');
    emoji.textContent = '🤍';
  
    // Position emojis randomly within the viewport
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `${Math.random() * 100}%`;
  
    emoji.style.setProperty('--x', Math.random().toFixed(2));
    emoji.style.setProperty('--y', Math.random().toFixed(2));
  
    document.body.appendChild(emoji); // Attach directly to the body
  
    setTimeout(() => emoji.remove(), 3000); // Remove after 3 seconds
  }

  document.getElementById('moreBtn').addEventListener('click', () => {
    const secondLetter = document.getElementById('secondLetter');
  const secondBlur = document.getElementById('secondBlurOverlay');


    secondLetter.classList.add('show');
    secondBlur.classList.add('active');

  
    // Spawn white hearts
    for (let i = 0; i < 20; i++) {
      spawnWhiteEmojiAround(secondLetter);
    }
  });
  
  // Heart animation around second letter
  function spawnWhiteEmojiAround(target) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji-white');
    emoji.textContent = '🤍';
  
    const rect = target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
  
    emoji.style.left = `${x + (Math.random() - 0.5) * 200}px`;
    emoji.style.top = `${y + (Math.random() - 0.5) * 200}px`;
    emoji.style.setProperty('--x', Math.random().toFixed(2));
    emoji.style.setProperty('--y', Math.random().toFixed(2));
  
    document.body.appendChild(emoji);
  
    setTimeout(() => emoji.remove(), 3000);
  }
