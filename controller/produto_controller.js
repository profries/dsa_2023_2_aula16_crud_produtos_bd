const produtoService = require('../service/produto_service')


async function listar(req, res) {
    const listaProdutos = await produtoService.listar();
    res.json(listaProdutos);
}

async function inserir(req, res) {
    let produto = req.body;
    try {
      const prodInserido = await produtoService.inserir(produto);
      res.status(201).json(prodInserido)
    }
    catch(err) {
      //id-> 400 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}

async function buscarPorId(req, res) {
    const id = +req.params.id;
    try {
      const prod = await produtoService.buscarPorId(id);
      res.json(prod);
    }
    catch(err) {
      //id-> 404 / msg -> msg de erro
      res.status(err.id).json({msg: err.message});
    }
}

async function atualizar (req, res) {
    const id = +req.params.id;
    let produto = req.body;
  
    try{ 
      const produtoAtualizado = await produtoService.atualizar(id, produto);
      res.json(produtoAtualizado);
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }
}

async function deletar(req, res) {
    const id = +req.params.id;
    try{ 
      const produtoDeletado = await produtoService.deletar(id);
      res.json(produtoDeletado);
    }
    catch(err) {
      res.status(err.id).json({msg: err.message});
    }   
}

module.exports = {
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}