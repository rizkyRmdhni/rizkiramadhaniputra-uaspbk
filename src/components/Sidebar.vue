<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const menus = [
    {
        name: 'DASHBOARD',
        key: 'dashboard',
        submenus: [],
        path: 'dashboard'
    },
    {
        name: 'PRODUCT',
        key: 'product',
        submenus: [
            { name: 'Tambah product', path: 'addproduct' },
            { name: 'Daftar product', path: 'product' }
        ]
    },
    {
        name: 'TRANSAKSI',
        key: 'transaksi',
        submenus: [
            { name: 'Tambah Transaksi', path: 'addtransaksi' },
            { name: 'Daftar Transaksi', path: 'transaksi' }
        ]
    }
]
</script>

<template>
    <aside
        class="w-64 fixed min-h-screen bg-gradient-to-b from-cyan-900 via-cyan-800 to-blue-900 text-white shadow-2xl font-sans">
        <!-- Header -->
        <div class="p-6 text-xl font-bold tracking-wide border-b border-cyan-700">
            TOKO SEPATU
        </div>

        <!-- Navigation -->
        <nav class="mt-4 px-2">
            <ul class="space-y-1">
                <li v-for="menu in menus" :key="menu.key">
                    <!-- Menu tanpa submenu -->
                    <div v-if="menu.submenus.length === 0">
                        <router-link :to="{ name: menu.path }"
                            class="flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200 hover:bg-cyan-700 font-medium"
                            :class="{
                                'bg-cyan-700 font-bold text-yellow-300': route.name === menu.path
                            }">
                            {{ menu.name }}
                        </router-link>
                    </div>

                    <!-- Menu dengan submenu -->
                    <div v-else
                        class="flex items-center gap-2 px-4 py-2 text-base font-semibold text-cyan-300 select-none uppercase tracking-wide">
                        <span>{{ menu.name }}</span>
                        <span class="text-xs text-cyan-400">▾</span>
                    </div>

                    <!-- Submenus -->
                    <ul v-if="menu.submenus.length > 0" class="ml-4 space-y-1">
                        <li v-for="submenu in menu.submenus" :key="submenu.path">
                            <router-link :to="{ name: submenu.path }"
                                class="block px-4 py-2 rounded-md transition duration-200 hover:bg-cyan-700 text-sm"
                                :class="{
                                    'bg-cyan-700 font-semibold text-yellow-300': route.name === submenu.path
                                }">
                                {{ submenu.name }}
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </aside>
</template>
