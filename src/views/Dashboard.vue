<script setup>
// Statistik dummy
const stats = [
  { title: 'Total Produk', value: 128, icon: '👟', color: 'from-blue-400 to-blue-600' },
  { title: 'Kategori', value: 6, icon: '📂', color: 'from-sky-400 to-sky-600' },
  { title: 'Stok Tersedia', value: 943, icon: '📦', color: 'from-green-400 to-emerald-500' },
  { title: 'Penjualan Hari Ini', value: 'Rp 2.750.000', icon: '💰', color: 'from-purple-400 to-violet-600' }
]

const recent = [
  { id: '#TX001', produk: 'Sneakers Pria 42', qty: 1, total: 'Rp 350.000', status: 'Selesai' },
  { id: '#TX002', produk: 'Slip On Wanita 39', qty: 2, total: 'Rp 480.000', status: 'Diproses' },
  { id: '#TX003', produk: 'Boots Anak 33', qty: 1, total: 'Rp 270.000', status: 'Menunggu' }
]
</script>

<template>
  <div class="p-8 w-full bg-gradient-to-br from-gray-50 via-blue-50 to-sky-100 min-h-screen">
    <!-- Header -->
    <div class="mb-10">
      <h1 class="text-3xl font-bold text-gray-800">Dashboard</h1>
      <p class="text-gray-600 mt-2">Ringkasan aktivitas dan penjualan</p>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-sky-500 rounded-full mt-3"></div>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      <div
        v-for="s in stats"
        :key="s.title"
        class="p-6 rounded-xl shadow-md text-white bg-gradient-to-br"
        :class="s.color"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm opacity-80">{{ s.title }}</p>
            <p class="text-3xl font-bold mt-1">{{ s.value }}</p>
          </div>
          <div class="text-4xl opacity-80">{{ s.icon }}</div>
        </div>
      </div>
    </div>

    <!-- Tabel Transaksi -->
    <div class="bg-white/90 backdrop-blur-md border border-white/30 rounded-xl shadow-lg">
      <div class="p-6 border-b border-gray-200/50">
        <div class="flex items-center gap-3">
          <div class="w-2 h-8 bg-gradient-to-b from-blue-400 to-sky-500 rounded-full"></div>
          <h2 class="text-xl font-bold text-gray-800">Transaksi Terbaru</h2>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gradient-to-r from-blue-50 to-sky-100 text-gray-700">
            <tr>
              <th class="px-6 py-4 text-left font-bold uppercase tracking-wide">ID</th>
              <th class="px-6 py-4 text-left font-bold uppercase tracking-wide">Produk</th>
              <th class="px-6 py-4 text-left font-bold uppercase tracking-wide">Qty</th>
              <th class="px-6 py-4 text-left font-bold uppercase tracking-wide">Total</th>
              <th class="px-6 py-4 text-left font-bold uppercase tracking-wide">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200/60">
            <tr
              v-for="item in recent"
              :key="item.id"
              class="hover:bg-sky-50/50 transition duration-200"
            >
              <td class="px-6 py-4 font-semibold text-blue-600">{{ item.id }}</td>
              <td class="px-6 py-4 text-gray-800">{{ item.produk }}</td>
              <td class="px-6 py-4">{{ item.qty }}</td>
              <td class="px-6 py-4 font-semibold">{{ item.total }}</td>
              <td class="px-6 py-4">
                <span
                  class="inline-flex px-3 py-1 text-xs font-bold rounded-full"
                  :class="{
                    'bg-gradient-to-r from-green-400 to-green-500 text-white': item.status === 'Selesai',
                    'bg-gradient-to-r from-yellow-400 to-orange-400 text-white': item.status === 'Diproses',
                    'bg-gradient-to-r from-red-400 to-pink-400 text-white': item.status === 'Menunggu'
                  }"
                >
                  {{ item.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
