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
								<p>Owner/Insured: Jimmy Smith</p>
								<p>Job Address: 905 Pastel Dusk Court Henderson, Nevada 89012</p>
							</v-flex>
							<v-flex md6 class="text-xs-right">
								<p>Claim# 1234567</p>
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
    components: { FormHeader }
  }
</script>