// Header and Footer Loading for Multi-Tools Hub

// Load header dynamically
function loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">
                    <a class="navbar-brand" href="../index.html">
                        <i class="fas fa-tools me-2"></i>Multi-Tools Hub
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="../index.html">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Categories
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#" data-category="image">Image Tools</a></li>
                                    <li><a class="dropdown-item" href="#" data-category="seo">SEO Tools</a></li>
                                    <li><a class="dropdown-item" href="#" data-category="text">Text Tools</a></li>
                                    <li><a class="dropdown-item" href="#" data-category="developer">Developer Tools</a></li>
                                    <li><a class="dropdown-item" href="#" data-category="calculator">Calculators</a></li>
                                    <li><a class="dropdown-item" href="#" data-category="converter">Converters</a></li>
                                    <li><a class="dropdown-item" href="#" data-category="security">Security</a></li>
                                    <li><a class="dropdown-item" href="#" data-category="social">Social Media</a></li>
                                    <li><a class="dropdown-item" href="#" data-category="misc">Miscellaneous</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
}

// Load footer dynamically
function loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
            <footer class="footer bg-dark text-white py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <h5><i class="fas fa-tools me-2"></i>Multi-Tools Hub</h5>
                            <p>Your one-stop destination for free online tools. Convert, calculate, analyze, and create with ease.</p>
                            <div class="social-links">
                                <a href="#" class="text-white me-3"><i class="fab fa-facebook"></i></a>
                                <a href="#" class="text-white me-3"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="text-white me-3"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="text-white me-3"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-2 mb-4">
                            <h5>Categories</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-white-50" data-category="image">Image Tools</a></li>
                                <li><a href="#" class="text-white-50" data-category="seo">SEO Tools</a></li>
                                <li><a href="#" class="text-white-50" data-category="text">Text Tools</a></li>
                                <li><a href="#" class="text-white-50" data-category="developer">Developer Tools</a></li>
                                <li><a href="#" class="text-white-50" data-category="calculator">Calculators</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 mb-4">
                            <h5>More Tools</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-white-50" data-category="converter">Converters</a></li>
                                <li><a href="#" class="text-white-50" data-category="security">Security</a></li>
                                <li><a href="#" class="text-white-50" data-category="social">Social Media</a></li>
                                <li><a href="#" class="text-white-50" data-category="misc">Miscellaneous</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <h5>Contact Us</h5>
                            <p><i class="fas fa-envelope me-2"></i>hanzala550hanzala@gmail.com</p>
                            <p><i class="fas fa-phone me-2"></i>03092284155</p>
                            <p><i class="fas fa-map-marker-alt me-2"></i>hajiwala</p>
                        </div>
                    </div>
                    <hr class="my-4 bg-light">
                    <div class="row">
                        <div class="col-md-6">
                            <p class="mb-0">&copy; 2024 Multi-Tools Hub. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <a href="#" class="text-white-50 me-3">Privacy Policy</a>
                            <a href="#" class="text-white-50 me-3">Terms of Service</a>
                            <a href="#" class="text-white-50">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Call the functions when the window loads
window.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});
