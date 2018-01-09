<template>    
  <v-navigation-drawer fixed left clipped app class="pl-2 pr-2">
    <v-list dense class="mt-2">
      <v-list-tile v-for="link in $route.meta.leftLinks" :key="link.name" :to="link.path" @click.stop="right = !right" :class="link.mb ? 'mb-4 white elevation-1' : 'mb-1 white elevation-1'">  
        <v-list-tile-content class="subheading">
          <v-list-tile-title><v-icon class="mr-3 title">{{ link.icon }}</v-icon>{{ link.name }}</v-list-tile-title>
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
  .navigation-drawer {
    max-width: 270px !important; /* sidebar width */
    background-color: #f3efe9 !important;
  }
</style>