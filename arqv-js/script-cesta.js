// script para pegar os valores do produto do armazenamento local
// e colocar no html
const divEl = document.getElementById('area');
const img = localStorage.getItem('img');
const preco = localStorage.getItem('preco');
const nome = localStorage.getItem('nome');

const elementHtml = () => {
    // verifica se a imagem está salva localmente ou se é um link
    if(img.indexOf("http") >= 0){
        
        divEl.innerHTML = `
        <div class="card" id="area" style="width: 18rem;">
            <img src="${img}" class="card-img-top" alt="produto">
            <div class="card-body">
                <h5 class="card-title">${nome}</h5>
                <p class="card-text">${preco}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
                <a href="#" class="btn btn-danger">Favoritos</a>
            </div>
        </div>`
    }else{
        
        divEl.innerHTML = `
        <div class="card" id="area" style="width: 18rem;">
            <img src="../${img}" class="card-img-top" alt="produto">
            <div class="card-body">
                <h5 class="card-title">${nome}</h5>
                <p class="card-text">${preco}</p>
                <a href="#" class="btn btn-primary">Comprar</a>
                <a href="#" class="btn btn-danger">Favoritos</a>
            </div>
        </div>`
    }

}

// Quando a pagina carregar chama a função
window.onload = elementHtml;