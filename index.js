const heartContainer = document.querySelector('.heart-container');


function createHearts() {
  for (let i = 0; i < 50; i++) {
    let heart;
    let collision = true;

    while (collision) {
      heart = document.createElement('div');
      heart.classList.add('heart');

      const left = Math.random() * 100 + 'vw';
      const top = Math.random() * 100 + 'vh';

      heart.style.left = left;
      heart.style.top = top;

      collision = false;

      for (let j = 0; j < heartContainer.children.length; j++) {
        const existingHeart = heartContainer.children[j];
        const distance = calculateDistance(heart, existingHeart);

        if (distance < 20) { // adjust the distance threshold as needed
          collision = true;
          break;
        }
      }
    }

    heartContainer.appendChild(heart);
  }
}

function calculateDistance(heart1, heart2) {
  const x1 = parseFloat(heart1.style.left);
  const y1 = parseFloat(heart1.style.top);
  const x2 = parseFloat(heart2.style.left);
  const y2 = parseFloat(heart2.style.top);

  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


createHearts(); 