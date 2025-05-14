document.addEventListener("DOMContentLoaded", function () {
  const cartCount = document.querySelector(".icon-cart span");
  const cartSidebar = document.querySelector(".cartTab");
  const closeCartBtn = document.querySelector(".close");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  const listCart = document.querySelector(".listCart");
  const openCartBtn = document.getElementById("openCart");

  let cart = [];

  // Load cart from localStorage on page load
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }

  function showCart() {
    document.body.classList.add("showCart");
  }

  function hideCart() {
    document.body.classList.remove("showCart");
  }

  function updateCartCount() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }

  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart() {
    listCart.innerHTML = "";
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerHTML = `
        <div class="image">
          <img src="${item.img}" alt="${item.name}" />
        </div>
        <div class="name">Name: ${item.name}</div>
        <div class="totalPrice">$${item.price * item.quantity}</div>
        <div class="quantity">
          <span class="minus" data-index="${index}">&lt;</span>
          <span>${item.quantity}</span>
          <span class="plus" data-index="${index}">&gt;</span>
        </div>
      `;
      listCart.appendChild(div);
    });
    updateCartCount();
    saveCart(); // Save to localStorage
  }

  // Initial render on load
  renderCart();

  listCart.addEventListener("click", function (e) {
    const index = e.target.dataset.index;
    if (e.target.classList.contains("plus")) {
      cart[index].quantity++;
    } else if (e.target.classList.contains("minus")) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        cart.splice(index, 1);
      }
    }
    renderCart();
  });

  addToCartButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      const product = btn.closest(".product");
      const name = product.querySelector("h3").textContent;
      const price = parseFloat(product.querySelector("p").textContent.replace("$", ""));
      const img = product.querySelector("img").src;

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ name, price, img, quantity: 1 });
      }

      renderCart();
      showCart();
    });
  });

  closeCartBtn.addEventListener("click", hideCart);
  openCartBtn.addEventListener("click", showCart);
});

const slider = document.getElementById("imageSlider");
  let currentIndex = 0;

  function showSlide(index) {
    const slideWidth = slider.clientWidth;
    slider.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
  }

  function nextSlide() {
    const totalSlides = slider.children.length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  // Auto-slide every 3 seconds
  setInterval(nextSlide, 3000);

  