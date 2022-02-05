let cont = 0;
// verifica se já existe produtos salvos na memória
if(localStorage.getItem('controle') != null){
    cont = parseInt(localStorage.getItem('controle'));
    
}
// Product Constructor
class Product {
    constructor(nameMerc, name, preco) {
        this.nameMerc = nameMerc;
        this.name = name;
        this.preco = preco;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        // salva produtos localmente
        ++cont;
        localStorage.setItem(`merc_${cont}`,product.nameMerc);
        localStorage.setItem(`prod_${cont}`,product.name);
        localStorage.setItem(`preco_${cont}`,product.preco);
        localStorage.setItem('controle', cont);
        localStorage.setItem('ver',1);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    showMessageProd(message, product, t){
        
        var r=confirm(message);
        // verifica qual opção o usuario escolheu
        /*
        * Se o usuario escolher OK, então os produtos são salvos
        * Se ele escolher CANCELAR, os produtos não são salvos
        */
        if (r==true)
        {
            // Save Product
            this.addProduct(product);
        }
        else
        {
            alert(`O produto ${product.name} foi deletado com sucesso`);
        }
    }
}



// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const nameMerc = document.getElementById('nome-merc').value,
            name = document.getElementById('nome-produto').value,
            preco = document.getElementById('preco').value;

        // Create a new Oject Product
        const product = new Product(nameMerc, name, preco);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (nameMerc === '' || name === '' || preco === '') {
            alert('Por favor insira os dados em todos os campos');
        }else{
            ui.showMessageProd('Produro adicionado com sucesso, clique em "SALVAR" para salvar o produto, ou "CANCELAR" para deletar o produto cadastrado', product);
            ui.resetForm();
        }

        e.preventDefault();
    });
/*
document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });*/