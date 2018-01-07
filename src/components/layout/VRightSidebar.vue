<template>
  <v-navigation-drawer fixed right clipped app>
    <v-list dense>
      <v-list-tile v-for="link in $route.meta.rightLinks" :key="link.name" :to="link.path" @click.stop="left = !left">         
        <v-list-tile-content>
          <v-list-tile-title  class="text-xs-right pr-3">{{ link.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style type="text/css">

</style>