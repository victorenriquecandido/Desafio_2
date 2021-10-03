/* import React from 'react' */
/* import { Descri, Main, Plan, Pagar, Cancelar } from './styles' */
/* import Toolbar from '@material-ui/core/Toolbar' */

import * as React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Desafios ICTS
          </Typography>

          <Button style={{ margin: '0px 70px' }} color="inherit" href="/">
            Produtos
          </Button>

          <Button color="inherit" href="/compras">
            Compras
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Layout
