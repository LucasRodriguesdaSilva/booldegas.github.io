
class Validator {

    constructor() {
      this.validations = [
        'data-min-length',
        'data-max-length',
        'data-only-letters',
        'data-email-validate',
        'data-required',
        'data-equal',
        'data-password-validate',
        
      ]
    }
  
    // inicia a validação de todos os campos
    validate(form) {
  
      // limpa todas as validações antigas
      let currentValidations = document.querySelectorAll('form .error-validation');
  
      if(currentValidations.length) {
        this.cleanValidations(currentValidations);
      }
  
      // pegar todos inputs
      let inputs = form.getElementsByTagName('input');
      
      // transformar HTMLCollection em arr
      let inputsArray = [...inputs];
      // Variaveis para verificação da validação
      let cont=0;
      
      // loop nos inputs e validação mediante aos atributos encontrados
      inputsArray.forEach(function(input, obj) {  
        // fazer validação de acordo com o atributo do input
        for(let i = 0; this.validations.length > i; i++) {
          if(input.getAttribute(this.validations[i]) != null) {
            // limpa string para saber o método
            let method = this.validations[i].replace("data-", "").replace("-", "");
  
            // valor do input
            let value = input.getAttribute(this.validations[i])
  
            // invoca o método e verifica as validações corretas
            cont = cont + this[method](input,value);

          }
        }
  
      }, this);

      return cont;
  
    }
  
    // método para validar se tem um mínimo de caracteres
    minlength(input, minValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `O campo precisa ter pelo menos ${minValue} caracteres`;
  
      if(inputLength < minValue) {
        this.printMessage(input, errorMessage);
        return 1;
      }else{
        return 0;
      }
  
    }
  
    // método para validar se passou do máximo de caracteres
    maxlength(input, maxValue) {
  
      let inputLength = input.value.length;
  
      let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;
  
      if(inputLength > maxValue) {
        this.printMessage(input, errorMessage);
        return 1;
      }else{
        return 0;
      }
  
    }
  
    // método para validar strings que só contem letras
    onlyletters(input) {
  
      let re = /^[A-Za-z]+$/;;
  
      let inputValue = input.value;
  
      let errorMessage = `Este campo não aceita números nem caracteres especiais`;
  
      if(!re.test(inputValue)) {
        this.printMessage(input, errorMessage);
        return 1;
      }else{
        return 0;
      }
  
    }
  
    // método para validar e-mail
    emailvalidate(input) {
      let re = /\S+@\S+\.\S+/;
  
      let email = input.value;
  
      let errorMessage = `Insira um e-mail no padrão matheus@email.com`;
  
      if(!re.test(email)) {
        this.printMessage(input, errorMessage);
        return 1;
      }else{
        localStorage.setItem("email",email);
        return 0;
      }
  
    }
  
    // verificar se um campo está igual o outro
    equal(input, inputName) {
  
      let inputToCompare = document.getElementsByName(inputName)[0];
  
      let errorMessage = `Este campo precisa estar igual ao ${inputName}`;
  
      if(input.value != inputToCompare.value) {
        this.printMessage(input, errorMessage);
        return 1
      }else{
        return 0
      }
    }
    
    // método para exibir inputs que são necessários
    required(input) {
  
      let inputValue = input.value;
  
      if(inputValue === '') {
        let errorMessage = `Este campo é obrigatório`;
  
        this.printMessage(input, errorMessage);
        return 1;
      }else{
        return 0;
      }
  
    }
  
    // validando o campo de senha
    passwordvalidate(input) {
  
      // explodir string em array
      let charArr = input.value.split("");
  
      let uppercases = 0;
      let numbers = 0;
  
      for(let i = 0; charArr.length > i; i++) {
        if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))) {
          uppercases++;
        } else if(!isNaN(parseInt(charArr[i]))) {
          numbers++;
        }
      }
  
      if(uppercases === 0 || numbers === 0) {
        let errorMessage = `A senha precisa um caractere maiúsculo e um número`;
  
        this.printMessage(input, errorMessage);

        return 1;
      }else{
        localStorage.setItem("senha",input.value);
        return 0;
      }
  
    }
  
    // método para imprimir mensagens de erro
    printMessage(input, msg) {
    
      // checa os erros presentes no input
      let errorsQty = input.parentNode.querySelector('.error-validation');
  
      // imprimir erro só se não tiver erros
      if(errorsQty === null) {
        let template = document.querySelector('.error-validation').cloneNode(true);
  
        template.textContent = msg;
    
        let inputParent = input.parentNode;
    
        template.classList.remove('template');
    
        inputParent.appendChild(template);
      }
  
    }
  
    // remove todas as validações para fazer a checagem novamente
    cleanValidations(validations) {
      validations.forEach(el => el.remove());
    }
  
  }
  



  let form = document.getElementById('register-form');
  let submit = document.getElementById('btn-submit');
  let checkbox = document.getElementById('check');
  const fName = document.getElementById('name');
  const lName = document.getElementById('lastname');
  let validator = new Validator();
  let ver;


  // evento de envio do form, que valida os inputs
  submit.addEventListener('click', function(e) {
    e.preventDefault();

    ver = validator.validate(form);
    // Verificar se o termos de uso foi marcado e os campos estão corretos
    if(ver == 0 && checkbox.checked){
      localStorage.setItem('validation', 1);
      localStorage.setItem('fName', fName.value);
      localStorage.setItem('lName', lName.value);
      url = location.href;
      newUrl = url.replace('telas/login-cad.html', 'index.html');
      location.href = newUrl;
    }else{
      // A mensagem está aparecendo embaixo do botao de cadastrar
      validator.printMessage(checkbox, `Marque a opção acima`);
    }

  });
