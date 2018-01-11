<template>
	<v-container>
    <h1>{{ $route.meta.title }}</h1>
    <v-layout row justify-space-around class="mt-3">
      <v-flex md8>
        <v-card>
          <v-card-title></v-card-title>
          <v-card-text>
            <v-container class="text-xs-center">
            	<v-layout justify-space-around>
            		<v-flex md6>
	            		<v-list dense class="mt-2">
		            	  <draggable v-model="forms">   
		            	  	<transition-group name="list-complete">         		
									      <v-list-tile v-for="item in forms" :key="item.name" class="mb-3 white elevation-3 list-complete-item"> 
									        <v-list-tile-action>
									          <v-icon class="title">{{ item.icon }}</v-icon>
									        </v-list-tile-action> 
									        <v-list-tile-content class="subheading">          
									          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
									        </v-list-tile-content>
									      </v-list-tile>
									    </transition-group>  
								    </draggable>  
								  </v-list> 
	            	</v-flex>    
            	</v-layout>            	        	
						  <v-btn>Reset</v-btn>
						  <v-btn>Done</v-btn>           	
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>          	
</template>

<script type="text/babel">
  import draggable from 'vuedraggable'
  export default {
    data () {
      return {
        forms: [
          {
            name: 'Project Scope',
            icon: 'fa-newspaper-o'
          },
          {
            name: 'Work Authorization',
            icon: 'fa-pencil'
          },
          {
            name: 'Anti-Microbial',
            icon: 'fa-certificate'
          },
          {
            name: 'Customer Responsibility',
            icon: 'fa-hand-grab-o'
          },
          {
            name: 'Release from Liability',
            icon: 'fa-chain-broken'
          },
          {
            name: 'Work Stoppage',
            icon: 'fa-hand-paper-o'
          },
          {
            name: 'Certificate of Completion',
            icon: 'fa-trophy'
          }
        ]
      }
    },
    components: { draggable }
  }
</script>

<style type="text/css">
	.list-complete-item {
		transition: all 1s;
	}
	.list-complete-enter, .list-complete-leave-active {
		opacity: 0;
	}
</style>