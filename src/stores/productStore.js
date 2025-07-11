import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),

  getters: {
    tersedia() {
      return this.products.filter(p => p.tersedia)
    },

    findById: (state) => (id) => {
      return state.products.find(p => p.id === id)
    }
  },

  actions: {
    async getProducts() {
      try {
        const res = await axios.get('http://localhost:3000/product')
        this.products = res.data
      } catch (error) {
        console.error("Gagal mengambil data produk:", error)
      }
    },

    async addProduct(product) {
      try {
        await this.getProducts()

        let maxId = 0
        if (this.products.length > 0) {
          maxId = Math.max(...this.products.map(p => Number(p.id)))
        }

        const newProduct = {
          id: String(maxId + 1),
          ...product
        }

        const res = await axios.post('http://localhost:3000/product', newProduct)
        this.products.push(res.data)
      } catch (error) {
        console.error("Gagal menambahkan produk:", error)
      }
    },

    async updateProduct(id, updatedData) {
      try {
        await axios.put(`http://localhost:3000/product/${id}`, updatedData)
        const index = this.products.findIndex(p => p.id === id)
        if (index !== -1) {
          this.products[index] = { id, ...updatedData }
        }
      } catch (error) {
        console.error("Gagal memperbarui produk:", error)
      }
    },

    async deleteProduct(id) {
      try {
        await axios.delete(`http://localhost:3000/product/${id}`)
        this.products = this.products.filter(p => p.id !== id)
      } catch (error) {
        console.error("Gagal menghapus produk:", error)
      }
    },

    async toggleStokUkuran(productId, ukuran) {
      try {
        const product = this.findById(productId)
        if (!product) return

        const stokBaru = { ...product.stok }
        stokBaru[ukuran] = stokBaru[ukuran] > 0 ? 0 : 1

        await this.updateProduct(productId, { ...product, stok: stokBaru })
      } catch (error) {
        console.error("Gagal toggle stok ukuran:", error)
      }
    }
  }
})
