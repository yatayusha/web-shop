function renderCatalog() {
    const catalog = document.getElementById('catalog');
    catalog.innerHTML = products.map(p => `
      <article class="product-card" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}">
        <h2>${p.name}</h2>
        <p class="price">${p.price} ₽</p>
        <button class="add-to-cart" data-id="${p.id}">Добавить в корзину</button>
      </article>
    `).join('');
  }
  
  function renderCart() {
    const list = document.getElementById('cart-items');
    list.innerHTML = Object.entries(cart).map(([id, qty]) => {
      const product = products.find(p => p.id === Number(id));
      return `
        <li data-id="${id}">
          ${product.name} — ${product.price} ₽
          <button class="qty-btn" data-id="${id}" data-delta="-1">−</button>
          ${qty}
          <button class="qty-btn" data-id="${id}" data-delta="1">+</button>
          <button class="remove-btn" data-id="${id}">Удалить</button>
        </li>
      `;
    }).join('');
  
    document.getElementById('cart-total').textContent = getCartTotal();
    document.getElementById('cart-count').textContent = getCartCount();
  }