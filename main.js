//Add Product

const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
const userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
})

minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if (userInputNumber <= 0) {
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
})

//Added to Cart

const addToCartBtn = document.querySelector('.input__button');
const cartNotification = document.querySelector('.header__cart--notification');
const cartModalPrice = document.querySelector('.cart-modal__price');

let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', () => {


    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';

    drawProductInModal();

    if (lastValue == 0) {
        cartNotification.style.display = 'none';
    }
})

const cartIcon = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const ProductContainer = document.querySelector('.cart-modal__checkout-container');

cartIcon.addEventListener('click', () => {
    cartModal.classList.toggle('show');
});

//Delete Product

function deleteProduct() {
    const deleteProductBtn = document.querySelector('.cart-modal__delete');

    deleteProductBtn.addEventListener('click', () => {
        ProductContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>'
        lastValue = 0;
        cartNotification.innerText = lastValue;
        cartNotification.style.display = 'none';
    })
}

//Image change

const imageContainer = document.querySelector('.gallery__image-container')
const nextGalleryBtn = document.querySelector('.gallery__next')
const previousGalleryBtn = document.querySelector('.gallery__previous')
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () => {
    changeNextImage(imageContainer);
})

previousGalleryBtn.addEventListener('click', () => {
    changePreviousImage(imageContainer)
})


//Show modal gallery

const ImageModal = document.querySelector('.modal-gallery__background')
const closeModalBtn = document.querySelector('.modal-gallery__close')

imageContainer.addEventListener('click', () => {
    ImageModal.style.display = 'grid'
})

closeModalBtn.addEventListener('click', () => {
    ImageModal.style.display = 'none';
})


//Change of images from thumbnails

let thumbnails = document.querySelectorAll('.gallery__thumbnails');
thumbnails = [...thumbnails]

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', event => {
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`;
    })
})

//Change of images from thumbnails in modal

let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
let modalImgContainer = document.querySelector('.modal-gallery__image-container')
modalThumbnails = [...modalThumbnails]

modalThumbnails.forEach(modalThumbnail => {
    modalThumbnail.addEventListener('click', event => {
        modalImgContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`;
    })
});

//Image change modal

const previousModalBtn = document.querySelector('.modal-gallery__previous')
const nextModalBtn = document.querySelector('.modal-gallery__next')

previousModalBtn.addEventListener('click', () => {
    changePreviousImage(modalImgContainer)
})

nextModalBtn.addEventListener('click', () => {
    changeNextImage(modalImgContainer);
})

//Modal NavBar

const modalBtn = document.querySelector('.header__menu')
const modalNavBar = document.querySelector('.modal-navbar__background')
const closeBtnNavBar = document.querySelector('.modal-navbar__close-icon')

modalBtn.addEventListener('click', () => {
    modalNavBar.style.display = 'block';
})

closeBtnNavBar.addEventListener('click', () => {
    modalNavBar.style.display = 'none';
})

//Functions

function drawProductInModal() {
    ProductContainer.innerHTML = `
    <div class="cart-modal__details-container">
      <img
        class="cart-modal__image"
        src="./images/image-product-1-thumbnail.jpg"
        alt=""
      />
      <div>
        <p class="cart-modal__product">Fall Limited Edition Sneakers</p>
        <p class="cart-modal__price">$125 x ${lastValue} <span>$${lastValue * 125}.00</span></p>
      </div>
      <img
        class="cart-modal__delete"
        src="./images/icon-delete.svg"
        alt="delete"
      />
    </div>
    <button class="cart-modal__checkout">Check out</button>`
    deleteProduct();
}

function changeNextImage(imgContainer) {
    if (imgIndex == 4) {
        imgIndex = 0;
    }
    imgIndex++;
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}

function changePreviousImage(imgContainer) {
    if (imgIndex == 1) {
        imgIndex = 5;
    }
    imgIndex--;
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}