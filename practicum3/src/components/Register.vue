<template>
  <div>
    <nav>
      <div class = "nav-wrapper blue darken-4">
        <h4 class = "logo"><router-link to="/">e-Store</router-link></h4>
        <div class = "autorisation">
          <h4><router-link to="/">login</router-link></h4>
        </div>
      </div>
    </nav>
    <div class = "card products_add-product">
    <form @submit.prevent="pressed">
      <div class="email">
        <input type="email" v-model="email" placeholder="email" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="password" />
      </div>
      <button type="submit">Register</button>
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
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.replace({ name: 'Login' })
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
