<template>
  <div>
    <nav>
      <div class = "nav-wrapper blue darken-4">
        <h4 class = "logo"><router-link to="/">e-Store</router-link></h4>
        <div class = "autorisation">
          <h4><router-link to="/register">register</router-link></h4>
        </div>
      </div>
    </nav>
    <div class = "card products_add-product">
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="login" v-model="email" />
      </div>
      <div class="password">
        <input type="password" placeholder="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    pressed () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({ name: 'Products' })
        })
        .catch(error => (this.error = error))
    }
  }
}
</script>

<style>
template{
    display: flex;
}

.products_add-product{
    width: 30%;
    margin: auto;
}

.btn{
    margin: 0 auto;
}
</style>
