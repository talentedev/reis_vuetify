<template>
  <v-container>
    <v-layout row justify-space-around>
      <v-flex>
        <v-card>    
          <v-card-title>
            <span class="headline">{{ $route.meta.title }}</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-data-table
              v-bind:headers="headers"
              :items="users"
              class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td></td>
                  <td class="text-xs-left">{{ props.item.name }}</td>
                  <td class="text-xs-center">{{ props.item.email }}</td>
                  <td class="text-xs-center">{{ props.item.type }}</td>
                  <td class="text-xs-center">{{ props.item.status }}</td>
                  <td class="text-xs-center">{{ props.item.action }}</td>
                </template>
              </v-data-table>
              <h3 class="mt-5">Create new account for your company employee</h3>
              <v-form class="mt-3">
                <v-layout wrap justify-space-around>                
                  <v-flex md3>
                    <v-text-field label="Name"></v-text-field>
                  </v-flex>
                  <v-flex md3>
                    <v-text-field label="Email"></v-text-field>
                  </v-flex>  
                  <v-flex md3>                 
                    <v-select v-bind:items="type" label="Account Type" single-line bottom></v-select>                  
                  </v-flex>         
                </v-layout>
                <v-btn color="blue">Create</v-btn>
              </v-form>              
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>                        
    </v-layout>       
  </v-container>     
</template>

<script type="text/babel">
  // import apiTeams from '../../api/teams'
  // import CreateTeamModal from './modals/CreateTeamModal'
  // import DeleteTeamModal from './modals/DeleteTeamModal'

  export default {
    name: 'Teams',
    userModal: false,
    data () {
      return {
        type: ['Admin', 'User'],
        headers: [
          {
            text: 'No.',
            align: 'left',
            sortable: false,
            value: ''
          },
          {
            text: 'Name',
            align: 'left',
            sortField: null,
            value: 'name'
          },
          {
            text: 'Email',
            align: 'center',
            sortField: null,
            value: 'email'
          },
          {
            text: 'Type',
            align: 'center',
            sortField: null,
            value: 'type'
          },
          {
            text: 'Status',
            align: 'center',
            sortField: null,
            value: 'status'
          },
          {
            text: 'Actions',
            align: 'center',
            sortField: null,
            value: 'action'
          }
        ],
        users: [
          {
            name: 'John(owner)',
            email: 'dryforms@gmail.com',
            type: 'Admin',
            status: 'Active',
            action: 'actions'
          },
          {
            name: 'Jack',
            email: 'dryforms@gmail.com',
            type: 'User',
            status: 'Deleted',
            action: 'actions'
          },
          {
            name: 'Fred',
            email: 'dryforms@gmail.com',
            type: 'Admin',
            status: 'Suspended',
            action: 'actions'
          }
        ]
        // modal: null
      }
    },
    // components: {CreateTeamModal, DeleteTeamModal},
    created () {
        // this.$nextTick(() => {
        //     this.getList()
        // })
        // this.$on('reloadData', () => {
        //     this.getList()
        // })
    },
    methods: {
      getListxx () {
          // apiTeams.index()
          //     .then(response => {
          //         this.teams = response.data.data
          //     })
      },
      onUserModal () {
          // this.$emit('openCreateModal')
      },
      openEditModalxx (id) {
          // this.$emit('openEditModal', {
          //     id: id
          // })
      },
      openDeleteModalxx (id) {
          // this.$emit('openDeleteModal', {
          //     id: id
          // })
      }
    }
  }
</script>

<style type="text/css">
</style>