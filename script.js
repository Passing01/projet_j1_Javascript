// Fonctionnalité 1
document.querySelector('footer').addEventListener('click', function() {
  console.log('clique');
});

// Fonctionnalité 1-bis
let clickCount = 0;
document.querySelector('footer').addEventListener('click', function() {
  clickCount++;
  console.log('clic numéro ' + clickCount);
});

// Fonctionnalité 2
document.querySelector('.navbar-toggler').addEventListener('click', function() {
  document.getElementById('navbarHeader').classList.toggle('collapse');
});

// Fonctionnalité 3
document.querySelectorAll('.card')[0].querySelector('.btn-outline-secondary').addEventListener('click', function() {
  document.querySelectorAll('.card')[0].querySelector('.card-text').style.color = 'red';
});

// Fonctionnalité 4
let isGreen = false;
document.querySelectorAll('.card')[1].querySelector('.btn-outline-secondary').addEventListener('click', function() {
  const cardText = document.querySelectorAll('.card')[1].querySelector('.card-text');
  if (isGreen) {
    cardText.style.color = '';
  } else {
    cardText.style.color = 'green';
  }
  isGreen = !isGreen;
});

// Fonctionnalité 5
let isBootstrapEnabled = true;
document.querySelector('.navbar').addEventListener('dblclick', function() {
  if (isBootstrapEnabled) {
    document.querySelector('link[rel="stylesheet"]').disabled = true;
  } else {
    document.querySelector('link[rel="stylesheet"]').disabled = false;
  }
  isBootstrapEnabled = !isBootstrapEnabled;
});

// Fonctionnalité 6
document.querySelectorAll('.btn-success').forEach(function(button) {
  button.addEventListener('mouseover', function() {
    const card = button.closest('.card');
    card.querySelector('.card-text').style.display = 'none';
    card.querySelector('.card-img-top').style.width = '20%';
  });

  button.addEventListener('mouseout', function() {
    const card = button.closest('.card');
    card.querySelector('.card-text').style.display = 'block';
    card.querySelector('.card-img-top').style.width = '100%';
  });
});

// Fonctionnalité 7
document.querySelector('.btn-secondary').addEventListener('click', function() {
  const cards = document.querySelectorAll('.card');
  const lastCard = cards[cards.length - 1];
  lastCard.parentNode.insertBefore(lastCard, cards[0]);
});

// Fonctionnalité 8
document.querySelector('.btn-primary').addEventListener('click', function() {
  const cards = document.querySelectorAll('.card');
  const firstCard = cards[0];
  firstCard.parentNode.appendChild(firstCard);
});

// Fonctionnalité 9
document.querySelector('.navbar-brand').addEventListener('focus', function() {
  document.addEventListener('keydown', function(event) {
    const container = document.querySelector('.container');
    if (event.key === 'a') {
      container.classList.add('col-md-4');
      container.classList.add('offset-md-0');
      container.classList.remove('offset-md-4');
      container.classList.remove('offset-md-8');
    } else if (event.key === 'y') {
      container.classList.add('col-md-4');
      container.classList.add('offset-md-4');
      container.classList.remove('offset-md-0');
      container.classList.remove('offset-md-8');
    } else if (event.key === 'p') {
      container.classList.add('col-md-4');
      container.classList.add('offset-md-8');
      container.classList.remove('offset-md-0');
      container.classList.remove('offset-md-4');
    } else if (event.key === 'b') {
      container.classList.remove('col-md-4');
      container.classList.remove('offset-md-0');
      container.classList.remove('offset-md-4');
      container.classList.remove('offset-md-8');
    }
  });
});
