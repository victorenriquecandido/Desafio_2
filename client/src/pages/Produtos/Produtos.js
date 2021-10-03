import React from 'react'
import './Produtos.css'
import { useState } from 'react'
import Axios from 'axios'
import Layout from '../../component/Layout'
import BasicModal from '../../component/Modal'

function PagesProdutos() {
  const [id, setId] = useState('')
  const [nome, setNome] = useState('')
  const [marca, setMarca] = useState('')
  const [tipo, setTipo] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [preco, setPreco] = useState(0)
  const [newPreco, setNewPreco] = useState(0)
  const [produtoLista, setProdutoLista] = useState([])

  /*   const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false) */

  /*   const displayInfo = () => {
      console.log(qtdproduto, total, tipopagamento)
    } */

  const comprarProduto = () => {
    Axios.post('http://localhost:3001/create-compra', {
      id: id,
      nome: nome,
      preco: preco,
    })
  }

  const addProduto = () => {
    Axios.post('http://localhost:3001/create', {
      nome: nome,
      marca: marca,
      tipo: tipo,
      quantidade: quantidade,
      preco: preco,
    }).then(() => {
      setProdutoLista([
        ...produtoLista,
        {
          nome: nome,
          marca: marca,
          tipo: tipo,
          quantidade: quantidade,
          preco: preco,
        },
      ])
    })
  }

  const getProdutos = () => {
    Axios.get('http://localhost:3001/produtos').then((response) => {
      setProdutoLista(response.data)
      //setProdutoDetalhes(response.data)
    })
  }

  const updateProduto = (id) => {
    Axios.put('http://localhost:3001/update', { preco: newPreco, id: id }).then(
      (response) => {
        setProdutoLista(
          produtoLista.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  nome: val.nome,
                  marca: val.marca,
                  tipo: val.tipo,
                  quantidade: val.quantidade,
                  preco: newPreco,
                }
              : val
          }),
        )
      },
    )
  }

  const deleteProduto = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setProdutoLista(
        produtoLista.filter((val) => {
          return val.id !== id
        }),
      )
    })
  }

  return (
    <>
      <Layout />
      <fieldset>
        <div className="jumbotron">
          <div className="App">
            <h1>Desafio ICTS</h1>
            <h2>Produtos</h2>
            <div className="information">
              <label>Nome do produto:</label>
              <input
                type="text"
                placeholder="Exemplo: Playstation 4"
                onChange={(event) => {
                  setNome(event.target.value)
                }}
              />
              <label>Marca:</label>
              <input
                type="text"
                placeholder="Exemplo: Sony"
                onChange={(event) => {
                  setMarca(event.target.value)
                }}
              />
              <label>Tipo:</label>
              <input
                type="text"
                placeholder="Exemplo: Slim"
                onChange={(event) => {
                  setTipo(event.target.value)
                }}
              />
              <label>Quantidade:</label>
              <input
                type="number"
                placeholder="Exemplo: 1"
                onChange={(event) => {
                  setQuantidade(event.target.value)
                }}
              />
              <label>Preço:</label>
              <input
                type="number"
                placeholder="Exemplo: 4,000"
                onChange={(event) => {
                  setPreco(event.target.value)
                }}
              />
              //<button onClick={addProduto}>Adicionar Produtos</button>
            </div>

            <div className="produtos-botao">
              <button onClick={getProdutos}>Mostrar todos os Produtos</button>

              {produtoLista.map((val, key) => {
                return (
                  <div className="produtos">
                    <div>
                      <h3>ID: {val.id}</h3>
                      <h3>Nome: {val.nome}</h3>
                      <h3>Preço: {val.preco}</h3>
                    </div>
                    <div>
                      <input
                        className="update"
                        type="text"
                        placeholder="Digite o novo preço do produto..."
                        onChange={(event) => {
                          setNewPreco(event.target.value)
                        }}
                      />
                      <button
                        onClick={comprarProduto(val.id, val.nome, val.preco)}
                      >
                        {' '}
                        Comprar Produtos{' '}
                      </button>
                      <button
                        onClick={() => {
                          updateProduto(val.id)
                        }}
                      >
                        {' '}
                        Atualizar Preço
                      </button>
                      <button
                        onClick={() => {
                          deleteProduto(val.id)
                        }}
                      >
                        Deletar Produto
                      </button>
                      {/* <button onClick={Pag}>Mostrar detalhes</button> */}
                      <BasicModal>
                        {(val, setProdutoLista, produtoLista)}
                      </BasicModal>
                      {/* {produtoDetalhes.map((val) => {
                        return (
                          <div className="produtos">
                            <div>
                              <h3>Nome: {val.nome}</h3>
                              <h3>Marca: {val.marca}</h3>
                              <h3>Tipo: {val.tipo}</h3>
                              <h3>Quantidade: {val.quantidade}</h3>
                              <h3>Preço: {val.preco}</h3>
                            </div>
                          </div>
                        )
                      })} */}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </fieldset>
    </>
  )
}

export default PagesProdutos
