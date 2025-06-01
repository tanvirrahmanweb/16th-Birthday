const countdownEl = document.getElementById('countdown');
const messageEl = document.getElementById('message');
const giftBtn = document.getElementById('gift-btn');

// Set birthday date
const birthday = new Date(2025, 5, 26, 0, 0, 0);

function updateCountdown() {
  const now = new Date();
  let diff = birthday - now;

  if (diff <= 0) {
    countdownEl.style.display = 'none'; // Hide countdown
    messageEl.style.display = 'block'; // Show birthday message
    giftBtn.style.display = 'inline-block'; // Show gift button
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  diff -= days * (1000 * 60 * 60 * 24);
  const hours = Math.floor(diff / (1000 * 60 * 60));
  diff -= hours * (1000 * 60 * 60);
  const minutes = Math.floor(diff / (1000 * 60));
  diff -= minutes * (1000 * 60);
  const seconds = Math.floor(diff / 1000);

  countdownEl.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

// Gift button click event - navigate to gift page
giftBtn.addEventListener('click', () => {
  window.location.href = "gift.html";
});
