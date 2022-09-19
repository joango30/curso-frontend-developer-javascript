// menu Desktop
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHimIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

menuCarritoIcon.addEventListener('click', () => {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isMenuEmailClosed = menuDesktop.classList.contains('inactive');
    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    }
    if (!isMenuEmailClosed) {
        menuDesktop.classList.add('inactive');     
    }
    aside.classList.toggle('inactive');
});

menuEmail.addEventListener("click", ()=> {
    const isMenuCarritoIconClosed = menuCarritoIcon.classList.contains('inactive');
    if (!isMenuCarritoIconClosed) {
        aside.classList.add('inactive');         
    }
    menuDesktop.classList.toggle('inactive');
});

menuHimIcon.addEventListener('click', ()=> {
    const isMenuCarritoIconClosed = menuCarritoIcon.classList.contains('inactive');
    if(!isMenuCarritoIconClosed){
        aside.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
});

// list product

// const productList = [];
// productList.push({
//     name:"Bike",
//     price:120,
//     image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
// }); 

// productList.push({
//     name:"tennis",
//     price:120,
//     image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
// });

// productList.push({
//     name:"computador",
//     price:120,
//     image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
// });

//  <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>

// for (product of productList) {
//     const productCard = document.createElement("div");
//     productCard.classList.add("product-card")

//     const productImg = document.createElement("img");
//     productImg.setAttribute("src",product.image)

//     const productInfo= document.createElement("div");
//     productCard.classList.add("product-info")

//     const productInfoDiv= document.createElement("div");

//     const productPrice= document.createElement("p");
//     productPrice.innerText = "$" + product.name;
//     const productName= document.createElement("p");
//     productName.innerText =  product.name;

//     productInfoDiv.appendChild(productPrice);
//     productInfoDiv.appendChild(productName);



//     const productInfoFigure= document.createElement("div");
//     const productImgCart = document.createElement("img");
//     productImgCart.setAttribute("src","./icons/bt_add_to_cart.svg");

//     productInfoFigure.appendChild(productImgCart);
//     productInfo.appendChild(productInfoFigure);
//     productInfo.appendChild(productInfoDiv);

//     productCard.appendChild(productImg);
//     productCard.appendChild(productInfo);

//     cardsContainer.appendChild(productCard);
      
// }

// for (product of productList) {
//     const htmlCards = `<div class="product-card">
//     <img src= "${product.img}" class="product-img> 
//     <div class="product-info">
//       <div>
//         <p>$${product.price}</p>
//         <p>${product.name}</p>
//       </div>
//       <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//       </figure>
//     </div>
//   </div>`

//   const cardsCOntainers = document.querySelector('.cards-container');
//   cardsContainer.innerHTML += htmlCards

const productList=[];
productList.push({
    name:'Bike',
    price:120,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
   
    productList.push({
    name:'Pantalla',
    price:220,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
   
    productList.push({
    name:'Compu',
    price:620,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',});
        
            function renderProducts(arr){
                for(product of arr){
                    const productCard=document.createElement('div');
                    productCard.classList.add('product-card');

                    const productImg=document.createElement('img');
                    productImg.setAttribute('src',product.image);

                    const productInfo=document.createElement('div');
                    productInfo.classList.add('product-info');
                   
                    const productInfoDiv=document.createElement('div');
                   
                    const productPrice=document.createElement('p');
                    productPrice.innerText='$'+product.price;
                   
                    const productName=document.createElement('p');
                    productName.innerText=product.name;
                   
                    productInfoDiv.appendChild(productPrice);
                    productInfoDiv.appendChild(productName);
                   
                    const productInfoFigure=document.createElement('figure');
                   
                    const productImgCart=document.createElement('img');
                    productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
                    productInfoFigure.appendChild(productImgCart);
                   
                    productInfo.appendChild(productInfoDiv);
                    productInfo.appendChild(productInfoFigure);
                    productCard.appendChild(productImg);
                    productCard.appendChild(productInfo);
                    cardsContainer.appendChild(productCard);
                }}
renderProducts(productList);

