import AddTransaksi from "@/views/transaksi/AddTransaksi.vue";
import EditTransaksi from "@/views/transaksi/EditTransaksi.vue";
import Transaksi from "@/views/transaksi/Transaksi.vue";

export default [
    { path: '/transaksi', name: 'transaksi', component: Transaksi },
    { path: '/transaksi/add', name: 'addtransaksi', component: AddTransaksi },
    { path: '/transaksi/edit/:id', name: 'edittransaksi', component: EditTransaksi },
]