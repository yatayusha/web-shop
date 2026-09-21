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
        <li class="cart-item" data-id="${id}">
  
          <!-- Картинка -->
          <div class="cart-image">
            <img src="${product.image}" alt="${product.name}">
          </div>
  
          <!-- Название товара -->
          <div class="cart-info">
            <h3>${product.name}</h3>
          </div>
  
          <!-- Количество -->
          <div class="quantity-control">
  
            <button
              class="qty-btn"
              data-id="${id}"
              data-delta="-1">
              −
            </button>
  
            <span class="quantity">
              ${qty} шт.
            </span>
  
            <button
              class="qty-btn"
              data-id="${id}"
              data-delta="1">
              +
            </button>
  
          </div>
  
          <!-- Цена -->
          <div class="cart-price">
            ${product.price * qty} ₽
          </div>
  
          <!-- Удалить -->
          <button
            class="remove-btn"
            data-id="${id}"
            aria-label="Удалить товар">
            ×
          </button>
  
        </li>
      `;
    }).join('');
  
    document.getElementById('cart-total').textContent = getCartTotal();
    document.getElementById('cart-count').textContent = getCartCount();
  }