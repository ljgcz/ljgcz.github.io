document.addEventListener('DOMContentLoaded', () => {
  const card = document.getElementById('card');
  const cardFront = document.querySelector('.card-front');
  const cardBack = document.querySelector('.card-back');
  let isFlipped = false;

  // Enable dragging
  let isDragging = false;
  let offsetX, offsetY;

  card.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - card.offsetLeft;
    offsetY = e.clientY - card.offsetTop;
  });

  document.addEventListener('mousemove', (e) => {
    if (isDragging) {
      card.style.left = `${e.clientX - offsetX}px`;
      card.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
  });

  // Flip the card on click
  card.addEventListener('click', () => {
    if (!isFlipped) {
      card.style.transform = 'rotateY(180deg) scale(3)';
      isFlipped = true;
    } else {
      card.style.transform = 'rotateY(0deg) scale(1)';
      isFlipped = false;
    }
  });
});
