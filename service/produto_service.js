const produtoRepository = require('../repository/produto_repository')

async function listar() {
    return await produtoRepository.listar();
}

async function inserir(produto) {
    if(produto && produto.nome && produto.preco) {// produto != undefined
        return await produtoRepository.inserir(produto);
    }
    else {
        throw {id:400, message:"Produto nao possui nome ou preco"};
    }
}

async function buscarPorId(id) {
    const produto = await produtoRepository.buscarPorId(id);
    if(produto) {
        return produto;
    }
    else {
        throw {id:404, message:"Produto nao encontrado"};
    }
}

async function atualizar(id, produtoAtualizado) {
    const produto = await produtoRepository.buscarPorId(id);
    if(!produto) {
        throw {id: 404, message: "Produto nao encontrado"};
    }
    
    if(produtoAtualizado && produtoAtualizado.nome && produtoAtualizado.preco){
        return await produtoRepository.atualizar(id, produtoAtualizado);
    }
    else {
        throw {id: 400, message: "Produto nao possui um dos campos obrigatorios"};
    }
}

async function deletar(id) {
    const produtoDeletado = await produtoRepository.deletar(id);
    if(produtoDeletado){
        return produtoDeletado;
    }
    else {
        throw {id: 404, message: "Produto nao encontrado"};
    }
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}