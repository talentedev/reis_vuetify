<template>
	<v-container>
		<v-layout row wrap>
			<v-flex class="text-xs-center">
				<v-card>
					<v-card-text>
						<form-header/>
						<h3>{{ $route.meta.title }}</h3>
						<v-divider></v-divider>
						<v-layout row wrap justify-space-between>
							<v-flex md6 class="text-xs-left">
								<p>Owner/Insured: {{ ownerName }}</p>
								<p>Job Address: {{ jobAddress }}</p>
							</v-flex>
							<v-flex md6 class="text-xs-right">
								<p>Claim# {{ claimNumber }}</p>
							</v-flex>
						</v-layout>
						<v-form>
							
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
        claimNumber: '1234567'
      }
    },
    components: { FormHeader }
  }
</script>