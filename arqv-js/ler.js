var cont = -1
const createRow = (prod1, index) => {
    cont = cont+1
    const newRow = document.createElement('tr')
    var aux = '../'
    newRow.innerHTML=`
    <td>
    <p id="itens_tb-${index}">${index}</p>
    </td>
    <td class="cesta_tb">
    <img src="${aux+prod1.img}" alt="">
    </td>
    <td>
    <h5 id="r1">${prod1.nome}</h5>
    </td>
    <td class="active">
    <buttom type="buttom" class="btn btn-success btn-small" id="ba-${index}">+</buttom><input type="text" id="inputQtd-${index}" size="1" value="1"><buttom type="buttom" class="btn btn-success btn-small" id="bd-${index}">-</buttom>
    </td>
    <td>
    <p id="preco-${index}">${prod1.preco}</p>
    </td>
    <td>
    <p id="subtotal-${index}">R$  4,50</p>
    </td>
    <td>
    <p id="r3"><buttom type="buttom" class="btn btn-danger btn-small"><spam class="fas fa-trash" id="delete-${index}"></spam</buttom></p>
    </td>`
    
    document.querySelector('#tb_cesta>tbody').appendChild(newRow)
    alterarSubtotais(index)
}

const createTotal = (str3) => {
    const ltotal = document.createElement('tr')
    ltotal.innerHTML = `
    <td colspan="5">
    <h5>Total</h5>
    </td>
    <td>
    <p colspan="2" id="tb_total">${str3}</p>
    </td>`
    document.querySelector('#tb_cesta>tbody').appendChild(ltotal)
    somaSubtotais()
}

 //const getLocalStorage = () => JSON.parse(localStorage.getItem('db_prod')) ?? []
 readProd = () => getLocalStorage()
 const updateTable = () => {
     const db_prod = readProd()
     clearTable()
     db_prod.forEach(createRow)
     if(cont>0){
         createTotal()
     }
 }

 const clearTable = () =>{
    const rows = document.querySelectorAll('#tb_cesta>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

 const editDelete = () =>{
    var el = document.getElementById('tb_cesta');
    el.addEventListener('click', function(e){
        const [action, index] = e.target.id.split('-')
        if(action=='delete'){
            const response = confirm(`Deseja realmente excluir este item?`)
            if(response){
                deleteProd(index)
                window.location=document.URL
                updateTable()
            }
        }else if(action=='ba'){
            aumentar(index)
            alterarSubtotais(index)
            somaSubtotais()
        }else if(action=='bd'){
            diminuir(index)
            alterarSubtotais(index)
            somaSubtotais()
        }
    }) 
 }
 const deleteProd = (index) =>{
    const db_prod = JSON.parse(localStorage.getItem('db_prod'))
    db_prod.splice(index, 1)
    setLocalStorage(db_prod)
}

const aumentar = (index) => {
    var change = document.getElementById('inputQtd-'+index)
    change.value = parseInt(change.value)+parseInt(1)
}

const diminuir = (index) => {
    var change = document.getElementById('inputQtd-'+index)
    if(parseInt(change.value)>1){
        change.value = parseInt(change.value)-parseInt(1)
    }   
}
var str1 = 'oi3'
const somaSubtotais = () =>{
    var total = 0
    var s = 'oi'
    var str = 'oi2'
    var str1 = 'oi3'    
    var novo ='oi4'
    var total1 = 'oi5'
    for (var i = 0; i <= cont; i++){
        s = document.getElementById('subtotal-'+i).innerText
        str = s.split(' ')
        str1 = str[1].split(',')
        novo = str1[0] + '.' + str1[1]
        total = parseFloat(total) + parseFloat(novo)
    }
    s = ''+total
    str = s.split('.')
    str1 = 'R$ ' + str[0] + ',' + str[1]
    var mudarTotal = document.getElementById('tb_total')
    mudarTotal.innerText = str1
}
var str3 = 'oi3'
const alterarSubtotais = (index) => {
    var s2 = 'oi'
    var str2 = 'oi2'
    var novo1 ='oi4'
    var multiplicador = document.getElementById('inputQtd-'+index).value
    var s2 = document.getElementById('preco-'+index).innerText
    str2 = s2.split(' ')
    str3 = str2[1].split(',')
    var multiplicado = str3[0] + '.' + str3[1]
    var produto =  document.getElementById('subtotal-'+index)
    produto.innerText = parseInt(multiplicador) * parseFloat(multiplicado)
    str2 = produto.innerText.split('.')
    str3 = 'R$ '+ str2[0] + ',' + str2[1]
    produto.innerText = str3
}



/*const editDelete = (event) =>{
    alert(event.target.type)
}*/

window.onload = updateTable();
window.onload = editDelete();