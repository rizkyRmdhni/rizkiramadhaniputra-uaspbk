<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/productStore.js'

const store = useProductStore()
const router = useRouter()

const isLoading = ref(true)
const selectedProduct = ref(null)
const selectedUkuran = ref(null)
const stokBaru = ref(1)
const showForm = ref(false)

onMounted(async () => {
  isLoading.value = true
  await store.getProducts()
  isLoading.value = false
})

const openStokForm = (product, ukuran) => {
  selectedProduct.value = product
  selectedUkuran.value = ukuran
  stokBaru.value = 1
  showForm.value = true
}

const tambahStok = async () => {
  const updated = { ...selectedProduct.value }
  const current = updated.stok[selectedUkuran.value] || 0
  updated.stok[selectedUkuran.value] = current + Number(stokBaru.value)

  await store.updateProduct(updated.id, updated)
  showForm.value = false
}

const hapusProduct = async (id) => {
  if (confirm('Yakin ingin menghapus produk ini?')) {
    await store.deleteProduct(id)
  }
}

const editProduct = (id) => {
  router.push({ name: 'editproduct', params: { id } })
}
</script>

<template>
  <div class="p-8 w-full bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 min-h-screen">
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800">Daftar Produk Sepatu</h1>
      <p class="text-gray-600 mt-2">Kelola produk dan stok sepatu yang tersedia</p>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mt-3"></div>
    </div>

    <!-- Loading -->
    <div v-if="isLoading" class="flex justify-center items-center h-48 text-blue-600 font-semibold text-lg animate-pulse">
      🔄 Memuat data produk...
    </div>

    <!-- Produk Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in store.products"
        :key="product.id"
        class="bg-white shadow-md rounded-xl p-6 border border-gray-200"
      >
        <!-- Info Produk -->
        <div class="mb-4">
          <h2 class="text-lg font-bold text-gray-800">{{ product.nama }}</h2>
          <p class="text-sm text-gray-500">Kategori: {{ product.kategori }}</p>
          <p class="text-sm text-gray-500">Harga: Rp {{ Number(product.harga).toLocaleString() }}</p>
          <p class="text-sm text-gray-500">Warna: {{ product.warna || '-' }}</p>
        </div>

        <!-- Stok Ukuran -->
        <div>
          <h3 class="text-sm font-semibold text-gray-700 mb-2">Stok Ukuran:</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="(jumlah, ukuran) in product.stok"
              :key="ukuran"
              class="px-3 py-1 rounded-lg text-sm font-semibold"
              :class="jumlah > 0
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'"
            >
              {{ ukuran }} ({{ jumlah }})
            </span>
          </div>
        </div>

        <!-- Tombol Aksi -->
        <div class="mt-6 flex flex-wrap gap-3">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg"
            @click="openStokForm(product, Object.keys(product.stok)[0])"
          >
            ➕ Tambah Stok
          </button>

          <button
            class="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg"
            @click="editProduct(product.id)"
          >
            ✏️ Edit
          </button>

          <button
            class="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded-lg"
            @click="hapusProduct(product.id)"
          >
            🗑️ Hapus
          </button>
        </div>
      </div>
    </div>

    <!-- Modal tambah stok -->
    <div
      v-if="showForm"
      class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-lg p-6 w-full max-w-sm shadow-lg">
        <h2 class="text-xl font-bold mb-4 text-gray-800">Tambah Stok</h2>

        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-1">Ukuran</label>
          <select v-model="selectedUkuran" class="w-full border border-gray-300 rounded px-3 py-2">
            <option v-for="uk in Object.keys(selectedProduct.stok)" :key="uk" :value="uk">
              {{ uk }}
            </option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-1">Jumlah Stok Baru</label>
          <input type="number" v-model="stokBaru" min="1" class="w-full border border-gray-300 rounded px-3 py-2" />
        </div>

        <div class="flex justify-end gap-3">
          <button @click="showForm = false" class="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Batal
          </button>
          <button @click="tambahStok" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Simpan
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
