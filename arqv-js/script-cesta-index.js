/* Quando o usuário clicar em um produto esta função
* irá pegar a imagem, nome e o preço do produto e armazenar localmente
*/
const data_product = (id, method) => {
    const prod = document.getElementById(id);
    let img;
    let nome;
    let preco;
    // verifica se foi um produto do carrosel de imagens ou um do card de imagens
    if(method == 2){
        console.log(id)
        texto_1 = prod.querySelector('.titulo-p');
        texto_2 = prod.querySelector('.preco-t');
        texto_3 = prod.querySelector(".card-img-top")
        nome = texto_1.textContent;
        preco = texto_2.textContent;
        img = texto_3.getAttribute('src')
        
        localStorage.setItem('nome', nome);
        localStorage.setItem('preco', preco);
        localStorage.setItem('img', img);
    }else{
        img = prod.firstElementChild.getAttribute('src')
        nome = prod.children[1].textContent
        preco = prod.children[2].textContent

        localStorage.setItem('img', img);
        localStorage.setItem('nome', nome);
        localStorage.setItem('preco', preco);
        
    }
    
    url = location.href
    newUrl = url.replace('index.html','telas/cesta.html')
    location.href = newUrl;
}

