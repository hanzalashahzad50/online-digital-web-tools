// Main JavaScript for Multi-Tools Website

// Tool data structure
const tools = [
    // Image Tools
    { name: "Image to PNG Converter", category: "image", file: "tools/image-to-png.html", icon: "fas fa-image", description: "Convert images to PNG format" },
    { name: "Image to JPG Converter", category: "image", file: "tools/image-to-jpg.html", icon: "fas fa-file-image", description: "Convert images to JPG format" },
    { name: "Image Resizer", category: "image", file: "tools/image-resizer.html", icon: "fas fa-expand-arrows-alt", description: "Resize images to any dimension" },
    { name: "Image Compressor", category: "image", file: "tools/image-compressor.html", icon: "fas fa-compress-alt", description: "Compress images without losing quality" },
    { name: "Image Cropper", category: "image", file: "tools/image-cropper.html", icon: "fas fa-crop-alt", description: "Crop images to desired size" },
    { name: "Image to Base64", category: "image", file: "tools/image-to-base64.html", icon: "fas fa-code", description: "Convert images to Base64 string" },
    { name: "GIF Maker", category: "image", file: "tools/gif-maker.html", icon: "fas fa-film", description: "Create animated GIFs from images" },
    { name: "QR Code Generator", category: "image", file: "tools/qr-code-generator.html", icon: "fas fa-qrcode", description: "Generate QR codes for any text or URL" },
    { name: "Screenshot to PDF", category: "image", file: "tools/screenshot-to-pdf.html", icon: "fas fa-file-pdf", description: "Convert screenshots to PDF" },

    // SEO Tools
    { name: "Meta Tag Generator", category: "seo", file: "tools/meta-tag-generator.html", icon: "fas fa-tags", description: "Generate meta tags for SEO" },
    { name: "Keyword Density Checker", category: "seo", file: "tools/keyword-density-checker.html", icon: "fas fa-percentage", description: "Check keyword density in text" },
    { name: "Sitemap Generator", category: "seo", file: "tools/sitemap-generator.html", icon: "fas fa-sitemap", description: "Generate XML sitemaps" },
    { name: "Backlink Checker", category: "seo", file: "tools/backlink-checker.html", icon: "fas fa-link", description: "Check backlinks for any domain" },
    { name: "SERP Checker", category: "seo", file: "tools/serp-checker.html", icon: "fab fa-google", description: "Check search engine results" },
    { name: "Broken Link Checker", category: "seo", file: "tools/broken-link-checker.html", icon: "fas fa-unlink", description: "Find broken links on your website" },

    // Developer Tools
    { name: "JSON Formatter", category: "developer", file: "tools/json-formatter.html", icon: "fas fa-code", description: "Format and validate JSON" },
    { name: "Base64 Encoder/Decoder", category: "developer", file: "tools/base64-encoder-decoder.html", icon: "fas fa-exchange-alt", description: "Encode and decode Base64 strings" },
    { name: "Color Picker", category: "developer", file: "tools/color-picker.html", icon: "fas fa-palette", description: "Pick and convert color codes" },
    { name: "DNS Lookup", category: "developer", file: "tools/dns-lookup.html", icon: "fas fa-server", description: "Perform DNS lookups" },
    { name: "IP Lookup", category: "developer", file: "tools/ip-lookup.html", icon: "fas fa-network-wired", description: "Lookup IP address information" },
    { name: "Ping Test", category: "developer", file: "tools/ping-test.html", icon: "fas fa-network-wired", description: "Test network connectivity" },
    { name: "Port Scanner", category: "developer", file: "tools/port-scanner.html", icon: "fas fa-plug", description: "Scan for open ports" },
    { name: "Subnet Calculator", category: "developer", file: "tools/subnet-calculator.html", icon: "fas fa-calculator", description: "Calculate subnets and CIDR" },
    { name: "Traceroute", category: "developer", file: "tools/traceroute.html", icon: "fas fa-route", description: "Trace network route to host" },
    { name: "SSL Checker", category: "developer", file: "tools/ssl-checker.html", icon: "fas fa-lock", description: "Check SSL certificate information" },

    // Network Tools
    { name: "Bandwidth Calculator", category: "network", file: "tools/bandwidth-calculator.html", icon: "fas fa-tachometer-alt", description: "Calculate bandwidth requirements" },
    { name: "MAC Address Lookup", category: "network", file: "tools/mac-address-lookup.html", icon: "fas fa-network-wired", description: "Lookup MAC address vendor" },
    { name: "MD5 Hash Generator", category: "security", file: "tools/md5-hash-generator.html", icon: "fas fa-hashtag", description: "Generate MD5 hashes" },

    // Calculator Tools
    { name: "Percentage Calculator", category: "calculator", file: "tools/percentage-calculator.html", icon: "fas fa-percentage", description: "Calculate percentages" },
    { name: "Age Calculator", category: "calculator", file: "tools/age-calculator.html", icon: "fas fa-birthday-cake", description: "Calculate age from birth date" },
    { name: "BMI Calculator", category: "calculator", file: "tools/bmi-calculator.html", icon: "fas fa-weight", description: "Calculate Body Mass Index" },
    { name: "Loan EMI Calculator", category: "calculator", file: "tools/loan-emi-calculator.html", icon: "fas fa-calculator", description: "Calculate loan EMI payments" },
    { name: "Scientific Calculator", category: "calculator", file: "tools/scientific-calculator.html", icon: "fas fa-calculator", description: "Advanced scientific calculator" },
    { name: "Discount Calculator", category: "calculator", file: "tools/discount-calculator.html", icon: "fas fa-tags", description: "Calculate discounts and markups" },
    { name: "Tip Calculator", category: "calculator", file: "tools/tip-calculator.html", icon: "fas fa-utensils", description: "Calculate tips and splits" },

    // Converter Tools
    { name: "Length Converter", category: "converter", file: "tools/length-converter.html", icon: "fas fa-ruler", description: "Convert length units" },
    { name: "Weight Converter", category: "converter", file: "tools/weight-converter.html", icon: "fas fa-weight-hanging", description: "Convert weight units" },
    { name: "Speed Converter", category: "converter", file: "tools/speed-converter.html", icon: "fas fa-tachometer-alt", description: "Convert speed units" },
    { name: "Temperature Converter", category: "converter", file: "tools/temperature-converter.html", icon: "fas fa-thermometer-half", description: "Convert temperature units" },
    { name: "Area Converter", category: "converter", file: "tools/area-converter.html", icon: "fas fa-vector-square", description: "Convert area units" },
    { name: "Time Converter", category: "converter", file: "tools/time-converter.html", icon: "fas fa-clock", description: "Convert time units" },
    { name: "Data Storage Converter", category: "converter", file: "tools/data-storage-converter.html", icon: "fas fa-hdd", description: "Convert data sizes" },
    { name: "Energy Converter", category: "converter", file: "tools/energy-converter.html", icon: "fas fa-bolt", description: "Convert energy units" },
    { name: "Pressure Converter", category: "converter", file: "tools/pressure-converter.html", icon: "fas fa-compress-alt", description: "Convert pressure units" },
    { name: "Angle Converter", category: "converter", file: "tools/angle-converter.html", icon: "fas fa-compass", description: "Convert angle units" },

    // Text Tools
    { name: "Text to Speech", category: "text", file: "tools/text-to-speech.html", icon: "fas fa-volume-up", description: "Convert text to speech" },
    { name: "Password Generator", category: "text", file: "tools/password-generator.html", icon: "fas fa-key", description: "Generate secure passwords" },
    { name: "Case Converter", category: "text", file: "tools/case-converter.html", icon: "fas fa-font", description: "Convert text case" },
    { name: "Word Counter", category: "text", file: "tools/word-counter.html", icon: "fas fa-calculator", description: "Count words and characters" },
    
    // Social Media Tools
    { name: "Social Media Post Generator", category: "social", file: "tools/social-post-generator.html", icon: "fas fa-share-alt", description: "Create engaging social media posts" },
    { name: "Hashtag Generator", category: "social", file: "tools/hashtag-generator.html", icon: "fas fa-hashtag", description: "Generate trending hashtags for your posts" },
    { name: "Social Media Image Resizer", category: "social", file: "tools/social-image-resizer.html", icon: "fas fa-crop-alt", description: "Resize images for different social platforms" },
    { name: "YouTube Thumbnail Downloader", category: "social", file: "tools/yt-downloader.html", icon: "fab fa-youtube", description: "Download YouTube video thumbnails" },
    { name: "Instagram Bio Link", category: "social", file: "tools/instagram-bio-link.html", icon: "fab fa-instagram", description: "Create a multi-link page for Instagram bio" },
    { name: "Twitter Thread Reader", category: "social", file: "tools/twitter-thread-reader.html", icon: "fab fa-twitter", description: "Read and unroll Twitter threads" },
    { name: "Facebook Video Downloader", category: "social", file: "tools/fb-downloader.html", icon: "fab fa-facebook", description: "Download videos from Facebook" },
    { name: "TikTok Video Downloader", category: "social", file: "tools/tiktok-downloader.html", icon: "fab fa-tiktok", description: "Download videos from TikTok" },
    { name: "Pinterest Image Downloader", category: "social", file: "tools/pinterest-downloader.html", icon: "fab fa-pinterest", description: "Download images from Pinterest" },
    { name: "Social Media Analytics", category: "social", file: "tools/social-media-analytics.html", icon: "fas fa-chart-bar", description: "Analyze social media performance" },
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
    renderTools();
    setupEventListeners();
});

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
            <footer class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 mb-4">
                            <h5><i class="fas fa-tools me-2"></i>Multi-Tools Hub</h5>
                            <p>Your one-stop destination for free online tools. Convert, calculate, analyze, and create with ease.</p>
                            <div class="social-links">
                                <a href="#" class="me-3"><i class="fab fa-facebook"></i></a>
                                <a href="#" class="me-3"><i class="fab fa-twitter"></i></a>
                                <a href="#" class="me-3"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="me-3"><i class="fab fa-linkedin"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-2 mb-4">
                            <h5>Categories</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" data-category="image">Image Tools</a></li>
                                <li><a href="#" data-category="seo">SEO Tools</a></li>
                                <li><a href="#" data-category="text">Text Tools</a></li>
                                <li><a href="#" data-category="developer">Developer Tools</a></li>
                                <li><a href="#" data-category="calculator">Calculators</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 mb-4">
                            <h5>More Tools</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" data-category="converter">Converters</a></li>
                                <li><a href="#" data-category="security">Security</a></li>
                                <li><a href="#" data-category="social">Social Media</a></li>
                                <li><a href="#" data-category="misc">Miscellaneous</a></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 mb-4">
                            <h5>Contact Us</h5>
                            <p><i class="fas fa-envelope me-2"></i>hanzala550hanzala@gmail.com</p>
                            <p><i class="fas fa-phone me-2"></i>03092284155</p>
                            <p><i class="fas fa-map-marker-alt me-2"></i>Hajiwala</p>
                        </div>
                    </div>
                    <hr class="my-4">
                    <div class="row">
                        <div class="col-md-6">
                            <p>&copy; 2025 Multi-Tools Hub. All rights reserved.</p>
                        </div>
                        <div class="col-md-6 text-md-end">
                            <a href="#" class="me-3">Privacy Policy</a>
                            <a href="#" class="me-3">Terms of Service</a>
                            <a href="#">Sitemap</a>
                        </div>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Render tools grid
function renderTools(filteredTools = tools) {
    const toolsGrid = document.getElementById('toolsGrid');
    if (!toolsGrid) return;

    toolsGrid.innerHTML = filteredTools.map(tool => `
        <div class="col-lg-4 col-md-6 mb-4" data-category="${tool.category}">
            <div class="card tool-card h-100">
                <div class="card-body text-center">
                    <div class="tool-icon mx-auto">
                        <i class="${tool.icon}"></i>
                    </div>
                    <h5 class="card-title">${tool.name}</h5>
                    <p class="card-text text-muted">${tool.description}</p>
                    <a href="${tool.file}" class="btn btn-primary">Use Tool</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('toolSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredTools = tools.filter(tool => 
                tool.name.toLowerCase().includes(searchTerm) ||
                tool.description.toLowerCase().includes(searchTerm) ||
                tool.category.toLowerCase().includes(searchTerm)
            );
            renderTools(filteredTools);
        });
    }

    // Category filter buttons
    const categoryButtons = document.querySelectorAll('[data-category]');
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active button
            document.querySelectorAll('.category-filter .btn').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            
            // Filter tools
            if (category === 'all') {
                renderTools(tools);
            } else {
                const filteredTools = tools.filter(tool => tool.category === category);
                renderTools(filteredTools);
            }
        });
    });

    // Footer category links
    document.addEventListener('click', function(e) {
        if (e.target.matches('.footer a[data-category]')) {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            
            // Update active button
            document.querySelectorAll('.category-filter .btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-category') === category) {
                    btn.classList.add('active');
                }
            });
            
            // Filter tools
            if (category === 'all') {
                renderTools(tools);
            } else {
                const filteredTools = tools.filter(tool => tool.category === category);
                renderTools(filteredTools);
            }
        }
    });
}

// Utility functions
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy to clipboard', 'error');
    });
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
    notification.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Export for use in other files
window.MultiTools = {
    copyToClipboard,
    showNotification,
    tools
}; 
