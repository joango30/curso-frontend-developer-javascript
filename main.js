// menu Desktop
const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu');
const menuHimIcon = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('#shoppingCartContainer');
const productDetail = document.querySelector('#productDetails');
const cardsContainer = document.querySelector('.cards-container');
const closeIcon = document.querySelector('.product-detail-close');


menuCarritoIcon.addEventListener('click', () => {
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isMenuEmailClosed = menuDesktop.classList.contains('inactive');
    if(!isMobileMenuClosed){
        menuMobile.classList.add('inactive');
    }
    if (!isMenuEmailClosed) {
        menuDesktop.classList.add('inactive');     
    }
    const isOpenProduct = productDetail.classList.contains('inactive')
    if (!isOpenProduct){
        productDetail.classList.add('inactive');
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
    const isOpenProduct = productDetail.classList.contains('inactive')
    if (!isOpenProduct){
        productDetail.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
});

closeIcon.addEventListener('click', ()=>{
    productDetail.classList.toggle('inactive');
});

function openProduct(){
    const isCarritoIconClosed = aside.classList.contains('inactive');
    if(!isCarritoIconClosed){
        aside.classList.add('inactive');
    }
    productDetail.classList.remove('inactive')
}

const productList =[];
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
                    productImg.addEventListener('click', openProduct);
                    
                    
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