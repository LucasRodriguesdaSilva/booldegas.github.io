// script para logar o usuário
  function logar(){
      let email = document.getElementById('email').value;
      let senha = document.getElementById('senha').value;

    if(email === localStorage.getItem('email') && senha === localStorage.getItem('senha')){
        localStorage.setItem('validation', 1);
        location.href = "../index.html";
    }else {
        alert('Usuario ou senha incorretos.');
    }

  }
  
  let login = document.getElementById('btn-login');
 
  // evento de envio do form, que valida os inputs
  login.addEventListener('click', function(e) {
    //e.preventDefault();
   logar();
  });