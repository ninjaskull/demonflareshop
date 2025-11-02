// Loader functionality
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const contentWrapper = mainContent.querySelector('.content-wrapper');
    
    // Hide loader after 600ms
    setTimeout(function() {
        loader.classList.add('fade-out');
        
        // Show content with fade-in effect
        setTimeout(function() {
            contentWrapper.classList.add('show');
        }, 100);
        
        // Remove loader from DOM after fade-out completes
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, 600);
});
