const modal = document.getElementById('ageModal');
const enterBtn = document.getElementById('enterBtn');
const exitBtn = document.getElementById('exitBtn');

if (modal && enterBtn && exitBtn) {
  if (localStorage.getItem('ageConfirmed')) {
    modal.classList.add('hidden');
  } else {
    document.body.style.overflow = 'hidden';
  }

  enterBtn.addEventListener('click', () => {
    localStorage.setItem('ageConfirmed', 'true');

    modal.classList.add('hidden');
    document.body.style.overflow = '';

    document.getElementById('demo')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });

  exitBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  });
}