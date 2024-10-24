const product = [
    {
        id: 0,
        image: 'k1.jpg',
        title: 'Grey',
        price: 999,
    },
    {
        id: 1,
        image: 'k2.jpg',
        title: 'Blue',
        price: 999,
    },
    {
        id: 2,
        image: 'k3.jpg',
        title: 'Red',
        price: 999,
    },
    {
        id: 3,
        image: 'k4.jpg',
        title: 'Black',
        price: 999,
    },
    {
        id: 4,
        image: 'k5.jpg',
        title: 'Orange',
        price: 999,
    },
    {
        id: 5,
        image: 'k6.jpg',
        title: 'Green',
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
  function buy() {
    window.location.href = 'buy.html';
  }
  document.getElementById("buyButton").addEventListener("click", function() {
    document.getElementById("purchasePage").style.display = "block";
});