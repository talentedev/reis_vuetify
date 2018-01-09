<template>
  <v-container>
  	<v-layout row wrap>
  		<v-flex sm2>
  			<v-select v-bind:items="years" label="Select Year" single-line bottom></v-select>
  			<v-select v-bind:items="status" label="Status" single-line bottom></v-select>
  		</v-flex>
  		<v-flex sm8 class="text-xs-center">
  			<img src="" alt="Company Logo">
  		</v-flex>
  		<v-flex sm2>
  			<v-text-field 
          label="Search" 
          prepend-icon="fa-search"
        ></v-text-field>
  		</v-flex>
  	</v-layout>
  	<v-layout row wrap class="text-center">
  		<v-data-table
				v-bind:headers="headers"
				:items="projects"
				class="elevation-1"
				>
				<template slot="items" slot-scope="props">
					<td class="text-xs-center">{{ props.item.name }}</td>
					<td class="text-xs-center">{{ props.item.address }}</td>
					<td class="text-xs-center">{{ props.item.phone }}</td>
					<td class="text-xs-center">{{ props.item.assigned }}</td>
					<td class="text-xs-center">{{ props.item.status }}</td>
					<td class="text-xs-center">{{ props.item.action }}</td>
				</template>
			</v-data-table>
  	</v-layout>
  </v-container>
</template>

<script type="text/babel">
  export default {
    name: 'Projects',
    components: {},
    data () {
      return {
        years: [2015, 2016, 2017],
        status: ['In-progress', 'Completed', 'Deleted'],
        headers: [
          {
            text: 'Owner/Insured',
            align: 'center',
            sortable: false,
            value: 'name'
          },
          {
            text: 'Address',
            align: 'center',
            sortField: null,
            value: 'address'
          },
          {
            text: 'Phone',
            align: 'center',
            sortField: null,
            value: 'phone'
          },
          {
            text: 'Assigned To',
            align: 'center',
            sortField: null,
            value: 'assigned'
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
        projects: [
          {
            name: 'Robin Hood',
            address: 'Pastel Dusk Ct',
            phone: '402-859-9845',
            assigned: 'Crew 1',
            status: 'Deleted',
            action: 'actions'
          },
          {
            name: 'John Busneil',
            address: '905 Pastel',
            phone: '594-865-8957',
            assigned: 'Crew 2',
            status: 'Completed',
            action: 'actions'
          },
          {
            name: 'Marko Zahharchuk',
            address: 'Pastel Dusk Ct',
            phone: '402-859-2345',
            assigned: 'Crew 3',
            status: 'In-progress',
            action: 'actions'
          }
        ]
      }
    },
    methods: {}
  }
</script>
