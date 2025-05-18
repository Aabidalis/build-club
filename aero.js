// Add click effect to gallery items
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                this.classList.add('clicked');
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 300);
            });
        });
        
        // Enhance animations on scroll
        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('.gallery-item, .main-content, .gallery-heading');
            
            elements.forEach(element => {
                const position = element.getBoundingClientRect();
                
                // If element is in viewport
                if(position.top < window.innerHeight && position.bottom >= 0) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            });
        });
        
        // Initialize with some opacity transitions
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.gallery-item, .gallery-heading');
            
            elements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                element.style.transitionDelay = `${index * 0.1}s`;
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100);
            });
        });



















        let cursor = document.querySelector(".cursor");
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;
let hideTimeout;

// Track mouse position
document.addEventListener("mousemove", function(e) {
    // Update mouse position
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Show the cursor if it's hidden
    cursor.style.opacity = "1";

    // Reset the hide timer
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
        cursor.style.opacity = "0";
    }, 1000); // Hide after 1 second of inactivity
});

// Animate cursor movement
function animateCursor() {
    currentX += (mouseX - currentX) * 0.4;
    currentY += (mouseY - currentY) * 0.4;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);
}

animateCursor();
