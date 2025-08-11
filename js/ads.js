// Ad management for Multi-Tools Hub

// Ad configuration - Update these values to change ads across all pages
const adConfig = {
    // Top banner ad (appears below the main heading)
    topBanner: {
        enabled: true,
        adClient: 'ca-app-pub-1226609223843598/2703335676',
        adSlot: 'ca-app-pub-1226609223843598~8574656560',
        responsive: true,
        class: 'top-banner-ad',
        containerClass: 'ad-container mt-3 mb-4',
        style: 'display:block; min-height: 90px;',
        format: 'auto',
        layout: 'in-article',
        layoutKey: '',
        width: 728,
        height: 90
    },
    
    // Bottom banner ad (appears above the footer)
    bottomBanner: {
        enabled: true,
        adClient: 'ca-pub-1226609223843598',
        adSlot: '1798180633',
        responsive: true,
        class: 'bottom-banner-ad',
        containerClass: 'ad-container my-4',
        style: 'display:block; min-height: 90px;',
        format: 'auto',
        layout: 'in-article',
        layoutKey: '',
        width: 728,
        height: 90
    }
};

// Function to generate ad HTML
function generateAd(adType) {
    const ad = adConfig[adType];
    if (!ad || !ad.enabled) return '';
    
    return `
    <div class="${ad.containerClass} text-center">
        <div class="ad-label small text-muted mb-1">Advertisement</div>
        <div class="ad-unit ${ad.class} border rounded p-2 bg-light">
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ad.adClient}"
                crossorigin="anonymous"></script>
            <ins class="adsbygoogle"
                style="${ad.style}"
                data-ad-client="${ad.adClient}"
                data-ad-slot="${ad.adSlot}"
                data-ad-format="${ad.format}"
                data-full-width-responsive="${ad.responsive}"
                data-ad-layout="${ad.layout}"
                ${ad.layoutKey ? `data-ad-layout-key="${ad.layoutKey}"` : ''}
                data-ad-width="${ad.width}"
                data-ad-height="${ad.height}"></ins>
            <script>
                (adsbygoogle = window.adsbygoogle || []).push({});
            </script>
        </div>
    </div>`;
}

// Function to insert ads into the page
function insertAds() {
    // Insert top banner ad
    const topBannerPlaceholder = document.getElementById('top-banner-ad');
    if (topBannerPlaceholder) {
        topBannerPlaceholder.outerHTML = generateAd('topBanner');
    }
    
    // Insert bottom banner ad
    const bottomBannerPlaceholder = document.getElementById('bottom-banner-ad');
    if (bottomBannerPlaceholder) {
        bottomBannerPlaceholder.outerHTML = generateAd('bottomBanner');
    }
}

// Initialize ads when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Call insertAds to place the ads
    insertAds();
    
    // Also initialize any existing ads in the page
    try {
        (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
        console.error('Error initializing ads:', e);
    }
});

// Export for use in other files
window.AdManager = {
    insertAds,
    generateAd,
    adConfig
};
