// Counter Animation
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        // Dynamic increment based on target size for smoother animation
        const increment = target / 200;

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target.toLocaleString(); // Add commas for better readability
        }
    }

    updateCounter();
});

// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Toggle icon between bars and times (X)
        const icon = mobileBtn.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Check Login State
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const userContainer = document.getElementById('user-actions-container');

    if (isLoggedIn && userContainer) {
        userContainer.innerHTML = `
            <div class="user-profile-widget" onclick="logout()">
                <div class="user-avatar">
                    <i class="far fa-user"></i>
                </div>
                <div class="user-info">
                    <span class="user-name">Ryan</span>
                    <span class="user-role">Secured</span>
                </div>
            </div>
        `;
    }
});

function logout() {
    if (confirm('Log out?')) {
        localStorage.removeItem('userLoggedIn');
        window.location.reload();
    }
}
