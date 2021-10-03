import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PagesProdutos from '../pages/Produtos/Produtos'
import PagesCompras from 'pages/Compras/Compras'

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/" component={PagesProdutos} />
        <Route exact path="/compras" component={PagesCompras} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
