document.getElementById("adicionar").addEventListener('click'.fuction)(){
const itemselecionado = document.getElementById('item').value;

if (itemselecionado){
    const listacompras = document.getElementById('lista-compras');
    const novoItem = document.createElement('li');
    novoItem.textcontent = itemSelecionado;
    listaCompras.appendChild(novoItem);
 }
}