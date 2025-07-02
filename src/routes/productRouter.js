import AddProduct from "@/views/product/AddProduct.vue";
import EditProduct from "@/views/product/EditProduct.vue";
import Product from "@/views/product/Product.vue";

export default [
    { path: '/product', name: 'product', component: Product },
    { path: '/product/add', name: 'addproduct', component: AddProduct },
    { path: '/product/edit/:id', name: 'editproduct', component: EditProduct },
]