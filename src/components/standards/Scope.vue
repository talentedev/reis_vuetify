<template>
	<v-container>
		<h2 class="mb-2">{{ $route.meta.title }}</h2>
		<v-layout row wrap>
			<v-flex class="text-xs-center">
				<v-card>
					<v-card-text>						
						<v-form id="scope_table">
							<v-container fluid class="pt-5">
								<v-layout class="text-xs-left">
									<v-flex class="text-xs-left">
										<label><h3>* Enter side menu name</h3></label>
										<v-text-field 
											hint="18 out 24 characters"
											v-model="sideMenuName"
										></v-text-field>		
									</v-flex>									
								</v-layout>
								<v-layout class="text-xs-left">
									<v-flex class="text-xs-left">
										<label><h3>* Enter form title</h3></label>
										<v-text-field 
											v-model="formTitle"
										></v-text-field>
									</v-flex>									
								</v-layout>								
								<v-layout class="mt-4">
									<v-flex v-for="(index, count) in tableCols" :key="index">
										<table class="text-xs-center mt-3">
											<tr>
												<th :class="count == 0 ? 'bg-grey w-5': 'w-5'">X</th>
												<th :class="count == 0 ? 'bg-grey w-30': 'w-30'">Service</th>
												<th :class="count == 0 ? 'bg-grey w-10': 'w-10'">Units/Hr</th>												
											</tr>
											<tr v-for="item in services">
												<td :class="count == 0 ? 'bg-grey w-5': 'w-5'"><input type="text"/></td>
												<td :class="count == 0 ? 'bg-grey w-30': 'w-30'"><input type="text"/></td>
												<td :class="count == 0 ? 'bg-grey w-10': 'w-10'"><input type="text"/></td>												
											</tr>
										</table>
									</v-flex>									
								</v-layout>
								<v-flex class="text-xs-left mt-5">
									<v-checkbox 
										label="Additional notes. (Select if you wish to have Additional notes text box)"
										v-model="addNotes"
									></v-checkbox>							
								</v-flex>								
							</v-container>
						</v-form>
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
        sideMenuName: 'Project Scope',
        formTitle: 'Project Scope',
        addNotes: false,
        ownerName: 'Jimmy Smith',
        jobAddress: '905 Pastel Dusk Court Henderson, Nevada 89012',
        claimNumber: '1234567',
        tableCols: new Array(2),
        services: new Array(20)
      }
    }
  }
</script>

<style type="text/css">
	#scope_table table, #scope_table th, #scope_table td {
		border: 1px solid black;
		border-collapse: collapse;
		padding: 5px;
	}
	.w-50 {
		width: 50%;
	}
	.w-30 {
		width: 30%
	}
	.w-10 {
		width: 10%
	}
	.w-5 {
		width: 5%
	}
	.bg-grey {
		background-color: #c3c3c3;
	}
	#scope_table table input {
		text-align:center;
		width: 100%;
	}
</style>