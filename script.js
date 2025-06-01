document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const signupLink = document.getElementById('signupLink');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Here you would typically make an API call to your backend
        console.log('Login attempt:', { email, password });
        alert('Login functionality will be implemented with backend integration');
    });

    signupLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Here you would typically redirect to a signup page
        alert('Sign up functionality will be implemented with backend integration');
    });
}); 