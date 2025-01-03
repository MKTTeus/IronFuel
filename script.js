let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nomeProduto, preco) {
    carrinho.push({ nome: nomeProduto, preco: preco });
    total += preco;
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    total -= carrinho[index].preco; 
    carrinho.splice(index, 1); 
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = ''; 

    
    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        
        const botaoRemover = document.createElement('button');
        botaoRemover.className = 'btn btn-danger btn-sm';
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = () => removerDoCarrinho(index); 

        li.appendChild(botaoRemover); 
        listaCarrinho.appendChild(li); 
    });

    
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}
