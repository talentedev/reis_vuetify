<template>
	<v-container>
    <h1>{{ $route.meta.title }}</h1>
    <v-layout row justify-space-around class="mt-3">
      <v-flex>
        <v-card>    
          <v-card-title></v-card-title>
          <v-card-text>
            <v-container>
              <v-data-table
              v-bind:headers="headers"
              :items="invoices"
              class="elevation-1"
              >
                <template slot="items" slot-scope="props">
                  <td>{{ props.index + 1 }}</td>
                  <td class="text-xs-left">{{ props.item.amount }}</td>
                  <td class="text-xs-left">{{ props.item.status }}</td>
                  <td class="text-xs-left">{{ props.item.duedate }}</td>
                  <td class="text-xs-left">{{ props.item.action }}</td>
                </template>
              </v-data-table>                   
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>                        
    </v-layout>       
  </v-container>   
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        headers: [
          {
            text: 'No.',
            align: 'left',
            sortable: false,
            value: ''
          },
          {
            text: 'Amount',
            align: 'left',
            sortField: null,
            value: 'amount'
          },
          {
            text: 'Status',
            align: 'left',
            sortField: null,
            value: 'status'
          },
          {
            text: 'Due Date',
            align: 'left',
            sortField: null,
            value: 'duedate'
          },
          {
            text: 'Actions',
            align: 'left',
            sortField: null,
            value: 'action'
          }
        ],
        invoices: [
          {
            amount: '12',
            status: 'Active',
            duedate: '2017-3-8',
            action: 'actions'
          },
          {
            amount: '34',
            status: 'Active',
            duedate: '2017-8-8',
            action: 'actions'
          },
          {
            amount: '45',
            status: 'Active',
            duedate: '2017-2-8',
            action: 'actions'
          }
        ]
      }
    },
  }
</script>