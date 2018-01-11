<template>
	<v-container>
		<v-layout row wrap>
			<v-flex class="text-xs-center">
				<v-card>
					<v-card-text>
						<form-header/>
						<h2 class="mb-2">{{ $route.meta.title }}</h2>
						<v-divider></v-divider>
						<v-layout row wrap justify-space-between class="mt-2">
							<v-flex md6 class="text-xs-left">
								<p>Owner/Insured: {{ ownerName }}</p>
								<p>Job Address: {{ jobAddress }}</p>
							</v-flex>
							<v-flex md6 class="text-xs-right">
								<p>Claim# {{ claimNumber }}</p>
							</v-flex>
						</v-layout>
						<v-form id="scope_table">
							<v-container fluid>
								<v-layout>
									<v-flex>
										<table class="text-xs-center" style="width:100%;">
											<tr><th colspan="2" class="bg-grey"><h3>Bedroom 1</h3></th></tr>
											<tr>
												<td class="w-50 bg-grey">Overall Square Feet</td>
												<td class="w-50"><input type="text"/></td>
											</tr>
										</table>
										<table class="text-xs-center mt-3" style="width:100%;">
											<tr>
												<th class="bg-grey w-5">X</th>
												<th class="bg-grey w-30">Service</th>
												<th class="bg-grey w-5">UOM</th>
												<th class="bg-grey w-10">Units/Hr</th>
												<th class="w-5">X</th>
												<th class="w-30">Service</th>
												<th class="w-5">UOM</th>
												<th class="w-10">Units/Hr</th>
											</tr>
											<tr v-for="item in bedroom">
												<td class="bg-grey w-5"></td>
												<td class="bg-grey w-30">{{ item.serviceL }}</td>
												<td class="bg-grey w-5">{{ item.uomL }}</td>
												<td class="bg-grey w-10"><input type="text"/></td>
												<td class="w-5"></td>
												<td class="w-30">{{ item.serviceR }}</td>
												<td class="w-5">{{ item.uomR }}</td>
												<td class="w-10"><input type="text"/></td>
											</tr>
										</table>
									</v-flex>
								</v-layout>								
							</v-container>
						</v-form>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
		<v-layout row wrap class="mt-5">
			<v-flex class="text-xs-center">
				<v-card>
					<v-card-text>
						<form-header/>
						<h2 class="mb-2">{{ $route.meta.title }}</h2>
						<v-divider></v-divider>
						<v-layout row wrap justify-space-between class="mt-2">
							<v-flex md6 class="text-xs-left">
								<p>Owner/Insured: {{ ownerName }}</p>
								<p>Job Address: {{ jobAddress }}</p>
							</v-flex>
							<v-flex md6 class="text-xs-right">
								<p>Claim# {{ claimNumber }}</p>
							</v-flex>
						</v-layout>
						<v-form id="scope_table">
							<v-container fluid>
								<v-layout>
									<v-flex>
										<table class="text-xs-center" style="width:100%;">
											<tr><th colspan="2" class="bg-grey"><h3>Miscellaneous</h3></th></tr>
										</table>
										<table class="text-xs-center mt-3" style="width:100%;">
											<tr>
												<th class="bg-grey w-5">X</th>
												<th class="bg-grey w-30">Service</th>
												<th class="bg-grey w-5">UOM</th>
												<th class="bg-grey w-10">Units/Hr</th>
												<th class="w-5">X</th>
												<th class="w-30">Service</th>
												<th class="w-5">UOM</th>
												<th class="w-10">Units/Hr</th>
											</tr>
											<tr v-for="item in Miscellaneous">
												<td class="bg-grey w-5"></td>
												<td class="bg-grey w-30">{{ item.serviceL }}</td>
												<td class="bg-grey w-5">{{ item.uomL }}</td>
												<td class="bg-grey w-10"><input type="text"/></td>
												<td class="w-5"></td>
												<td class="w-30">{{ item.serviceR }}</td>
												<td class="w-5">{{ item.uomR }}</td>
												<td class="w-10"><input type="text"/></td>
											</tr>
										</table>
									</v-flex>
								</v-layout>								
							</v-container>
						</v-form>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>					
</template>

<script type="text/babel">
  import FormHeader from './FormHeader'
  export default {
    data () {
      return {
        ownerName: 'Jimmy Smith',
        jobAddress: '905 Pastel Dusk Court Henderson, Nevada 89012',
        claimNumber: '1234567',
        bedroom: [
          {
            serviceL: 'Contents Manipulation',
            uomL: 'HR',
            serviceR: 'Upper Cabinets - Demo',
            uomR: 'LF'
          },
          {
            serviceL: '',
            uomL: '',
            serviceR: 'Lower Cabinets - Demo',
            uomR: 'LF'
          },
          {
            serviceL: 'Carpet Extraction',
            uomL: 'SF',
            serviceR: 'Floor to Ceiling Cabinets - Demo',
            uomR: 'LF'
          },
          {
            serviceL: 'Hard Surface Extraction',
            uomL: 'SF',
            serviceR: 'Counter Top',
            uomR: 'LF'
          },
          {
            serviceL: 'Heavy Extraction',
            uomL: 'SF',
            serviceR: 'Toe Kick',
            uomR: 'LF'
          },
          {
            serviceL: 'Weighted Extraction',
            uomL: 'SF',
            serviceR: 'Back Splash',
            uomR: 'LF'
          },
          {}
        ],
        Miscellaneous: [
          {
            serviceL: '',
            uomL: '',
            serviceR: '',
            uomR: ''
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ]
      }
    },
    components: { FormHeader }
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