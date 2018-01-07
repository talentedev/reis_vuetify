<template>    
  <v-navigation-drawer fixed left clipped app>
    <v-list dense>
      <v-list-tile v-for="link in $route.meta.leftLinks" :key="link.name" :to="link.path" @click.stop="right = !right">         
        <v-list-tile-content>
          <v-list-tile-title class="pl-3">{{ link.name }}</v-list-tile-title>
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