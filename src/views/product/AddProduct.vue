<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/productStore.js'

const store = useProductStore()
const router = useRouter()

// Form fields
const nama = ref('')
const kategori = ref('Sepatu Pria')
const harga = ref('')
const warna = ref('')
const stok = ref({
  '39': 0,
  '40': 0,
  '41': 0,
  '42': 0
})

// Reset form
const resetForm = () => {
  nama.value = ''
  kategori.value = 'Sepatu Pria'
  harga.value = ''
  warna.value = ''
  stok.value = {
    '39': 0,
    '40': 0,
    '41': 0,
    '42': 0
  }
}

const handleSubmit = async () => {
  if (!nama.value || !harga.value) {
    alert('Nama dan harga harus diisi!')
    return
  }

  const newProduct = {
    nama: nama.value,
    kategori: kategori.value,
    harga: Number(harga.value),
    warna: warna.value,
    stok: { ...stok.value }
  }

  await store.addProduct(newProduct)
  router.push({ name: 'product' })
}
</script>

<template>
  <div class="p-8 w-full bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 min-h-screen">
    <!-- Header -->
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-gray-800">Tambah Produk Sepatu</h1>
      <p class="text-gray-600 mt-2">Isi informasi produk untuk menambah ke katalog</p>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mt-3"></div>
    </div>

    <!-- Form Container -->
    <div class="max-w-2xl mx-auto">
      <div class="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl border border-white/20 overflow-hidden">
        <!-- Form Header -->
        <div class="bg-gradient-to-r from-blue-600 to-sky-600 px-8 py-6">
          <div class="flex items-center gap-3">
            <div class="w-2 h-8 bg-white/30 rounded-full"></div>
            <h2 class="text-xl font-bold text-white">👟 Form Tambah Produk</h2>
          </div>
        </div>

        <!-- Form Fields -->
        <div class="p-8 space-y-6">
          <!-- Nama Produk -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Nama Produk</label>
            <input
              v-model="nama"
              type="text"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 bg-gray-50/50"
              placeholder="Contoh: Sepatu Running Pria"
              required
            />
          </div>

          <!-- Kategori -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Kategori</label>
            <select
              v-model="kategori"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 bg-gray-50/50"
            >
              <option value="Sepatu Pria">👞 Sepatu Pria</option>
              <option value="Sepatu Wanita">👠 Sepatu Wanita</option>
              <option value="Sepatu Anak">🧒 Sepatu Anak</option>
            </select>
          </div>

          <!-- Harga -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Harga</label>
            <div class="relative">
              <span class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">Rp</span>
              <input
                v-model="harga"
                type="number"
                min="0"
                class="w-full border-2 border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-800 bg-gray-50/50"
                placeholder="Contoh: 250000"
                required
              />
            </div>
          </div>

          <!-- Warna -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-1">Warna</label>
            <input
              v-model="warna"
              type="text"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 bg-gray-50/50"
              placeholder="Contoh: Hitam, Merah"
            />
          </div>

          <!-- Stok -->
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Stok per Ukuran</label>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="ukuran in Object.keys(stok)" :key="ukuran">
                <label class="block text-sm font-medium text-gray-600 mb-1">Ukuran {{ ukuran }}</label>
                <input
                  type="number"
                  min="0"
                  class="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                  v-model="stok[ukuran]"
                />
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div class="flex gap-4 pt-4">
            <button
              type="button"
              @click="handleSubmit"
              class="flex-1 bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
            >
              💾 Simpan Produk
            </button>
            <button
              type="button"
              @click="resetForm"
              class="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
            >
              🔄 Reset Form
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
