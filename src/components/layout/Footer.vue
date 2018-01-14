<template>
  <div>
    <b-navbar type="light" variant="warning">
      <b-navbar-brand>
        <router-link to="Home">McMakler Frontend Challenge</router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  background-color: rgb(37, 162, 183);
  color: white;
  height: 200px;
  padding: 80px;
  padding-top: 50px;
}
</style>
