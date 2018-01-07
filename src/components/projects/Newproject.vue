<template>
	<v-layout row justify-center>
		<v-dialog v-model="newProjectModal" persistent max-width="500px">
			<v-card>
				<v-card-title>New Project</v-card-title>
				<v-divider></v-divider>
				<v-card-text style="height: 500px;" class="pl-5">
					<v-checkbox v-for="item in forms" :key="item.id" :label="item.name" v-model="selectedForms" :value="item.name"></v-checkbox>
				</v-card-text>
				<v-divider></v-divider>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" flat @click="cancelNewProject()">Cancel</v-btn>
					<v-btn color="blue darken-1" flat @click="createNewProject()">Create</v-btn>
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
          }
        ],
        selectedForms: []
      }
    },
    methods: {
      createNewProject () {
        this.newProjectModal = false
        this.$router.push('/forms')
      },
      cancelNewProject () {
        this.newProjectModal = false
        this.$router.push('/projects')
      }
    }
  }
</script>