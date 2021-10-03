import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Conn from 'service/conn'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const BasicModal = (val) => {
  const [open, setOpen] = React.useState(false)
  const [produtoDetalhes, setProdutoDetalhes] = useState([])

  /*   Axios.get('http://localhost:3001/produto_id').then((response) => {
    setProdutoDetalhes(response.data)
    }) */

  const handleOpen = () => {
    console.log('oi')
    console.log(val)

    Conn.get().then((response) => {
      setProdutoDetalhes(response.data)
      setOpen(true)
      console.log(response)
    })
  }
  const handleClose = () => setOpen(false)

  return (
    <>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {produtoDetalhes.map((val) => {
              return (
                <div className="produtos">
                  <div>
                    <h3>ID: {val.id}</h3>
                    <h3>Nome: {val.nome}</h3>
                    <h3>Marca: {val.marca}</h3>
                    <h3>Tipo: {val.tipo}</h3>
                    <h3>Quantidade: {val.quantidade}</h3>
                    <h3>Preço: {val.preco}</h3>
                  </div>
                </div>
              )
            })}
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default BasicModal
