import api from './api'

export default {
  async get(val) {
    return await api.get(`/produto_id/${val}`)
  },
}
