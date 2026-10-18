const products = [
  {
    name: 'BERG T-Shirt',
    price: 349.99,
    image: 'images/tshirt-1.jpg',
    colors: ['Black', 'White', 'Grey'],
    description: 'A clean everyday essential cut for ease, movement and repeat wear.'
  },
   {
    name: 'BERG T-Shirt 2',
    price: 349.99,
    image: 'images/tshirt-2.jpg',
    colors: ['Black', 'White', 'Yellow'],
    description: 'A graphic everyday tee with an easy fit and confident BERG energy.'
  },
  {
    name: 'BERG T-Shirt 3',
    price: 349.99,
    image: 'images/tshirt-3.jpg',
    colors: ['Black', 'White'],
description: 'A clean graphic tee designed for everyday comfort, effortless style and unmistakable BERG attitude.'
  },
  {
    name: 'BERG Hoodie',
    price: 349.99,
    image: 'images/hoodie-1.jpg',
    colors: ['Black', 'Grey', 'Blue'],
    description: 'A soft, heavyweight layer made for cool starts and late finishes.'
  },
   {
    name: 'BERG Hoodie 2',
    price: 349.99,
    image: 'images/hoodie-2.jpg',
    colors: ['Black', 'Grey', 'Blue'],
    description: 'A soft, heavyweight layer made for cool starts and late finishes.'
  },
  {
    name: 'BERG Hoodie 3',
    price: 349.99,
    isNew: true,
    image: 'images/berg-hoodie-model.jpg',
    colors: ['Black'],
    description: 'BERG hoodie.'
  },
  {
    name: 'Pink Panda',
    price: 399.99,
    isNew: true,
    image: 'images/berg-white-hoodie-model.jpg',
    colors: ['White'],
    description: 'BERG white hoodie.'
  },
  {
    name: 'BERG Outline Tee',
    price: 449.99,
    image: 'images/outline-tee.jpg',
    colors: ['Black', 'White', 'Blue'],
    description: 'A considered graphic tee with the BERG outline at its core.'
  },
  {
    name: 'Retro Zip-Up Hoodie',
    price: 399.99,
    image: 'images/retro-hoodie-1.jpg',
    colors: ['Black', 'Grey'],
    description: 'A retro-inspired zip-up layer with an easy fit, soft feel and everyday BERG attitude.'
  },
  {
    name: 'Berg Intelligence Tee',
    price: 349.99,
    image: 'images/berg-intelligence-tee-1.jpg',
    
    colors: ['Black', 'White', 'Grey'],
    description: 'A graphic BERG tee with a confident cut, everyday comfort and intelligent detail.'
  },
  {
    name: 'Berg Peak 01 Tee',
    price: 349.99,
    image: 'images/berg-peak-01-tee-1.jpg',
    colors: ['Black', 'White', 'Grey'],
    description: 'A BERG essential with a considered graphic, comfortable fit and everyday confidence.'
  },
  {
    name: 'Pink Panda T-Shirt',
    price: 349.99,
    isNew: true,
    image: 'images/pink-bloom-hoodie-1.jpg',
    colors: ['White', 'Pink'],
    description: 'A clean white BERG hoodie featuring a soft pink bloom graphic, playful bear artwork, and matching pink details. Cozy, bold, and made to stand out.'
  },
  {
    name: 'BERG Cap',
    price: 129.99,
    originalPrice: 149.99,
    saleLabel: 'SPECIAL',
    image: 'images/berg-cap.jpg',
    colors: ['Black', 'White', 'Blue', 'Grey'],
    description: 'A clean BERG cap made to finish the everyday fit with confident style.'
  },
  {
    name: 'BERG Cap 2',
    price: 129.99,
    originalPrice: 149.99,
    saleLabel: 'SPECIAL',
    image: 'images/berg-cap-2.jpg',
    colors: ['Black', 'White', 'Blue', 'Grey'],
    description: 'A versatile BERG cap crafted for everyday wear, combining a clean finish with effortless streetwear style.'
  },
   {
    name: 'BERG Cap 3',
    price: 129.99,
    originalPrice: 149.99,
    saleLabel: 'SPECIAL',
    isNew: true,
    image: 'images/berg-cap-3.png',
    colors: ['Black', 'White', 'Blue', 'Grey'],
   description: 'A signature BERG cap designed to elevate any fit with clean detailing, everyday comfort and confident streetwear energy.'
  },
  {
    name: 'BERG Windbreaker',
    price: 699.99,
    image: 'images/windbreaker-1.jpg',
    colors: ['Black', 'White', 'Blue'],
    description: 'A lightweight outer layer with protection for wherever the day goes.'
  },
  {
    name: 'BERG Tracksuit',
    price: 799.99,
    image: 'images/tracksuit-3.jpg',
    colors: ['Black', 'Blue'],
    description: 'A sharp black and blue mafia-inspired tracksuit with a bold street-ready finish.'
  },
  {
    name: 'BERG Tracksuit 2',
    price: 799.99,
    image: 'images/tracksuit-2.jpg',
    colors: ['Black', 'Blue'],
   description: 'A bold blue and grey tracksuit built for everyday comfort with a clean, confident streetwear look.'
  },
  {
    name: 'Reflective Wind Breaker',
    price: 899.99,
    isNew: true,
    image: 'images/reflective-windbreaker-1.jpg',
    colors: ['Grey', 'Black'],
    description: 'Reflective grey windbreaker set with matching pants, designed for a bold streetwear look with high-visibility reflective detailing. Water-resistant and waterproof.'
  },
   {
    name: 'Mafia Tracksuit',
    price: 899.99,
    image: 'images/tracksuit-1.jpg',
    colors: ['Black', 'Grey'],
    description: 'A full BERG set bringing relaxed comfort and a sharp silhouette together.'
  }
];

const sizes = ['XS', 'S', 'M', 'L', 'XL'];

const STORAGE_KEY = 'berg-cart';

const yearNodes = document.querySelectorAll('[data-current-year]');
if (yearNodes.length) {
  yearNodes.forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const loadCart = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(saved)
      ? saved.filter((item) => item && typeof item.name === 'string' && Number.isFinite(Number(item.price)) && Number(item.quantity) > 0)
      : [];
  } catch (error) {
    return [];
  }
};

const state = {
  cart: loadCart(),
  product: null,
  color: '',
  size: 'M',
  quantity: 1,
  deliveryLocation: '',
  deliveryFee: 0,
  category: 'All Products'
};

window.bergState = state;

const $ = (id) => document.getElementById(id);

const money = (amount) => {
  return `R${Number(amount).toFixed(2)}`;
};

const deliveryFees = {
  Gauteng: 60,
  'Outside Gauteng': 150
};

const categoryFor = (product) => {
  if (product.name.includes('Cap')) {
    return ['Accessories', 'Sale'];
  }

  if (
    product.name.includes('Tee') ||
    product.name.includes('T-Shirt')
  ) {
    return ['T-Shirts'];
  }

  if (product.name.includes('Hoodie')) {
    return ['Hoodies'];
  }

  if (product.name.includes('Tracksuit')) {
    return ['Tracksuits'];
  }

  if (
    product.name.includes('Windbreaker') ||
    product.name.includes('Wind Breaker')
  ) {
    return ['Windbreakers'];
  }

  return [];
};


/* =========================================
   RENDER PRODUCTS
   ========================================= */

function updateShopMeta() {
  const totalItems = products.length;
  const label = $('dropCountLabel');
  const note = $('sectionNote');

  if (label) {
    label.textContent = `THE CURRENT DROP / ${totalItems}`;
  }

  if (note) {
    note.innerHTML = `${totalItems} everyday pieces.<br>One unmistakable attitude.`;
  }
}

function productCardMarkup(product) {
  const saleHTML = product.originalPrice
    ? `
      <span class="original-price">
        ${money(product.originalPrice)}
      </span>

      <span class="sale-label">
        ${product.saleLabel}
      </span>
    `
    : '';

  return `
    <article
      class="product-card${product.originalPrice ? ' sale-card' : ''}"
      data-product="${product.name}"
    >

      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
      </div>

      <div class="product-info">

        <div class="product-top">

          <h3>${product.name}</h3>

          <strong class="product-price">
            ${saleHTML}
            <span class="current-price">
              ${money(product.price)}
            </span>
          </strong>

        </div>

        <div class="product-description">

          <p>
            ${product.description}
          </p>

        </div>

        <div class="product-bottom">

          <span class="eyebrow">
            ${product.colors.length}
            colour${product.colors.length === 1 ? '' : 's'}
          </span>

          <button
            class="view-link"
            type="button"
          >
            View Product &#8594;
          </button>

        </div>

      </div>

    </article>
  `;
}

function renderProducts(query = '') {
  const normalizedQuery = query.toLowerCase().trim();

  const matches = products.filter((product) => {
    const matchesCategory =
      state.category === 'All Products' ||
      (
        state.category === 'New Arrivals'
          ? product.isNew === true
          : state.category === 'Sale'
            ? Boolean(product.originalPrice)
            : categoryFor(product).includes(state.category)
      );

    const matchesSearch =
      `${product.name} ${product.description} ${product.colors.join(' ')}`
        .toLowerCase()
        .includes(normalizedQuery);

    return matchesCategory && matchesSearch;
  });

  $('products').innerHTML = matches.map(productCardMarkup).join('');

  $('resultCount').textContent =
    `${matches.length} piece${matches.length === 1 ? '' : 's'}`;

  $('emptyState').hidden = matches.length !== 0;
}

/* =========================================
   OPEN PRODUCT
   ========================================= */

function openProduct(productName) {
  const product = products.find(
    (item) => item.name === productName
  );

  if (!product) {
    return;
  }

  state.product = product;
  state.color = product.colors[0];
  state.size = 'M';
  state.quantity = 1;

  $('modalProductImage').src = product.image;
  $('modalProductImage').alt = product.name;

  $('modalProductName').textContent =
    product.name;

  $('modalProductDescription').textContent =
    product.description;

  $('modalProductPrice').textContent =
    money(product.price);

  $('quantityInput').value =
    state.quantity;

  $('selectedColorLabel').textContent =
    `/ ${state.color}`;

  $('selectedSizeLabel').textContent =
    `/ ${state.size}`;


  /* COLORS */

  $('colorOptions').innerHTML =
    product.colors.map((color) => `
      <button
        class="color-option${color === state.color ? ' selected' : ''}"
        type="button"
        data-color="${color}"
      >
        ${color}
      </button>
    `).join('');


  /* SIZES */

  $('sizeOptions').innerHTML =
    sizes.map((size) => `
      <button
        class="size-option${size === state.size ? ' selected' : ''}"
        type="button"
        data-size="${size}"
      >
        ${size}
      </button>
    `).join('');


  $('productModal').hidden = false;

  document.body.classList.add('no-scroll');
}


/* =========================================
   CLOSE PRODUCT
   ========================================= */

function closeProduct() {
  $('productModal').hidden = true;

  document.body.classList.remove('no-scroll');
}


/* =========================================
   QUANTITY
   ========================================= */

function setQuantity(value) {
  state.quantity =
    Math.max(
      1,
      Number.parseInt(value, 10) || 1
    );

  $('quantityInput').value =
    state.quantity;
}


/* =========================================
   ADD TO CART
   ========================================= */

function addToCart() {
  if (!state.product) {
    return;
  }

  const existing = state.cart.find(
    (item) =>
      item.name === state.product.name &&
      item.color === state.color &&
      item.size === state.size
  );

  if (existing) {
    existing.quantity += state.quantity;
  } else {
    state.cart.push({
      ...state.product,
      color: state.color,
      size: state.size,
      quantity: state.quantity
    });
  }

  renderCart();

  closeProduct();

  openCart();
}


/* =========================================
   RENDER CART
   ========================================= */

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
  } catch (error) {
  }
}

function renderCart() {

  const count =
    state.cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

  const subtotal =
    state.cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );

  const total =
    subtotal + state.deliveryFee;


  $('cart-count').textContent =
    count;

  $('cartSubtotal').textContent =
    money(subtotal);

  $('cartDelivery').textContent =
    money(state.deliveryFee);

  $('cartTotal').textContent =
    money(total);

  saveCart();

  $('cartItems').innerHTML =
    state.cart.length

      ? state.cart.map((item, index) => `
        <div class="cart-item">

          <img
            src="${item.image}"
            alt="${item.name}"
          >

          <div class="cart-item-info">

            <h3>
              ${item.name}
            </h3>

            <p>
              ${item.color}
              /
              ${item.size}
              /
              ${money(item.price)}
            </p>

            <div class="cart-item-actions">

              <button
                type="button"
                data-action="decrease"
                data-index="${index}"
              >
                &#8722;
              </button>

              <strong>
                ${item.quantity}
              </strong>

              <button
                type="button"
                data-action="increase"
                data-index="${index}"
              >
                +
              </button>

              <button
                class="remove-item"
                type="button"
                data-action="remove"
                data-index="${index}"
              >
                Remove
              </button>

            </div>

          </div>

          <strong>
            ${money(item.price * item.quantity)}
          </strong>

        </div>
      `).join('')

      : `
        <p class="cart-empty">
          Your cart is waiting for its first piece.
        </p>
      `;
}


/* =========================================
   OPEN CART
   ========================================= */

function openCart() {
  $('cartDrawer').classList.add('open');

  $('cartDrawer').setAttribute(
    'aria-hidden',
    'false'
  );

  renderCart();
}


/* =========================================
   CLOSE CART
   ========================================= */

function closeCart() {
  $('cartDrawer').classList.remove('open');

  $('cartDrawer').setAttribute(
    'aria-hidden',
    'true'
  );
}

/* =========================================
   CHECKOUT
   ========================================= */

function orderOnWhatsApp(product = state.product) {
  if (!product) {
    return;
  }

  const details = {
    name: product.name,
    color: state.color || product.colors[0],
    size: state.size || 'M',
    quantity: state.quantity || 1
  };

  const message = `
BERG GARMENT COLLECTION ORDER

Product: ${details.name}
Price: ${money(product.price)}
Colour: ${details.color}
Size: ${details.size}
Quantity: ${details.quantity}

Please confirm availability, delivery and payment details.
`;

  window.open(
    `https://wa.me/27818425151?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener'
  );
}

function checkout() {

  if (!state.cart.length) {
    window.alert(
      'Your cart is empty.'
    );

    return;
  }


  if (!state.deliveryLocation) {

    window.alert(
      'Please choose a delivery location.'
    );

    $('deliveryLocation').focus();

    return;
  }


  const lines =
    state.cart.map(
      (item) =>
        `${item.name} / Colour: ${item.color} / Size: ${item.size} / Quantity: ${item.quantity} / ${money(item.price * item.quantity)}`
    );


  const subtotal =
    state.cart.reduce(
      (sum, item) =>
        sum + item.price * item.quantity,
      0
    );


  const total =
    subtotal + state.deliveryFee;


  const message = `
BERG GARMENT COLLECTION ORDER

${lines.join('\n')}

Delivery: ${state.deliveryLocation}
Delivery Fee: ${money(state.deliveryFee)}

Subtotal: ${money(subtotal)}
Total: ${money(total)}
`;


  window.open(
    `https://wa.me/27818425151?text=${encodeURIComponent(message)}`,
    '_blank',
    'noopener'
  );
}


/* =========================================
   PRODUCT CLICK
   ========================================= */

$('products').addEventListener(
  'click',
  (event) => {

    const card =
      event.target.closest('.product-card');

    if (card) {
      openProduct(
        card.dataset.product
      );
    }
  }
);

/* =========================================
   SEARCH
   ========================================= */

$('searchInput').addEventListener(
  'input',
  (event) => {
    renderProducts(
      event.target.value
    );
  }
);


/* =========================================
   CATEGORY FILTERS
   ========================================= */

document.querySelectorAll('[data-category]').forEach((button) => {
  button.addEventListener('click', () => {
    state.category = button.dataset.category;

    document.querySelectorAll('[data-category]').forEach((option) => {
      option.classList.toggle('active', option === button);
    });

    renderProducts($('searchInput').value);
  });
});


/* =========================================
   COLOR OPTIONS
   ========================================= */

$('colorOptions').addEventListener(
  'click',
  (event) => {

    const button =
      event.target.closest('[data-color]');

    if (!button) {
      return;
    }

    state.color =
      button.dataset.color;

    $('selectedColorLabel').textContent =
      `/ ${state.color}`;

    document
      .querySelectorAll('.color-option')
      .forEach((option) => {

        option.classList.toggle(
          'selected',
          option === button
        );

      });
  }
);


/* =========================================
   SIZE OPTIONS
   ========================================= */

$('sizeOptions').addEventListener(
  'click',
  (event) => {

    const button =
      event.target.closest('[data-size]');

    if (!button) {
      return;
    }

    state.size =
      button.dataset.size;

    $('selectedSizeLabel').textContent =
      `/ ${state.size}`;

    document
      .querySelectorAll('.size-option')
      .forEach((option) => {

        option.classList.toggle(
          'selected',
          option === button
        );

      });
  }
);


/* =========================================
   QUANTITY BUTTONS
   ========================================= */

$('decreaseQuantity').addEventListener(
  'click',
  () => {
    setQuantity(
      state.quantity - 1
    );
  }
);


$('increaseQuantity').addEventListener(
  'click',
  () => {
    setQuantity(
      state.quantity + 1
    );
  }
);


$('quantityInput').addEventListener(
  'change',
  (event) => {
    setQuantity(
      event.target.value
    );
  }
);


/* =========================================
   PRODUCT MODAL BUTTONS
   ========================================= */

$('addToCart').addEventListener(
  'click',
  addToCart
);

$('orderOnWhatsApp').addEventListener(
  'click',
  () => orderOnWhatsApp(state.product)
);

$('closeProduct').addEventListener(
  'click',
  closeProduct
);


/* =========================================
   CART BUTTONS
   ========================================= */

$('cartButton').addEventListener(
  'click',
  openCart
);


$('closeCart').addEventListener(
  'click',
  closeCart
);


$('checkoutButton').addEventListener(
  'click',
  checkout
);


/* =========================================
   CLEAR CART
   ========================================= */

$('clearCart').addEventListener(
  'click',
  () => {

    state.cart = [];

    renderCart();
  }
);


/* =========================================
   CART ITEM ACTIONS
   ========================================= */

$('cartItems').addEventListener(
  'click',
  (event) => {

    const button =
      event.target.closest('[data-action]');

    if (!button) {
      return;
    }

    const index =
      Number(button.dataset.index);

    const item =
      state.cart[index];

    if (!item) {
      return;
    }


    if (
      button.dataset.action ===
      'remove'
    ) {
      state.cart.splice(index, 1);
    }


    if (
      button.dataset.action ===
      'increase'
    ) {
      item.quantity += 1;
    }


    if (
      button.dataset.action ===
      'decrease'
    ) {
      item.quantity =
        Math.max(
          1,
          item.quantity - 1
        );
    }


    renderCart();
  }
);


/* =========================================
   CLOSE MODALS BY CLICKING OUTSIDE
   ========================================= */

$('productModal').addEventListener(
  'click',
  (event) => {

    if (
      event.target ===
      $('productModal')
    ) {
      closeProduct();
    }
  }
);


$('cartDrawer').addEventListener(
  'click',
  (event) => {

    if (
      event.target ===
      $('cartDrawer')
    ) {
      closeCart();
    }
  }
);


/* =========================================
   ESCAPE KEY
   ========================================= */

document.addEventListener(
  'keydown',
  (event) => {

    if (event.key === 'Escape') {

      closeProduct();

      closeCart();
    }
  }
);


/* =========================================
   DELIVERY LOCATION
   ========================================= */

if ($('deliveryLocation')) {

  $('deliveryLocation').addEventListener(
    'change',
    (event) => {

      state.deliveryLocation =
        event.target.value;

      state.deliveryFee =
        deliveryFees[
          state.deliveryLocation
        ] || 0;

      renderCart();
    }
  );
}


/* =========================================
   INITIAL LOAD
   ========================================= */

updateShopMeta();
renderProducts();
renderCart();

