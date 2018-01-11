<template>
	<v-layout row justify-center>
		<v-dialog v-model="newProjectModal" persistent scrollable max-width="500px">
			<v-card>
				<v-card-title>
          <h3>{{ $route.meta.title }}</h3>
        </v-card-title>
				<v-divider></v-divider>
				<v-card-text style="height: 500px;" class="pl-5">
					<v-checkbox v-for="item in forms" :key="item.id" :label="item.name" v-model="selectedForms" :value="item.id"></v-checkbox>
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" flat @click="cancelNewProject()">Cancel</v-btn>
					<v-btn color="blue darken-1" flat @click="createNewProject()">Save</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        newProjectModal: true,
        forms: [
          {
            id: 1,
            name: 'Call Report'
          },
          {
            id: 2,
            name: 'Project Scope'
          },
          {
            id: 3,
            name: 'Daily Log'
          },
          {
            id: 4,
            name: 'Work Authorization'
          },
          {
            id: 5,
            name: 'Customer Responsibility'
          },
          {
            id: 6,
            name: 'Anti-Microbial'
          },
          {
            id: 7,
            name: 'Moisture Map'
          },
          {
            id: 8,
            name: 'Psychometric Report'
          },
          {
            id: 9,
            name: 'Release from Liability'
          },
          {
            id: 10,
            name: 'Work Stoppage'
          },
          {
            id: 11,
            name: 'Certificate of Completion'
          }
        ],
        selectedForms: []
      }
    },
    methods: {
      createNewProject () {
        this.newProjectModal = false
        this.$router.push('/forms/callreport')
        console.log(this.selectedForms)
      },
      cancelNewProject () {
        this.newProjectModal = false
        this.$router.push('/projects')
      }
    }
  }
</script>