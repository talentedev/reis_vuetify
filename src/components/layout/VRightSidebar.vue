<template>
  <v-navigation-drawer fixed right clipped app class="pl-2 pr-2">
    <v-list dense class="mt-2">
      <v-list-tile v-for="link in $route.meta.rightLinks" :key="link.name" :to="link.path" @click.stop="left = !left" :class="link.mt ? 'mt-4 mb-1 white elevation-1' : 'mb-1 white elevation-1'">   
        <v-list-tile-content class="subheading">
          <v-list-tile-title  class="text-xs-right pr-3">{{ link.name }}<v-icon class="ml-2 title">{{ link.icon }}</v-icon></v-list-tile-title>
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