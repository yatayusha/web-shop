let cart = JSON.parse(localStorage.getItem('cart')) || {};

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
}

function removeFromCart(id) {
  delete cart[id];
  saveCart();
}

function changeQuantity(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
}

function getCartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === Number(id));
    return sum + product.price * qty;
  }, 0);
}

function getCartCount() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}