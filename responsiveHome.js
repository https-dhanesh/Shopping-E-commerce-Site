const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
function fun1() {
  window.location.href = 'sproduct.html';
}
function fun2() {
  window.location.href = 'sproduct2.html';
}
function fun3() {
  window.location.href = 'sproduct3.html';
}
function fun4() {
  window.location.href = 'sproduct4.html';
}

const product = [
  {
    id: 0,
    image: 's1.jpg',
    title: 'Printed Half Sleeve',
    price: 1999,
  },
  {
    id: 1,
    image: 's2.jpg',
    title: 'Lymio Casual Shirt',
    price: 1799,
  },
  {
    id: 2,
    image: 's3.jpg',
    title: 'Printed Cotton Half Shirt',
    price: 1699,
  },
  {
    id: 3,
    image: 's4.jpg',
    title: 'Half Sleeve Lycra Shirt',
    price: 1599,
  },
  {
    id: 4,
    image: 's5.jpg',
    title: 'Half Sleeve Multicolor',
    price: 1999,
  },
  {
    id: 5,
    image: 's6.jpg',
    title: 'Mens Designer Half Shirt',
    price: 1699,
  },
  {
    id: 6,
    image: 'p1.png',
    title: 'Slim Mid Rise Dark Blue Jeans',
    price: 1499,
  },
  {
    id: 7,
    image: 'p2.png',
    title: 'Slim Mid Rise Light Blue Jeans',
    price: 1499,
  },
  {
    id: 8,
    image: 'p3.png',
    title: 'Men Cargos',
    price: 1199,
  },
  {
    id: 9,
    image: 'p4.png',
    title: 'Blue Cotton Blend Trousers',
    price: 1299,
  },
  {
    id: 10,
    image: 'p5.jpg',
    title: 'Plain Cotton Mens Formal Pant',
    price: 1599,
  },
  {
    id: 11,
    image: 'p6.jpg',
    title: 'Green Cotton Cargo Pant',
    price: 1999,
  },
  {
    id: 12,
    image: 't1.jpg',
    title: 'Black T-Shirt for mens',
    price: 699,
  },
  {
    id: 13,
    image: 't2.jpg',
    title: 'Men Printed Round Neck T-shirt',
    price: 699,
  },
  {
    id: 14,
    image: 't3.jpg',
    title: 'Round Neck Blue T-Shirt',
    price: 699,
  },
  {
    id: 15,
    image: 't4.jpg',
    title: 'Round Neck Grey T-Shirt',
    price: 599,
  },
  {
    id: 16,
    image: 't5.jpg',
    title: 'Classic Small Logo White T-Shirt',
    price: 599,
  },
  {
    id: 17,
    image: 't6.jpg',
    title: 'Printed Black and White T-Shirt',
    price: 899,
  },
  {
    id: 18,
    image: 'br1.jpg',
    title: 'Grey Shorts for Mens',
    price: 1999,
},
{
    id: 19,
    image: 'br2.jpg',
    title: 'Grey Jeans Short',
    price: 1499,
},
{
    id: 20,
    image: 'br3.jpg',
    title: 'Light Blue Jeans Short',
    price: 1599,
},
{
    id: 21,
    image: 'br4.jpg',
    title: 'Training Shorts',
    price: 999,
},
{
    id: 22,
    image: 'br5.jpg',
    title: 'Green Solid Slim Fit Shorts',
    price: 1599,
},
{
    id: 23,
    image: 'br6.jpg',
    title: 'Sports Shorts',
    price: 999,
}

];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
  var { image, title, price } = item;
  return (
    `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>₹${price}.00</h2>` +
    "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
    `</div>
      </div>`
  )
}).join('')

var cart = [];

function addtocart(a) {
  cart.push({ ...categories[a] });
  displaycart();
}
function delElement(a) {
  cart.splice(a, 1);
  displaycart();
}

function displaycart() {
  let j = 0, total = 0;
  document.getElementById("count").innerHTML = cart.length;
  if (cart.length == 0) {
    document.getElementById('cartItem').innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "₹" + 0 + ".00";
  }
  else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => {
      var { image, title, price } = items;
      total = total + price;
      document.getElementById("total").innerHTML = "₹" + total + ".00";
      return (
        `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>₹${price}.00</h2>` +
        "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
      );
    }).join('');
  }
}

function fun5() {
  window.location.href = 'shirt.html';
}
function fun6() {
  window.location.href = 'pant.html';
}
function fun7() {
  window.location.href = 'tshirt.html';
}
function fun8() {
  window.location.href = 'shorts.html';
}
function fun9() {
  window.location.href = 'belt.html';
}
function fun10() {
  window.location.href = 'hoodie.html';
}
function fun11() {
  window.location.href = 'bleasure.html';
}
function fun12() {
  window.location.href = 'kurta.html';
}
function funindex() {
  window.location.href = 'index.html';
}
function funshop() {
  window.location.href = 'shop.html';
}
function funabout() {
  window.location.href = 'about.html';
}
function funcontact() {
  window.location.href = 'contact.html';
}
function funsignin() {
  window.location.href = 'signin.html';
}

document.getElementById("buyButton").addEventListener("click", function() {
  document.getElementById("purchasePage").style.display = "block";
});
function buy() {
  window.location.href = 'buy.html';
}