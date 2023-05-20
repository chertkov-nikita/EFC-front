const searchButton = document.getElementById('push-button');
const nameInput = document.getElementById('name-input');
const emailInput= document.getElementById('email-input')
const passwordInput = [document.getElementById('password-input'), document.getElementById('confirm-password-input')];
searchButton.addEventListener('click', () => {
    if (passwordInput.value[0] == passwordInput.value[1]){
        let user = {
            login: nameInput,
            email: emailInput,
            password: passwordInput
        };
        let url = 'http://localhost:8080/register'
        let response = fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            let json = response.json();
        } else {
            alert("Error HTTP: " + response.status);
        }
    }
    else{
        alert('Password mismatch!');
    }
});