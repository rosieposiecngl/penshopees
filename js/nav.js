const createNavbar = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="images/logo.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="search.html"><img src="images/user.png" alt=""></a>
        <a href="404.html"><img src="images/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-tiem"><a href="mini1.html" class=link>Home</a></li>
    <li class="link-tiem"><a href="product.html" class=link>Women</a></li>
    <li class="link-tiem"><a href="#" class=link>Men</a></li>
    <li class="link-tiem"><a href="#" class=link>Accessories</a></li>
</ul>
</nav>`;
}
createNavbar();