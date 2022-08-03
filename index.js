const app = document.getElementById('app');
(function () {
    const title = document.querySelector('title')
    const login = `
    <div class="login">
        <div class="login__form-container">
            <img class="login__img" src="../assets/logos/logo_yard_sale.svg" alt="logo">

            <form action="/" class="login__form">
                <label for="email" class= "login__email">Email address</label>
                <input type="text" id="email" placeholder="camilayokoo@gmail.com" class="input input-email">
                <label for="re-enter-password" class="login__password">Password</label>
                <input type="password" id="re-enter-password" placeholder="**************" class="input input-password">
                <input type="submit" value="Log in" class="login__button primary-button">
                <a href="/">Forgot my password</a>
            </form>
            <button class="second-button">Sign up</button>
        </div>
    </div>
    `
    app.innerHTML = login;
    title.innerHTML = 'Login';
})();

const email = document.getElementById('email');
const password = document.getElementById('re-enter-password');
const submit = document.querySelector('.login__button');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passwordValue = password.value;
    const user = [{
        email: 'sebuscaroberth@gmail.com',
        password: '1104017400'
    }];
    const userEmail = user.find(user => user.email === emailValue);
    const userPassword = user.find(user => user.password === passwordValue);

    const menuDesktop = document.createElement('div');
    menuDesktop.classList.add('desktop-menu');
    menuDesktop.style.display = 'none';
    menuDesktop.innerHTML = `
    <ul>
        <li><a href="/" class="title">My orders</a></li>
        <li><a href="/">My account</a></li>
        <li><a href="/">Sign out</a></li>
    </ul>
    `
    if (userEmail && userPassword) {
        const header = `
            <div class="header">
                <nav class= "navbar">
                    <img src="../assets/icons/icon_menu.svg" alt="menu" class="menu"> 
                    <div class="navbar-left">
                    <img src="../assets/logos/logo_yard_sale.svg" alt="logo" class="logo">

                    <ul>
                        <li><a href="/">All</a></li>
                        <li><a href="/">Clothes</a></li>
                        <li><a href="/">Electronics</a></li>
                        <li><a href="/">Furniture</a></li>
                        <li><a href="/">Toys</a></li>
                        <li><a href="/">Others</a></li>
                    </ul>
                    </div>

                    <div class="navbar-rigth">
                        <ul>
                            <li class="my-account"></li>
                            <li class= "navbar-shopping-cart">
                                <img src="../assets/icons/icon_shopping_cart_notification.svg" alt="cart">
                                <div>20</div>
                            </li>
                        </ul>
            </div>
                </nav>
            </div>
        `
        app.innerHTML = header;
        const title = document.querySelector('title')
        title.innerHTML = 'Yard Sale';
        const navbar = document.querySelector('.navbar');
        const myAccount = document.querySelector('.my-account');
        myAccount.innerHTML = emailValue;
        navbar.appendChild(menuDesktop);

        //   si se hace click en my account una vez se abre el menu
        myAccount.addEventListener('click', (ev) => {
            if (menuDesktop.style.display === 'none') {
                menuDesktop.style.display = 'block';
                productDetails.style.display = "none";
            }
            else {
                menuDesktop.style.display = 'none';
            }
        }
        )
        //    si el ancho de la pantalla es menor a 962px se oculta el menu
        window.addEventListener('resize', () => {
            if (window.innerWidth < 962) {
                menuDesktop.style.display = 'none';
            }
        }
        )

    }
    else {
        alert('Invalid email or password');
    }

    const menu = document.querySelector('.menu');
    const menuMobile = document.createElement('div');
    menuMobile.classList.add('mobile-menu');
    menuMobile.style.display = 'none';
    menuMobile.innerHTML = `
    <div class="categories">
            <ul>
                <li><a href="/">CATEGORIES</a></li>
                <li><a href="/">All</a></li>
                <li><a href="/">Clothes</a></li>
                <li><a href="/">Electronics</a></li>
                <li><a href="/">Furnitures</a></li>
                <li><a href="/">Toys</a></li>
                <li><a href="/">Others</a></li>
            </ul>
        </div>
        <div class="my-section1">
            <ul>
                <li><a href="/">My orders</a></li>
                <li><a href="/">My account</a></li>
            </ul>
        </div>
        <div class="my-section2">
            <ul>
                <li><a href="/">sebuscaroberth@gmail.com/a></li>
                <li><a href="/">Sign out</a></li>
            </ul>
        </div>
    `
    app.appendChild(menuMobile);
    menu.addEventListener('click', (ev) => {
        if (menuMobile.style.display === 'none') {
            menuMobile.style.display = 'block';
            productDetails.style.display = "none";
        }
        else {
            menuMobile.style.display = 'none';
            productDetails.style.display = "block";
        }
    })

    //    si el ancho de la pantalla es mayor a 640px se oculta el menu
    window.addEventListener('resize', () => {
        if (window.innerWidth > 640) {
            menuMobile.style.display = 'none';
        }
    })

    const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
    const productDetails = document.createElement('aside');
    productDetails.classList.add('product-details');
    productDetails.style.display = 'none';
    productDetails.innerHTML = `
    <div class="title-container">
    <img src="../assets/icons/flechita.svg" alt="arrow">
    <p class="title">Shopping Cart</p>
</div>
<div class="my-order-content">
    <div class="shopping-cart">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg" alt="bike">
            <p>Bike</p>
        </figure>
        <div>
            <p>$ 120,00</p>
            <img src="../assets/icons/icon_close.png" alt="close">
        </div>
    </div>

    <div class="shopping-cart">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg" alt="bike">
            <p>Bike</p>
        </figure>
        <div>
            <p>$ 120,00</p>
            <img src="../assets/icons/icon_close.png" alt="close">
        </div>
    </div>

    <div class="shopping-cart">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg" alt="bike">
            <p>Bike</p>
        </figure>
        <div>
            <p>$ 120,00</p>
            <img src="../assets/icons/icon_close.png" alt="close">
        </div>
    </div>

    <div class="shopping-cart">
        <figure>
            <img src="https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg" alt="bike">
            <p>Bike</p>
        </figure>
        <div>
            <p>$ 120,00</p>
            <img src="../assets/icons/icon_close.png" alt="close">
        </div>
    </div>

    <div class="my-order-content-summary">
        <p>
            <span>Total</span>
        </p>
        <p>$560.00</p>
    </div>
    <button class="primary-button">
        Checkout
    </button>
</div>
`
    app.appendChild(productDetails);
    navbarShoppingCart.addEventListener('click', (ev) => {
        if (productDetails.style.display === 'none') {
            productDetails.style.display = 'block';
            menuMobile.style.display = "none";
            menuDesktop.style.display = "none";
        }
        else {
            productDetails.style.display = 'none';
            window.addEventListener('resize', () => {
                if (window.innerWidth > 640) {
                    menuMobile.style.display = 'none';
                }
            })

        }
    })

    /* lista de productos del homePage */

    const mainContainer = document.createElement("section");
    mainContainer.classList.add('main-container');

    const cardContainer = document.createElement("div");
    cardContainer.classList.add('card-container');

    mainContainer.appendChild(cardContainer);

    const dataCard = [];
    for (let i = 0; i < 100; i++) {
        dataCard.push({
            id: i,
            name: 'Bike',
            price: '$120.00',
            image: 'https://cdn.pixabay.com/photo/2013/10/03/23/19/bike-190483_960_720.jpg',
            icon: '../assets/icons/bt_add_to_cart.svg',
        })
    }

    function renderCard(arr){
        for (product of dataCard) {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class= "product-info">
                <div>
                    <p>${product.price}</p>
                    <p>${product.name}</p>
                </div>
                <figure>
                    <img src="${product.icon}" alt="add">
                </figure>
                </div>
            `
            cardContainer.appendChild(card);
        }
    }
    renderCard(dataCard);

    app.appendChild(mainContainer);

})
