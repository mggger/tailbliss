document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('contact-form');
    if (form) { // 检查 form 是否存在
        const handleSubmit = function (e) {
            e.preventDefault();
            var email = document.getElementsByName('email').value;
            var ideas = document.getElementsByName('message').value;
            fetch('https://booki.chat/form_submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"email": email, "ideas": ideas}),
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

        // 由于我们在 DOMContentLoaded 内部添加监听器，不需要先移除
        form.addEventListener('submit', handleSubmit);
    }
});
