window.alert("New Summer Styles are here!!");



document.getElementById('view-summer-styles').addEventListener('click', () => {
const newDiv = document.createElement('div');
newDiv.id = 'bestseller-0';
newDiv.setAttribute('role', 'img');
newDiv.setAttribute('aria-label', '[Image of Linen Safari Shirt]');
newDiv.style.cssText = `
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 100px 1fr;
  background-image: linear-gradient(to top, black, transparent), url(images/bestseller-0.png);
  background-repeat: no-repeat;
  height: 474px;
  width: 316px;
  border-radius: 10px;
`;


newDiv.innerHTML = `
  <p class="product-name">Linen Safari Shirt</p>
  <p class="product-price"> ₹3,550</p>
  <button class="wishlist">
    <img src="images/wishlist.png" alt="wishlist icon">
  </button>
`;


const parent = document.getElementById('bestseller-1').parentNode;
parent.prepend(newDiv);





const newDiv2 = document.createElement('div');
newDiv2.id = 'bestseller-9';
newDiv2.setAttribute('role', 'img');
newDiv2.setAttribute('aria-label', '[Image of Short Knit Dress]');
newDiv2.style.cssText = `
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 100px 1fr;
  background-image: linear-gradient(to top, black, transparent), url(images/bestseller-9.png);
  background-repeat: no-repeat;
  height: 474px;
  width: 316px;
  border-radius: 10px;
`;


newDiv2.innerHTML = `
  <p class="product-name">Short Knit Dress</p>
  <p class="product-price"> ₹4,350</p>
  <button class="wishlist">
    <img src="images/wishlist.png" alt="wishlist icon">
  </button>
`;

const parent2 = document.getElementById('bestseller-1').parentNode;
parent2.append(newDiv2); })