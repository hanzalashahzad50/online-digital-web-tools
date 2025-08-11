const fs = require('fs');
const path = require('path');

// Get list of existing tool files
const toolsDir = path.join(__dirname, 'tools');
const existingFiles = new Set(fs.readdirSync(toolsDir).filter(file => file.endsWith('.html')));

// List of tools from main.js (manually extracted since we can't parse it directly)
const tools = [
    // Image Tools
    { name: "Image to PNG Converter", file: "image-to-png.html" },
    { name: "Image to JPG Converter", file: "image-to-jpg.html" },
    { name: "Image Resizer", file: "image-resizer.html" },
    { name: "Image Compressor", file: "image-compressor.html" },
    { name: "Image Cropper", file: "image-cropper.html" },
    { name: "Convert Image to Base64", file: "image-to-base64.html" },
    { name: "Convert WebP to PNG", file: "webp-to-png.html" },
    { name: "GIF Maker", file: "gif-maker.html" },
    { name: "QR Code Generator", file: "qr-code-generator.html" },
    { name: "Screenshot to PDF Converter", file: "screenshot-to-pdf.html" },
    
    // SEO Tools
    { name: "Meta Tag Generator", file: "meta-tag-generator.html" },
    { name: "Keyword Density Checker", file: "keyword-density-checker.html" },
    { name: "Sitemap Generator", file: "sitemap-generator.html" },
    { name: "Robots.txt Generator", file: "robots-txt-generator.html" },
    { name: "Google Index Checker", file: "google-index-checker.html" },
    { name: "Domain Authority Checker", file: "domain-authority-checker.html" },
    { name: "Backlink Checker", file: "backlink-checker.html" },
    { name: "Page Speed Checker", file: "page-speed-checker.html" },
    { name: "XML Sitemap Validator", file: "xml-sitemap-validator.html" },
    { name: "Mobile-Friendly Test", file: "mobile-friendly-test.html" },
    
    // Text Tools
    { name: "Word Counter", file: "word-counter.html" },
    { name: "Character Counter", file: "character-counter.html" },
    { name: "Case Converter", file: "case-converter.html" },
    { name: "Plagiarism Checker", file: "plagiarism-checker.html" },
    { name: "Grammar Checker", file: "grammar-checker.html" },
    { name: "Text-to-Speech", file: "text-to-speech.html" },
    { name: "Speech-to-Text", file: "speech-to-text.html" },
    { name: "URL Encoder & Decoder", file: "url-encoder-decoder.html" },
    { name: "Fancy Text Generator", file: "fancy-text-generator.html" },
    { name: "Random Text Generator", file: "random-text-generator.html" },
    
    // Developer Tools
    { name: "JSON Formatter", file: "json-formatter.html" },
    { name: "HTML to Markdown Converter", file: "html-to-markdown.html" },
    { name: "CSS Minifier", file: "css-minifier.html" },
    { name: "JavaScript Minifier", file: "javascript-minifier.html" },
    { name: "SQL Formatter", file: "sql-formatter.html" },
    { name: "HTACCESS Redirect Generator", file: "htaccess-redirect-generator.html" },
    { name: "Markdown to HTML Converter", file: "markdown-to-html.html" },
    { name: "Color Code Picker", file: "color-code-picker.html" },
    { name: "Base64 Encoder & Decoder", file: "base64-encoder-decoder.html" },
    { name: "IP Address Lookup", file: "ip-address-lookup.html" },
    
    // Math & Calculators
    { name: "Percentage Calculator", file: "percentage-calculator.html" },
    { name: "Age Calculator", file: "age-calculator.html" },
    { name: "BMI Calculator", file: "bmi-calculator.html" },
    { name: "Loan EMI Calculator", file: "loan-emi-calculator.html" },
    { name: "Scientific Calculator", file: "scientific-calculator.html" },
    { name: "Discount Calculator", file: "discount-calculator.html" },
    { name: "Currency Converter", file: "currency-converter.html" },
    { name: "Time Zone Converter", file: "time-zone-converter.html" },
    { name: "Binary to Decimal Converter", file: "binary-to-decimal.html" },
    { name: "Tip Calculator", file: "tip-calculator.html" },
    
    // Unit Converters
    { name: "Length Converter", file: "length-converter.html" },
    { name: "Weight Converter", file: "weight-converter.html" },
    { name: "Speed Converter", file: "speed-converter.html" },
    { name: "Temperature Converter", file: "temperature-converter.html" },
    { name: "Volume Converter", file: "volume-converter.html" },
    { name: "Data Storage Converter", file: "data-storage-converter.html" },
    { name: "Time Converter", file: "time-converter.html" },
    { name: "Area Converter", file: "area-converter.html" },
    { name: "Angle Converter", file: "angle-converter.html" },
    { name: "Pressure Converter", file: "pressure-converter.html" },
    { name: "Energy Converter", file: "energy-converter.html" },
    { name: "Fuel Efficiency Converter", file: "fuel-efficiency-converter.html" },
    
    // Security Tools
    { name: "Password Generator", file: "password-generator.html" },
    { name: "MD5 Hash Generator", file: "md5-hash-generator.html" },
    { name: "SHA Hash Generator", file: "sha-hash-generator.html" },
    { name: "Password Strength Checker", file: "password-strength-checker.html" },
    { name: "VPN Checker", file: "vpn-checker.html" },
    { name: "Proxy Checker", file: "proxy-checker.html" },
    { name: "Email Validator", file: "email-validator.html" },
    { name: "SSL Checker", file: "ssl-checker.html" },
    { name: "Malware Scanner", file: "malware-scanner.html" },
    { name: "Website Safety Checker", file: "website-safety-checker.html" },
    
    // Social Media Tools
    { name: "Facebook Video Downloader", file: "facebook-video-downloader.html" },
    { name: "YouTube Thumbnail Downloader", file: "youtube-thumbnail-downloader.html" },
    { name: "Instagram Photo Downloader", file: "instagram-photo-downloader.html" },
    { name: "Twitter Video Downloader", file: "twitter-video-downloader.html" },
    { name: "TikTok Video Downloader", file: "tiktok-video-downloader.html" },
    { name: "Pinterest Image Downloader", file: "pinterest-image-downloader.html" },
    { name: "Hashtag Generator", file: "hashtag-generator.html" },
    { name: "Social Media Post Scheduler", file: "social-media-post-scheduler.html" },
    { name: "Instagram Hashtag Generator", file: "instagram-hashtag-generator.html" },
    { name: "YouTube Tags Generator", file: "youtube-tags-generator.html" },
    
    // Miscellaneous Tools
    { name: "QR Code Reader", file: "qr-code-reader.html" },
    { name: "Barcode Generator", file: "barcode-generator.html" },
    { name: "Barcode Reader", file: "barcode-reader.html" },
    { name: "PDF to Word Converter", file: "pdf-to-word-converter.html" },
    { name: "PDF to JPG Converter", file: "pdf-to-jpg-converter.html" },
    { name: "JPG to PDF Converter", file: "jpg-to-pdf-converter.html" },
    { name: "MP4 to MP3 Converter", file: "mp4-to-mp3-converter.html" },
    { name: "Audio Cutter", file: "audio-cutter.html" },
    { name: "Video Cutter", file: "video-cutter.html" },
    { name: "Image to PDF Converter", file: "image-to-pdf-converter.html" },
    { name: "Invoice Generator", file: "invoice-generator.html" },
    { name: "Business Name Generator", file: "business-name-generator.html" },
    { name: "Lottery Number Generator", file: "lottery-number-generator.html" },
    { name: "Flip a Coin Simulator", file: "flip-coin-simulator.html" },
    { name: "Random Number Generator", file: "random-number-generator.html" }
];

// Find missing tools
const missingTools = [];
const existingTools = [];

for (const tool of tools) {
    if (existingFiles.has(tool.file)) {
        existingTools.push(tool);
    } else {
        missingTools.push(tool);
    }
}

// Find extra files (not in tools list)
const extraFiles = [];
for (const file of existingFiles) {
    if (!tools.some(tool => tool.file === file) && !file.startsWith('_')) {
        extraFiles.push(file);
    }
}

console.log('=== Missing Tools ===');
console.table(missingTools);
console.log(`\nTotal missing tools: ${missingTools.length}`);

console.log('\n=== Existing Tools ===');
console.table(existingTools);
console.log(`\nTotal existing tools: ${existingTools.length}`);

console.log('\n=== Extra Files (not in tools list) ===');
console.table(extraFiles);
console.log(`\nTotal extra files: ${extraFiles.length}`);

// Write missing tools to a JSON file
fs.writeFileSync(
    path.join(__dirname, 'missing-tools.json'), 
    JSON.stringify(missingTools, null, 2)
);

console.log('\nMissing tools list has been saved to missing-tools.json');
