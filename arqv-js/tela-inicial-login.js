// script para colocar o nome do usuário quando ficar cadastro ou login
// e retirar quando ele fizer logout
const logout = (id) =>{
    //const ver = document.getElementById(id);
    localStorage.setItem('validation', 0);
    location.reload();

}

// verificar se o usuário fez login ou logout
const verificar = () => {
    let v = parseInt(localStorage.getItem('validation'))
    const divEl = document.getElementById('login');
    
    if(v == 1){ // login
        
        const nome = localStorage.getItem('fName');
        const sobrenome = localStorage.getItem('lName');
        
        divEl.innerHTML= `
            <a href="#" class="log-cad nav-link dropdown-toggle link-secondary m-1" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="fas fa-user me-2"></i>${nome} ${sobrenome}
            </a>
            <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><i class="dropdown-item" id="sair" onclick="logout(id)">Sair</i></li>
                <li><a href="telas/cad-prod.html" class="dropdown-item">Cadastrar produto</i></li>
            </ul>
            `
    }else if(v == 0){ // logout
        divEl.innerHTML=`
            <a href="#" class="log-cad nav-link dropdown-toggle link-secondary" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user me-2"></i>Faça seu login ou cadastre-se</a>
            <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarDarkDropdownMenuLink">
                <li><a href="telas/login.html" class="dropdown-item">Login</a></li>
                <li><a href="telas/login-cad.html" class="dropdown-item">Cadastre-se</a></li>
            </ul>
        `
    }
}



const verifica_prod = () => {
    let v = parseInt(localStorage.getItem('ver'));
    const divEl = document.getElementById('new_product');
    
    if(v == 1){ // verifica se existe produtos para adicionar na tela
        let controle = parseInt(localStorage.getItem('controle'))
        let StringHTML, merc, nome, preco;
        let aux = 0
        for(i=1; i<=controle; i++){ // adicina a quantidade de produtos que foram salvos
            merc = localStorage.getItem(`merc_${i}`);
            nome = localStorage.getItem(`prod_${i}`);
            preco = parseInt(localStorage.getItem(`preco_${i}`));
            if(++aux <= 4){ // 4 produtos por linha 
                StringHTML = `
                    <div class="col-6 col-sm-3 mt-4 new_prod" id="Nprod_${i}" onclick="data_product(id, 2)">
                        <div class="card"  style="width: 15rem;">
                            <img class="card-img-top" src="https://cdn.pixabay.com/photo/2016/07/05/01/07/new-icon-1497910_1280.png" alt="" srcset="">
                            <div class="card-body">
                                <p class="titulo-p" style="text-align: center">${nome}</p>
                                <p class="preco-t" style="text-align: center">R$ ${preco}</p>
                            </div>
                        </div>
                    </div>`
                divEl.insertAdjacentHTML('beforeend', StringHTML);
            }else{
                // força uma quebra de linha das colunas
                StringHTML = `<div class="w-100"></div>`
                divEl.insertAdjacentHTML('beforeend', StringHTML);
                aux = 0;
            }
            
        }
    }

}

// verifica se o usuario está logado para poder cadastrar produtos
const contribuir = () => {
    let v = parseInt(localStorage.getItem('validation'))
    let url, newUrl;
    if(v == 1){ // usuario logado
        url = location.href
        newUrl = url.replace('index.html','telas/cad-prod.html')
        location.href = newUrl;
    }else{
        url = location.href
        newUrl = url.replace('index.html','telas/login.html')
        location.href = newUrl;
    }
}



// Quando a pagina carregar
verificar();
verifica_prod();
const botao = document.getElementById("contribuir");
botao.addEventListener('click', contribuir);