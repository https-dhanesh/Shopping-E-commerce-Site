const product = [
    {
        id: 0,
        image: 'f1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 1999,
    },
    {
        id: 1,
        image: 's1.png',
        title: 'Air Pods Pro',
        price: 1499,
    },
    {
        id: 2,
        image: 's5.png',
        title: '250D DSLR Camera',
        price: 1599,
    },
    {
        id: 3,
        image: 's9.png',
        title: 'Head Phones',
        price: 999,
    },
    {
        id: 4,
        image: 'image/gg-1.jpg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
    },
    {
        id: 5,
        image: 'image/hh-2.jpg',
        title: 'Air Pods Pro',
        price: 60,
    },
    {
        id: 6,
        image: 'image/ee-3.jpg',
        title: '250D DSLR Camera',
        price: 230,
    },
    {
        id: 7,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 100,
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
        <h2>$ ${price}.00</h2>`+
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
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title,price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}