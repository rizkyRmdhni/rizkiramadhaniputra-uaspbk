# 👟 Aplikasi Manajemen Produk & Transaksi

Aplikasi ini merupakan sistem manajemen sederhana berbasis **Vue 3**, **Pinia**, dan **Tailwind CSS**. Data disimpan menggunakan **JSON Server** sebagai REST API. Aplikasi ini berfungsi untuk mengelola data **produk (sepatu)** dan **transaksi penjualan**.

---

## 📌 Fitur Utama

- 🔹 Menambahkan, mengedit, dan menghapus produk
- 🔹 Menandai apakah produk tersedia atau tidak
- 🔹 Mencatat transaksi dan mengelola daftar transaksi
- 🔹 Dashboard dummy sebagai halaman utama
- 🔹 Sidebar navigasi responsif berbasis route aktif

---

## 🧭 Routing (Vue Router)

| Path                      | Name             | Komponen             | Deskripsi                                           |
|---------------------------|------------------|-----------------------|-----------------------------------------------------|
| `/dashboard`              | `dashboard`      | `Dashboard.vue`       | Halaman utama dengan data statistik dummy           |
| `/product`                | `product`        | `Product.vue`         | Menampilkan daftar produk                           |
| `/product/add`            | `addproduct`     | `AddProduct.vue`      | Form untuk menambahkan produk baru                  |
| `/product/edit/:id`       | `editproduct`    | `EditProduct.vue`     | Form untuk mengedit produk berdasarkan ID           |
| `/transaksi`              | `transaksi`      | `Transaksi.vue`       | Daftar transaksi yang dilakukan                     |
| `/transaksi/add`          | `addtransaksi`   | `AddTransaksi.vue`    | Form tambah transaksi baru                          |
| `/transaksi/edit/:id`     | `edittransaksi`  | `EditTransaksi.vue`   | Edit data transaksi berdasarkan ID                  |

---

## 🌐 Endpoint JSON Server

JSON Server digunakan sebagai dummy API. Jalankan dengan perintah berikut:

```bash
npx json-server --watch db.json --port 3000

| Method | Endpoint    | Deskripsi                       |
| ------ | ----------- | ------------------------------- |
| GET    | `/menu`     | Mengambil semua produk          |
| POST   | `/menu`     | Menambahkan produk baru         |
| PUT    | `/menu/:id` | Mengedit data produk            |
| DELETE | `/menu/:id` | Menghapus produk berdasarkan ID |

| Method | Endpoint         | Deskripsi                          |
| ------ | ---------------- | ---------------------------------- |
| GET    | `/transaksi`     | Mengambil semua transaksi          |
| POST   | `/transaksi`     | Menambahkan transaksi baru         |
| PUT    | `/transaksi/:id` | Mengedit data transaksi            |
| DELETE | `/transaksi/:id` | Menghapus transaksi berdasarkan ID |
