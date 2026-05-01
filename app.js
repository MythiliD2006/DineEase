// ===== FOOD DATA =====
const FOODS = [
  {id:1,name:"Butter Chicken",cat:"North Indian",diet:"nonveg",price:320,rating:4.8,desc:"Creamy tomato-butter gravy with tender chicken pieces",mustTry:true,bestseller:true},
  {id:2,name:"Paneer Butter Masala",cat:"North Indian",diet:"veg",price:280,rating:4.7,desc:"Rich buttery tomato gravy with soft paneer cubes",mustTry:true,bestseller:true},
  {id:3,name:"Dal Makhani",cat:"North Indian",diet:"veg",price:220,rating:4.6,desc:"Slow-cooked black lentils in creamy buttery gravy",mustTry:true},
  {id:4,name:"Chole Bhature",cat:"North Indian",diet:"veg",price:180,rating:4.5,desc:"Spicy chickpea curry with fluffy deep-fried bread",mustTry:true},
  {id:5,name:"Rogan Josh",cat:"North Indian",diet:"nonveg",price:380,rating:4.7,desc:"Aromatic Kashmiri lamb curry with rich spices"},
  {id:6,name:"Palak Paneer",cat:"North Indian",diet:"veg",price:240,rating:4.4,desc:"Creamy spinach gravy with soft cottage cheese cubes"},
  {id:7,name:"Tandoori Chicken",cat:"North Indian",diet:"nonveg",price:340,rating:4.8,desc:"Clay oven roasted chicken marinated in yogurt & spices",mustTry:true},
  {id:8,name:"Aloo Gobi",cat:"North Indian",diet:"veg",price:160,rating:4.2,desc:"Dry preparation of potato and cauliflower with spices"},
  {id:9,name:"Kadai Paneer",cat:"North Indian",diet:"veg",price:260,rating:4.5,desc:"Paneer cooked with bell peppers in spicy kadai masala"},
  {id:10,name:"Chicken Tikka",cat:"North Indian",diet:"nonveg",price:300,rating:4.6,desc:"Smoky grilled chicken chunks marinated in tandoori spices"},
  {id:11,name:"Masala Dosa",cat:"South Indian",diet:"veg",price:120,rating:4.7,desc:"Crispy rice crepe filled with spiced potato filling",mustTry:true,bestseller:true},
  {id:12,name:"Idli Sambar",cat:"South Indian",diet:"veg",price:80,rating:4.3,desc:"Steamed rice cakes served with lentil soup & chutney"},
  {id:13,name:"Medu Vada",cat:"South Indian",diet:"veg",price:90,rating:4.2,desc:"Crispy fried lentil donuts served with sambar & chutney"},
  {id:14,name:"Uttapam",cat:"South Indian",diet:"veg",price:110,rating:4.1,desc:"Thick rice pancake topped with onions, tomatoes & chillies"},
  {id:15,name:"Chettinad Chicken",cat:"South Indian",diet:"nonveg",price:340,rating:4.6,desc:"Fiery South Indian chicken curry with aromatic spices",mustTry:true},
  {id:16,name:"Appam with Stew",cat:"South Indian",diet:"veg",price:150,rating:4.4,desc:"Lacy rice hoppers served with mild coconut vegetable stew"},
  {id:17,name:"Hyderabadi Biryani",cat:"Biryani & Rice",diet:"nonveg",price:320,rating:4.9,desc:"Fragrant basmati rice layered with spiced meat, slow cooked",mustTry:true,bestseller:true},
  {id:18,name:"Veg Biryani",cat:"Biryani & Rice",diet:"veg",price:220,rating:4.4,desc:"Aromatic basmati rice with mixed vegetables & whole spices"},
  {id:19,name:"Chicken Fried Rice",cat:"Biryani & Rice",diet:"nonveg",price:200,rating:4.2,desc:"Indo-Chinese style fried rice with chicken & vegetables"},
  {id:20,name:"Lucknowi Biryani",cat:"Biryani & Rice",diet:"nonveg",price:350,rating:4.7,desc:"Slow-cooked dum biryani with tender meat & saffron rice"},
  {id:21,name:"Jeera Rice",cat:"Biryani & Rice",diet:"veg",price:120,rating:4.0,desc:"Fragrant cumin-tempered basmati rice"},
  {id:22,name:"Egg Biryani",cat:"Biryani & Rice",diet:"nonveg",price:200,rating:4.3,desc:"Flavorful biryani rice with boiled eggs & spices"},
  {id:23,name:"Pani Puri",cat:"Street Food",diet:"veg",price:60,rating:4.6,desc:"Crispy hollow puris filled with tangy spiced water & chutney",mustTry:true},
  {id:24,name:"Vada Pav",cat:"Street Food",diet:"veg",price:40,rating:4.5,desc:"Mumbai's iconic spiced potato fritter in a soft bun",mustTry:true,bestseller:true},
  {id:25,name:"Samosa",cat:"Street Food",diet:"veg",price:30,rating:4.4,desc:"Crispy triangular pastry stuffed with spiced potato filling"},
  {id:26,name:"Pav Bhaji",cat:"Street Food",diet:"veg",price:120,rating:4.6,desc:"Buttery mashed vegetable curry with toasted bread rolls",mustTry:true},
  {id:27,name:"Aloo Tikki",cat:"Street Food",diet:"veg",price:50,rating:4.3,desc:"Crispy spiced potato patties with chutneys & toppings"},
  {id:28,name:"Kathi Roll",cat:"Street Food",diet:"nonveg",price:140,rating:4.5,desc:"Flaky paratha wrapped around spiced chicken & onions"},
  {id:29,name:"Bhel Puri",cat:"Street Food",diet:"veg",price:60,rating:4.3,desc:"Puffed rice mixed with tangy chutneys, onions & sev"},
  {id:30,name:"Naan",cat:"Breads",diet:"veg",price:40,rating:4.3,desc:"Soft leavened flatbread baked in tandoor oven"},
  {id:31,name:"Garlic Naan",cat:"Breads",diet:"veg",price:60,rating:4.5,desc:"Butter-brushed naan topped with roasted garlic & herbs"},
  {id:32,name:"Tandoori Roti",cat:"Breads",diet:"veg",price:30,rating:4.1,desc:"Whole wheat flatbread baked in clay tandoor"},
  {id:33,name:"Paratha",cat:"Breads",diet:"veg",price:50,rating:4.2,desc:"Flaky layered whole wheat flatbread cooked with ghee"},
  {id:34,name:"Laccha Paratha",cat:"Breads",diet:"veg",price:60,rating:4.4,desc:"Multi-layered crispy paratha with a buttery taste"},
  {id:35,name:"Gulab Jamun",cat:"Desserts",diet:"veg",price:80,rating:4.7,desc:"Soft deep-fried milk dumplings soaked in rose sugar syrup",mustTry:true},
  {id:36,name:"Rasgulla",cat:"Desserts",diet:"veg",price:70,rating:4.5,desc:"Spongy cottage cheese balls in light sugar syrup"},
  {id:37,name:"Jalebi",cat:"Desserts",diet:"veg",price:60,rating:4.4,desc:"Crispy deep-fried spirals soaked in saffron sugar syrup"},
  {id:38,name:"Kheer",cat:"Desserts",diet:"veg",price:90,rating:4.3,desc:"Creamy rice pudding with cardamom, nuts & saffron"},
  {id:39,name:"Gajar Halwa",cat:"Desserts",diet:"veg",price:100,rating:4.6,desc:"Warm grated carrot pudding with ghee, nuts & cardamom",mustTry:true},
  {id:40,name:"Kulfi",cat:"Desserts",diet:"veg",price:70,rating:4.5,desc:"Dense Indian ice cream with pistachio & cardamom"},
  {id:41,name:"Masala Chai",cat:"Beverages",diet:"veg",price:30,rating:4.6,desc:"Spiced Indian tea with ginger, cardamom & milk"},
  {id:42,name:"Mango Lassi",cat:"Beverages",diet:"veg",price:80,rating:4.7,desc:"Thick creamy yogurt smoothie blended with sweet mango",mustTry:true},
  {id:43,name:"Sweet Lassi",cat:"Beverages",diet:"veg",price:60,rating:4.3,desc:"Chilled sweetened yogurt drink with a hint of cardamom"},
  {id:44,name:"Filter Coffee",cat:"Beverages",diet:"veg",price:50,rating:4.5,desc:"Traditional South Indian drip coffee with frothy milk"},
  {id:45,name:"Jaljeera",cat:"Beverages",diet:"veg",price:40,rating:4.2,desc:"Tangy cumin-mint cooler, perfect Indian summer drink"},
  {id:46,name:"Chilli Chicken",cat:"Indo-Chinese",diet:"nonveg",price:260,rating:4.5,desc:"Crispy fried chicken tossed in spicy chilli-soy sauce"},
  {id:47,name:"Veg Manchurian",cat:"Indo-Chinese",diet:"veg",price:180,rating:4.3,desc:"Crispy veggie balls in tangy soy-chilli gravy"},
  {id:48,name:"Hakka Noodles",cat:"Indo-Chinese",diet:"veg",price:160,rating:4.2,desc:"Stir-fried noodles with vegetables & Indo-Chinese sauces"},
  {id:49,name:"Chicken Momos",cat:"Indo-Chinese",diet:"nonveg",price:140,rating:4.6,desc:"Steamed dumplings stuffed with spiced chicken filling",mustTry:true},
  {id:50,name:"Paneer 65",cat:"Indo-Chinese",diet:"veg",price:220,rating:4.4,desc:"Crispy spiced paneer fritters tossed in tangy sauce"},
  {id:51,name:"Mutton Keema",cat:"North Indian",diet:"nonveg",price:360,rating:4.5,desc:"Minced mutton cooked with aromatic spices & peas"},
  {id:52,name:"Fish Curry",cat:"South Indian",diet:"nonveg",price:300,rating:4.4,desc:"Tangy coconut-based fish curry with Kerala spices"},
  {id:53,name:"Mysore Pak",cat:"Desserts",diet:"veg",price:90,rating:4.3,desc:"Rich gram flour fudge made with ghee & sugar"},
  {id:54,name:"Dahi Puri",cat:"Street Food",diet:"veg",price:70,rating:4.4,desc:"Crispy puris filled with yogurt, chutneys & sev"},
  {id:55,name:"Malai Kofta",cat:"North Indian",diet:"veg",price:260,rating:4.5,desc:"Creamy paneer-potato dumplings in rich cashew gravy"},
  {id:56,name:"Veg Momos",cat:"Indo-Chinese",diet:"veg",price:120,rating:4.5,desc:"Steamed vegetable dumplings served with spicy chilli sauce"},
  {id:57,name:"Paneer Momos",cat:"Indo-Chinese",diet:"veg",price:140,rating:4.4,desc:"Steamed dumplings stuffed with spiced paneer filling"},
  {id:58,name:"Masala Puri",cat:"Street Food",diet:"veg",price:70,rating:4.3,desc:"Crispy puris topped with spiced potato masala & chutneys"},
  {id:59,name:"Veg Chowmein",cat:"Indo-Chinese",diet:"veg",price:150,rating:4.3,desc:"Stir-fried noodles with crunchy vegetables & Indo-Chinese sauces"},
  {id:60,name:"Chicken Chowmein",cat:"Indo-Chinese",diet:"nonveg",price:180,rating:4.5,desc:"Spicy stir-fried noodles with tender chicken & vegetables"},
  {id:61,name:"Tomato Soup",cat:"Soups",diet:"veg",price:90,rating:4.3,desc:"Creamy roasted tomato soup with herbs & croutons"},
  {id:62,name:"Sweet Corn Soup",cat:"Soups",diet:"veg",price:100,rating:4.2,desc:"Silky smooth sweet corn soup with crunchy corn kernels"},
  {id:63,name:"Hot and Sour Soup",cat:"Soups",diet:"veg",price:110,rating:4.4,desc:"Tangy & spicy Indo-Chinese soup with vegetables & tofu"},
  {id:64,name:"Manchow Soup",cat:"Soups",diet:"veg",price:120,rating:4.5,desc:"Spicy Indo-Chinese soup topped with crispy fried noodles"},
  {id:65,name:"Chicken Soup",cat:"Soups",diet:"nonveg",price:130,rating:4.4,desc:"Hearty chicken broth with tender chicken pieces & vegetables"},
  {id:66,name:"Vegetable Soup",cat:"Soups",diet:"veg",price:90,rating:4.1,desc:"Wholesome mixed vegetable soup with seasonal veggies & herbs"},
];

const CATEGORIES = [
  {name:"North Indian",gradient:"linear-gradient(135deg,#ff6b35 0%,#ff8f5e 100%)"},
  {name:"South Indian",gradient:"linear-gradient(135deg,#22c55e 0%,#86efac 100%)"},
  {name:"Biryani & Rice",gradient:"linear-gradient(135deg,#f59e0b 0%,#fcd34d 100%)"},
  {name:"Street Food",gradient:"linear-gradient(135deg,#ef4444 0%,#f87171 100%)"},
  {name:"Breads",gradient:"linear-gradient(135deg,#a855f7 0%,#c084fc 100%)"},
  {name:"Desserts",gradient:"linear-gradient(135deg,#ec4899 0%,#f472b6 100%)"},
  {name:"Beverages",gradient:"linear-gradient(135deg,#06b6d4 0%,#67e8f9 100%)"},
  {name:"Indo-Chinese",gradient:"linear-gradient(135deg,#f97316 0%,#fdba74 100%)"},
  {name:"Soups",gradient:"linear-gradient(135deg,#14b8a6 0%,#5eead4 100%)"},
];

// ===== STATE =====
let cart = [];
let activeDiet = 'all';
let activeCategory = 'all';

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

document.addEventListener('DOMContentLoaded', () => {
  renderCategories(); renderMustTry(); renderCategoryChips(); renderMenu();
  initNavbar(); initSearch(); initCart(); initDietToggle(); initFilters(); initScrollAnimations();
});

function renderCategories() {
  const grid = $('#categoriesGrid');
  const filtered = CATEGORIES.map(c => {
    const items = FOODS.filter(f => f.cat === c.name && (activeDiet==='all' || f.diet===activeDiet));
    return {...c, count: items.length};
  }).filter(c => c.count > 0);
  grid.innerHTML = filtered.map(c => {
    const catFood = FOODS.find(f => f.cat === c.name);
    const catImg = catFood ? foodImg(catFood.id) : '';
    return `<div class="category-card" data-category="${c.name}" role="button" tabindex="0">
      <img class="category-img" src="${catImg}" alt="${c.name}" loading="lazy">
      <div class="category-overlay"></div>
      <div class="category-name">${c.name}</div>
      <div class="category-count">${c.count} dishes</div>
    </div>`;
  }).join('');
  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      activeCategory = card.dataset.category;
      updateChipActive(); renderMenu();
      document.getElementById('menu').scrollIntoView({behavior:'smooth'});
    });
  });
}

function renderMustTry() {
  const grid = $('#mustTryGrid');
  const items = FOODS.filter(f => f.mustTry);
  grid.innerHTML = items.map(f => foodCardHTML(f, true)).join('');
  attachCardEvents(grid);
}

function renderMenu() {
  const grid = $('#menuGrid');
  const dietVal = $('#menuDietFilter').value;
  const sortVal = $('#menuSortFilter').value;
  const priceVal = $('#menuPriceFilter').value;
  const search = ($('#searchInput').value || '').toLowerCase();
  let items = FOODS.filter(f => {
    if (activeCategory !== 'all' && f.cat !== activeCategory) return false;
    const diet = dietVal !== 'all' ? dietVal : activeDiet;
    if (diet !== 'all' && f.diet !== diet) return false;
    if (priceVal !== 'all') { const [min, max] = priceVal.split('-').map(Number); if (f.price < min || f.price > max) return false; }
    if (search && !f.name.toLowerCase().includes(search) && !f.cat.toLowerCase().includes(search) && !f.desc.toLowerCase().includes(search)) return false;
    return true;
  });
  if (sortVal === 'price-low') items.sort((a,b) => a.price - b.price);
  else if (sortVal === 'price-high') items.sort((a,b) => b.price - a.price);
  else if (sortVal === 'rating') items.sort((a,b) => b.rating - a.rating);
  else if (sortVal === 'name') items.sort((a,b) => a.name.localeCompare(b.name));
  $('#menuResultsInfo').textContent = `Showing ${items.length} dish${items.length!==1?'es':''}`;
  $('#noResults').style.display = items.length ? 'none' : 'block';
  grid.innerHTML = items.map(f => foodCardHTML(f, false)).join('');
  attachCardEvents(grid);
}

function foodCardHTML(food, isMustTry) {
  const inCart = cart.find(c => c.id === food.id);
  const badges = [];
  badges.push(`<span class="badge ${food.diet==='veg'?'badge-veg':'badge-nonveg'}">${food.diet==='veg'?'Veg':'Non-Veg'}</span>`);
  if (food.bestseller) badges.push('<span class="badge badge-bestseller">Bestseller</span>');
  if (isMustTry && food.mustTry) badges.push('<span class="badge badge-musttry">Must Try</span>');
  const cartBtn = inCart
    ? `<div class="qty-control"><button class="qty-btn qty-minus" data-id="${food.id}">−</button><span class="qty-value">${inCart.qty}</span><button class="qty-btn qty-plus" data-id="${food.id}">+</button></div>`
    : `<button class="add-to-cart-btn" data-id="${food.id}">+ Add</button>`;
  return `<div class="food-card" data-id="${food.id}">
    <div class="food-card-img">
      <img class="food-card-img-bg" src="${foodImg(food.id)}" alt="${food.name}" loading="lazy">
      <div class="food-card-badges">${badges.join('')}</div>
      <div class="food-card-rating"><svg width="12" height="12" viewBox="0 0 24 24" fill="#ffd166" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>${food.rating}</div>
    </div>
    <div class="food-card-body">
      <div class="food-card-category">${food.cat}</div>
      <div class="food-card-name">${food.name}</div>
      <div class="food-card-desc">${food.desc}</div>
      <div class="food-card-footer">
        <span class="food-card-price">₹${food.price}</span>
        ${cartBtn}
      </div>
    </div>
  </div>`;
}

function attachCardEvents(container) {
  container.querySelectorAll('.add-to-cart-btn').forEach(btn => btn.addEventListener('click', () => addToCart(+btn.dataset.id)));
  container.querySelectorAll('.qty-plus').forEach(btn => btn.addEventListener('click', () => updateQty(+btn.dataset.id, 1)));
  container.querySelectorAll('.qty-minus').forEach(btn => btn.addEventListener('click', () => updateQty(+btn.dataset.id, -1)));
}

function renderCategoryChips() {
  const container = $('#categoryChips');
  container.innerHTML = '<button class="chip active" data-category="all">All</button>' +
    CATEGORIES.map(c => `<button class="chip" data-category="${c.name}">${c.name}</button>`).join('');
  container.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => { activeCategory = chip.dataset.category; updateChipActive(); renderMenu(); });
  });
}
function updateChipActive() { $$('#categoryChips .chip').forEach(c => c.classList.toggle('active', c.dataset.category === activeCategory)); }

function initDietToggle() {
  const btns = $$('#dietToggle .diet-btn');
  const slider = $('#dietSlider');
  function moveSlider(btn) { slider.style.left = btn.offsetLeft + 'px'; slider.style.width = btn.offsetWidth + 'px'; }
  moveSlider(btns[0]);
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active')); btn.classList.add('active');
      activeDiet = btn.dataset.diet; moveSlider(btn);
      renderCategories(); renderMustTry(); renderMenu();
    });
  });
  window.addEventListener('resize', () => moveSlider($('#dietToggle .diet-btn.active')));
}

function initFilters() { ['#menuDietFilter','#menuSortFilter','#menuPriceFilter'].forEach(s => $(s).addEventListener('change', renderMenu)); }

function addToCart(id) {
  const food = FOODS.find(f => f.id === id); if (!food) return;
  const existing = cart.find(c => c.id === id);
  if (existing) existing.qty++; else cart.push({...food, qty: 1});
  onCartChange(); showToast(`${food.name} added to cart!`);
}
function updateQty(id, delta) {
  const item = cart.find(c => c.id === id); if (!item) return;
  item.qty += delta; if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  onCartChange();
}
function onCartChange() {
  renderCartUI(); renderMenu(); renderMustTry();
  const count = cart.reduce((s,c) => s + c.qty, 0);
  const el = $('#cartCount'); el.textContent = count;
  el.classList.remove('bump'); void el.offsetWidth; el.classList.add('bump');
}
function renderCartUI() {
  const items = $('#cartItems'), empty = $('#cartEmpty'), footer = $('#cartFooter');
  if (!cart.length) { items.innerHTML = ''; empty.style.display = 'block'; footer.style.display = 'none'; return; }
  empty.style.display = 'none'; footer.style.display = 'block';
  items.innerHTML = cart.map(c => `<div class="cart-item">
      <img class="cart-item-img" src="${foodImg(c.id)}" alt="${c.name}">
      <div class="cart-item-info"><div class="cart-item-name">${c.name}</div><div class="cart-item-price">₹${c.price} × ${c.qty} = ₹${c.price*c.qty}</div></div>
      <div class="cart-item-actions"><button class="cart-item-remove" data-id="${c.id}">✕ Remove</button>
        <div class="qty-control"><button class="qty-btn qty-minus" data-id="${c.id}">−</button><span class="qty-value">${c.qty}</span><button class="qty-btn qty-plus" data-id="${c.id}">+</button></div>
      </div></div>`).join('');
  items.querySelectorAll('.qty-plus').forEach(b => b.addEventListener('click', () => updateQty(+b.dataset.id, 1)));
  items.querySelectorAll('.qty-minus').forEach(b => b.addEventListener('click', () => updateQty(+b.dataset.id, -1)));
  items.querySelectorAll('.cart-item-remove').forEach(b => b.addEventListener('click', () => { cart = cart.filter(c=>c.id!==+b.dataset.id); onCartChange(); }));
  const subtotal = cart.reduce((s,c) => s + c.price*c.qty, 0);
  const delivery = subtotal > 500 ? 0 : 40;
  const gst = Math.round(subtotal * 0.05);
  $('#cartSubtotal').textContent = '₹' + subtotal;
  $('#cartDelivery').textContent = delivery ? '₹' + delivery : 'FREE';
  $('#cartGst').textContent = '₹' + gst;
  $('#cartTotal').textContent = '₹' + (subtotal + delivery + gst);
}
function initCart() {
  const open = () => { $('#cartSidebar').classList.add('open'); $('#cartOverlay').classList.add('open'); document.body.style.overflow='hidden'; };
  const close = () => { $('#cartSidebar').classList.remove('open'); $('#cartOverlay').classList.remove('open'); document.body.style.overflow=''; };
  $('#cartBtn').addEventListener('click', open);
  $('#cartClose').addEventListener('click', close);
  $('#cartOverlay').addEventListener('click', close);
  $('#cartBrowseBtn').addEventListener('click', close);
  $('#checkoutBtn').addEventListener('click', () => { showToast('Order placed successfully!'); cart=[]; onCartChange(); close(); });
}

function initNavbar() {
  const nav = $('#navbar');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 30));
  $('#mobileMenuBtn').addEventListener('click', () => { $('#navLinks').classList.toggle('open'); $('#mobileMenuBtn').classList.toggle('active'); });
  $$('.nav-link').forEach(link => link.addEventListener('click', () => $('#navLinks').classList.remove('open')));
  const sections = ['home','categories','must-try','menu'];
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => { const el = document.getElementById(id); if (el && el.offsetTop - 120 <= window.scrollY) current = id; });
    $$('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.section === current));
  });
}

function initSearch() {
  const container = $('#searchBarContainer');
  $('#searchToggle').addEventListener('click', () => { container.classList.toggle('open'); if(container.classList.contains('open')) $('#searchInput').focus(); });
  $('#searchClose').addEventListener('click', () => { container.classList.remove('open'); $('#searchInput').value=''; renderMenu(); });
  $('#searchInput').addEventListener('input', renderMenu);
}

function showToast(msg) {
  const container = $('#toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast'; toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 2800);
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; }});
  }, {threshold: 0.1});
  $$('.food-card, .category-card').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity .6s ease, transform .6s ease';
    observer.observe(el);
  });
}
