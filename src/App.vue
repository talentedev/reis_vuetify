<template>
  <div id="app">
    <v-app>
      <v-header/>
      <v-left-sidebar/>
      <v-right-sidebar/>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer></v-footer>
    </v-app>
  </div>  
</template>

<script>
  import VHeader from './components/layout/VHeader'
  import VLeftSidebar from './components/layout/VLeftSidebar'
  import VRightSidebar from './components/layout/VRightSidebar'

  export default {
    name: 'app',
    components: {
      VHeader,
      VLeftSidebar,
      VRightSidebar
    }
  }
</script>

<style type="text/css">
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;*/
    /*color: #2c3e50;*/
  }
  .navigation-drawer {
    max-width: 200px !important; /* sidebar width */
  }
</style>
