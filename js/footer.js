const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="images/logo2.png" class="logo" alt="">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Women</li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Outter</a></li>
            <li><a href="#" class="footer-link">T-shirt</a></li>
            <li><a href="#" class="footer-link">Shorts</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Jacket</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="#" class="footer-link">Shirts</a></li>
            <li><a href="#" class="footer-link">Outter</a></li>
            <li><a href="#" class="footer-link">T-shirt</a></li>
            <li><a href="#" class="footer-link">Shorts</a></li>
            <li><a href="#" class="footer-link">Shoes</a></li>
            <li><a href="#" class="footer-link">Jacket</a></li>
        </ul>
    </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Penshoppe is a casual wear retail brand based in the Philippines, established in 1986. Penshoppe is the flagship brand of Golden ABC, Inc., a fashion house based in the Philippines. Established in Cebu in 1986, the brand initially established
    itself in the Visayas and Mindanao markets. Penshoppe then expanded to Metro Manila, with its first boutique opening its doors in SM City North EDSA in 1991. Since then, Penshoppe's network of stores has grown to over 300 sites.</p>
<p class="info">support emails - c.aimyonngl@gmail.com</p>
<p class="info">Telephone 0813 7014 7691</p>
<div class="footer-sosmed-container">
    <div>
        <a href="feedback.html" class="social-link">Give me your feedback</a>
        <a href="#" class="social-link">Privacy Pages</a>
    </div>
    <div>
        <a href="#" class="social-link">Instagram</a>
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">Tiktok</a>
    </div>
</div>
<p class="footer-credit">Cindy Nainggolan</p>
    `;
}
createFooter();