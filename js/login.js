const searchButton = document.getElementById('push-button');
const nameInput = document.getElementById('name-input');
const passwordInput = document.getElementById('password-input');
searchButton.addEventListener('click', () => {
  let user = {
      login: nameInput,
      password: passwordInput
  };
  let url = 'http://localhost:8080/login'
  let response = fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });

  if (response.ok) {
      let json = response.json();
      window.location.href = 'main.html'
  } else {
      alert("Error HTTP: " + response.status);
  }
});