class Validator{

    constructor(){
        this.validations = [
            'data-min-length'
        ]
    }
    //Inicia a validação de todos os campos
    validate(form) {

        //limpa todas as validações antigas
        let currentValidations = document.querySelectorAll('form .error-validation');

        if(currentValidations.length){
            this.cleanValidations(currentValidations);
        }
        //pegar os inputs do formulario
        let inputs = form.getElementsByTagName('input');

        // transforma uma HTMLColletion -> array
        let inputsArray = [...inputs];

        //loop nos inputs e validação ao que for encontrado
        inputsArray.forEach(function(input, obj) {
            //loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++){
                //verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null){
                    //transformas data-min-length - > minlength .. Limpando a string para virar um metodo
                    let method = this.validations[i].replace("data-", "").replace("-", "");
                    //valor do input
                    let value = input.getAttribute(this.validations[i]);
                    //invocar metodo
                    this[method](input, value);
                }
            }
        }, this);
    }
     //imprime mensagem e mostra no formulario
     printMessage(input, msg){

        //checa os erros presentes nos inputs
        let errorQty = input.parentNode.querySelector('.error-validation');

        //imprimir erro só se não tiver erros
        if(errorQty === null){
            let template = document.querySelector('.error-validation').cloneNode(true);

            template.textContent = msg;
    
            let inputParent = input.parentNode;
    
            template.classList.remove('template');
    
            inputParent.appendChild(template);
        }
       
    }
   
    //verifica se um input tem um numero minimo de caracteres
    minlength(input, minValue){
        let inputLength = input.value.length;

        let erroMessage = `O campo precisa ter pelo menos ${minValue} caracteres.`;

        if(inputLength < minValue){
            //this.printMessage(input, erroMessage);
            this.printMessage(input, erroMessage);
        }
    }
    
    // remove todas as validações para fazer a checagem novamente
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
      }

}


let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');

let validator = new Validator();

//Evento que dispara as validações
submit.addEventListener('click', function(e){
    e.preventDefault();

    validator.validate(form);
    console.log("Funcionou crlh");
});
