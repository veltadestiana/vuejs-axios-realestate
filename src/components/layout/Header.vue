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
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>
