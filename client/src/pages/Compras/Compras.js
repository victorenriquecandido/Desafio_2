import React from 'react'
import './Compras.css'
import { useState } from 'react'
import Axios from 'axios'
import Layout from '../../component/Layout'

function PagesCompras() {
  const [Idproduto, setIdproduto] = useState('')
  const [TotalPedido, setTotalPedido] = useState('')
  const [Item, setItem] = useState('')
  const [preco, setPreco] = useState(0)
  const [newPreco, setNewPreco] = useState(0)
  const [produtoLista, setProdutoLista] = useState([])
  const [produtoDetalhes, setProdutoDetalhes] = useState([])

  /*   const displayInfo = () => {
      console.log(qtdproduto, total, Itempagamento)
    } */

  const addProduto = () => {
    Axios.post('http://localhost:3001/create-compra', {
      Idproduto: Idproduto,
      TotalPedido: TotalPedido,
      Item: Item,
      preco: preco,
    }).then(() => {
      setProdutoLista([
        ...produtoLista,
        {
          Idproduto: Idproduto,
          TotalPedido: TotalPedido,
          Item: Item,
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

  const getProdutosDetalhes = () => {
    Axios.get('http://localhost:3001/produto_id').then((response) => {
      setProdutoDetalhes(response.data)
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
                  Idproduto: val.Idproduto,
                  TotalPedido: val.TotalPedido,
                  Item: val.Item,
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
            <h2>Compras</h2>
            <div className="information">
              <label>ID do produto</label>
              <input
                type="text"
                placeholder="Exemplo: Playstation 4"
                onChange={(event) => {
                  setIdproduto(event.target.value)
                }}
              />
              <label>Total do Produto:</label>
              <input
                type="text"
                placeholder="Exemplo: Sony"
                onChange={(event) => {
                  setTotalPedido(event.target.value)
                }}
              />
              <label>Produto:</label>
              <input
                type="text"
                placeholder="Exemplo: Slim"
                onChange={(event) => {
                  setItem(event.target.value)
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
                      <h3>Idproduto: {val.Idproduto}</h3>
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
                      <button onClick={getProdutosDetalhes}>
                        Mostrar detalhes
                      </button>
                      {produtoDetalhes.map((val) => {
                        return (
                          <div className="produtos">
                            <div>
                              <h3>Idproduto: {val.Idproduto}</h3>
                              <h3>TotalPedido: {val.TotalPedido}</h3>
                              <h3>Item: {val.Item}</h3>
                              <h3>Preço: {val.preco}</h3>
                            </div>
                          </div>
                        )
                      })}
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

export default PagesCompras
