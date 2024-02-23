
const form = document.getElementById('subscribe');
const handleSubmit = function (e) {
    e.preventDefault();
    var email = document.getElementById('cta-email').value;
    fetch('https://booki.chat/form_submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"email": email}),
    })
        .then(response => response.text())
        .then(data => {
            console.log('Success:', data);
            alert('Subscription successful! Thank you for subscribing.');
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle errors here
        });
};

form.removeEventListener('submit', handleSubmit);
form.addEventListener('submit', handleSubmit);