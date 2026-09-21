document.addEventListener('DOMContentLoaded', () => {
    renderCatalog();
    renderCart();
  });
  
  document.getElementById('catalog').addEventListener('click', (e) => {
    if (e.target.classList.contains('add-to-cart')) {
      addToCart(Number(e.target.dataset.id));
      renderCart();
    }
  });
  
  
  document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').hidden = false;
  });
  document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart-modal').hidden = true;
  });
  
  document.getElementById('cart-items').addEventListener('click', (e) => {
    const id = Number(e.target.dataset.id);
    if (e.target.classList.contains('qty-btn')) {
      changeQuantity(id, Number(e.target.dataset.delta));
    }
    if (e.target.classList.contains('remove-btn')) {
      removeFromCart(id);
    }
    renderCart();
  });
  

  document.getElementById('checkout-btn').addEventListener('click', () => {
    document.getElementById('cart-modal').hidden = true;
    document.getElementById('order-modal').hidden = false;
  });
  document.getElementById('close-order').addEventListener('click', () => {
    document.getElementById('order-modal').hidden = true;
  });
  

  document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('order-form').hidden = true;
    document.getElementById('order-success').hidden = false;
    cart = {};
    saveCart();
    renderCart();
  });