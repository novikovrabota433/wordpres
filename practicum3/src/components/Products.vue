<template>
  <div>
    <nav>
      <div class = "nav-wrapper blue darken-4">
        <h4 class = "logo"><router-link to="/">e-Store</router-link></h4>
        <div class = "autorisation">
          <h4><router-link to="/register">exit</router-link></h4>
        </div>
      </div>
    </nav>
    <h3>Add Product</h3>

    <div class = "card products_add-product">
      <div>
        <input v-model = "addProductData.name" class = "validate" placeholder = "name">
      </div>
      <div>
        <input v-model = "addProductData.price" class = "validate" placeholder = "price">
      </div>
      <div>
        <input v-model = "addProductData.description" class = "validate" placeholder = "description">
      </div>
      <div>
        <input v-model = "addProductData.img" class = "validate" placeholder = "img">
      </div>
      <div>
        <i class = "material-icons medium" @click = "onAdd">done</i>
      </div>
    </div>

    <h1>Products</h1>
    <div class = "collection" v-for = "product in products" v-bind:key = "product.product_id" >
      <div v-if = "editId === product.name" class = "collection-item products_list-item" v-bind:class = "{ 'yellow lighten-4' : editId === product.name }">
        <div>{{product.name}}</div>
        <div><input class = "validate" v-model="editProductData.price"/></div>
        <div><input class = "validate" v-model="editProductData.description"/></div>
        <div><input class = "validate" v-model="editProductData.img"/></div>
        <i @click = "onEditSubmit" class = "material-icons">check</i>
        <i @click = "onCancel" class = "material-icons">cancel</i>
      </div>
      <div v-else class = "collection-item">
        <div class = "products_list-item">
          <div>{{product.name}}</div>
          <div>{{product.price}}</div>
          <div>{{product.description}}</div>
          <i @click = "onEdit(product)" class = "material-icons">mode_edit</i>
          <i @click = "onDelete(product.name)" class = "material-icons">delete</i>
        </div>
        <div class = "products_list-item1">
          <img :src="product.img" />
          <div>{{product.img}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/db'

export default {
  name: 'HelloWorld',
  data () {
    return {
      products: [],
      addProductData: {
        name: '',
        price: '',
        description: '',
        img: ''
      },
      editId: '',
      editProductData: {
        name: '',
        price: '',
        description: '',
        img: ''
      }
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      db.collection('Products').get().then(querySnapshot => {
        const products = []
        querySnapshot.forEach(doc => {
          products.push(doc.data())
        })
        this.products = products
      })
    },
    onAdd () {
      db.collection('Products').add(this.addProductData).then(this.getProducts)
    },
    onDelete (name) {
      db.collection('Products')
        .where('name', '==', name).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.delete().then(this.getProducts)
          })
        })
    },
    onEdit (product) {
      this.editId = product.name
      this.editProductData.price = product.price
      this.editProductData.description = product.description
      this.editProductData.img = product.img
    },
    onCancel () {
      this.editId = ''
      this.editProductData.price = ''
      this.editProductData.description = ''
      this.editProductData.img = ''
    },
    onEditSubmit () {
      db.collection('Products')
        .where('name', '==', this.editId).get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.set({
              name: this.editId,
              price: this.editProductData.price,
              description: this.editProductData.description,
              img: this.editProductData.img
            }).then(this.getProducts)
          })
          this.onCancel()
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products_list-item{
  display: flex;
  justify-content: space-around;
}

.products_list-item1 img{
  max-width: 200px;
  max-height: 120px;
}

.products_add-product{
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 0 auto;
}

h1, h3{
  text-align: center;
}
</style>
