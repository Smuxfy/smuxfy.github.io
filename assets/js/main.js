// Simple JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Make profile pic bounce on hover
    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    profilePic.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    console.log('Femboy bio loaded! 💖');
});