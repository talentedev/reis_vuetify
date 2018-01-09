<template>
  <v-toolbar fixed app clipped-left clipped-right>
    <v-toolbar-title>DryForms</v-toolbar-title>
    <v-toolbar-items v-for="item in menuItems" :key="item.route">
      <v-btn flat :to="item.route">{{ item.name }}</v-btn>            
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <!-- <v-toolbar-items>
      <v-btn flat v-if="!$session.get('apiToken')" to="/login">Login</v-btn>
      <v-btn flat v-if="!$session.get('apiToken')" to="/register">Register</v-btn>
      <v-btn flat v-if="$session.get('apiToken')">Dashboard</v-btn>
      <v-btn flat v-if="$session.get('apiToken')" v-on:click="logout()">Logout</v-btn>
    </v-toolbar-items> -->
  </v-toolbar>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        menuItems: [
          {
            name: 'Projects',
            route: '/projects'
          },
          {
            name: 'Settings',
            route: '/settings/account'
          },
          {
            name: 'Standards',
            route: '/standards/formorder'
          },
          {
            name: 'Equipment',
            route: '/equipment'
          },
          {
            name: 'Training',
            route: '/training'
          }
        ]
      }
    }
  }
</script>

<style type="text/css">
  .toolbar {
    background-color: #b7aba2 !important; /* Toolbar background color */
  }
  .toolbar .btn {
    color: #f3f3f3 !important;
    text-transform: capitalize;
    font-size: 20px;
  }
  .toolbar__items:hover .btn {
    color: #3B85D7 !important;
  }
  .btn--active .btn__content:before, .btn:focus .btn__content:before, .btn:hover .btn__content:before {
    background-color: #b7aba2 !important;
  }
  .btn:focus, .btn:hover, .btn:active {
    color: #3B85D7 !important;
  }
</style>