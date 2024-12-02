document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (email === 'email@hotmail.com.br' && password === '12345') {
        alert('Login bem-sucedido!');
    } else {
        alert('Usuário ou senha incorretos.');
    }
});