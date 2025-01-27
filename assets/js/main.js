
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  let activeCard = null;

  cards.forEach(card => {
    card.addEventListener('click', (event) => {
      event.stopPropagation(); 

      const isCardActive = card.classList.contains('active');

      if (activeCard && activeCard !== card) {
        activeCard.classList.remove('active');
      }

      if (isCardActive) {
        card.classList.remove('active');
        activeCard = null; 
      } else {
        card.classList.add('active');
        activeCard = card;

        setTimeout(() => {
          card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 10);
      }
    });
  });

  document.addEventListener('click', () => {
    if (activeCard) {
      activeCard.classList.remove('active');
      activeCard = null;
    }
  });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const btn = document.getElementById("scrollToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
