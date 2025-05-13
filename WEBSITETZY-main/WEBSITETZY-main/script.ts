// Streamlined Repetition & Instant Gratification

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart!'); // Instant feedback
    // Future: update cart UI and use localStorage for memory
  });
});

// Safe Exploration: simulate login
document.getElementById('loginBtn').addEventListener('click', () => {
  let name = prompt("Enter your name:");
  if (name) {
    alert(`Welcome back, ${name}!`);
  }
});

// Prospective Memory: alert if items are left in cart (future idea)
window.addEventListener('beforeunload', function (e) {
  // e.preventDefault(); // Uncomment when using localStorage
});
