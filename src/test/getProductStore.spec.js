import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useProductStore } from '@/stores/ProductStore'

describe('Product Store - Getters', () => {
  let store

  beforeEach(() => {
    setActivePinia(createPinia())
    store = useProductStore()

    // Isi dummy products
    store.products = [
      {
        id: '1',
        nama: 'Sepatu A',
        tersedia: true,
        stok: { '40': 3, '41': 2 }
      },
      {
        id: '2',
        nama: 'Sepatu B',
        tersedia: false,
        stok: { '39': 0, '42': 1 }
      },
      {
        id: '3',
        nama: 'Sepatu C',
        tersedia: true,
        stok: { '40': 0, '43': 4 }
      }
    ]
  })

  it('getter tersedia hanya mengembalikan produk dengan tersedia = true', () => {
    const result = store.tersedia
    expect(result.length).toBe(2)
    expect(result.every(p => p.tersedia)).toBe(true)
  })

  it('getter findById mengembalikan produk yang sesuai ID', () => {
    const result = store.findById('2')
    expect(result).toBeDefined()
    expect(result.nama).toBe('Sepatu B')
  })

  it('getter findById mengembalikan undefined jika id tidak ditemukan', () => {
    const result = store.findById('999')
    expect(result).toBeUndefined()
  })
})
