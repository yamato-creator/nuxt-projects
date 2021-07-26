<template>
  <div class="container">
      <p>{{ message }}</p>
      <hr>
      <router-link to="/price">Price Page</router-link>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      message: 'hello world!!!'
    }
  }
}
</script>
