const product = [
  {
    id: 0,
    image: 'p1.png',
    title: 'Slim Mid Rise Dark Blue Jeans',
    price: 1499,
  },
  {
    id: 1,
    image: 'p2.png',
    title: 'Slim Mid Rise Light Blue Jeans',
    price: 1499,
  },
  {
    id: 2,
    image: 'p3.png',
    title: 'Men Cargos',
    price: 1199,
  },
  {
    id: 3,
    image: 'p4.png',
    title: 'Blue Cotton Blend Trousers',
    price: 1299,
  },
  {
    id: 4,
    image: 'p5.jpg',
    title: 'Plain Cotton Mens Formal Pant',
    price: 1599,
  },
  {
    id: 5,
    image: 'p6.jpg',
    title: 'Green Cotton Cargo Pant',
    price: 1999,
  }
];
const categories = [...new Set(product.map((item)=>
  {return item}))]
  let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
  var {image, title,price} = item;
  return(
      `<div class='box'>
          <div class='img-box'>
              <img class='images' src=${image}></img>
          </div>
      <div class='bottom'>
      <p>${title}</p>
      <h2>₹${price}.00</h2>`+
      "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
      `</div>
      </div>`
  )
}).join('')

var cart =[];

function addtocart(a){
  cart.push({...categories[a]});
  displaycart();
}
function delElement(a){
  cart.splice(a, 1);
  displaycart();
}

function displaycart(){
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length;
  if(cart.length==0){
      document.getElementById('cartItem').innerHTML = "Your cart is empty";
      document.getElementById("total").innerHTML = "₹"+0+".00";
  }
  else{
      document.getElementById("cartItem").innerHTML = cart.map((items)=>
      {
          var {image, title,price} = items;
          total=total+price;
          document.getElementById("total").innerHTML = "₹"+total+".00";
          return(
              `<div class='cart-item'>
              <div class='row-img'>
                  <img class='rowimg' src=${image}>
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size: 15px;'>₹${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
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