document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('.product');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const isMatch = title.includes(query);
      card.style.display = isMatch ? 'block' : 'none';
    });
  });
});