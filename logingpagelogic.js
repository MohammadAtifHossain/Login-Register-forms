const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// notification batr
let redirectTimeout;

// Parameters: (event, icon-class, color, message, redirect-url)
function showNotification(event, iconClass, color, message, redirectUrl) {
    event.preventDefault();
    
    const notification = document.getElementById('notification');
    const icon = document.getElementById('notificationIcon');
    const text = document.getElementById('notificationText');
    const progressBar = document.getElementById('progressBar');
    
    // Clear existing timeout
    if (redirectTimeout) clearTimeout(redirectTimeout);
    
    // Reset animation
    progressBar.style.animation = 'none';
    
    // Update notification content
    notification.style.backgroundColor = color;
    icon.className = iconClass;
    text.textContent = message;
    notification.style.display = 'flex';
    
    // Force reflow to reset animation
    void notification.offsetWidth;
    
    // Start progress bar animation
    progressBar.style.animation = 'progress 3s linear';
    
    // Set redirect timeout
    redirectTimeout = setTimeout(() => {
        notification.style.display = 'none';
        window.location.href = redirectUrl;
    }, 3000);
}
