/* Quando o usuário clicar em um produto esta função
* irá pegar a imagem, nome e o preço do produto e armazenar localmente
*/
const data_product = (id) => {
    const prod = document.getElementById(id);
    let img = prod.firstElementChild.getAttribute('src')
    let nome_prod = prod.children[1].textContent
    let preco = prod.children[2].textContent
    const prod1 = {
        img: img,
        nome: nome_prod,
        preco: preco
    }
    createProd(prod1)
    
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_prod')) ?? []
const setLocalStorage = (db_prod) => localStorage.setItem('db_prod', JSON.stringify(db_prod))

readProd = () => getLocalStorage()
const createProd = (prod1) =>{
    const db_prod = getLocalStorage()
    db_prod.push(prod1)
    setLocalStorage(db_prod)
}
