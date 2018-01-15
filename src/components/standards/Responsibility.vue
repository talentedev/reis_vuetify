<template>
	<v-container>
		<h2 class="mb-2">{{ $route.meta.title }}</h2>
		<v-layout>
			<v-flex>
				<v-card>
					<v-card-text>
						<v-container class="pt-5">
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
							<v-layout class="text-xs-left">
								<v-flex class="text-xs-left">
									<label><h3>* Enter form body text</h3></label>
									<vue-editor id="bodyEditor" v-model="bodyText" class="mt-3 mb-3"></vue-editor>
								</v-flex>									
							</v-layout>
							<v-layout>
								<v-flex class="text-xs-left">
									<v-checkbox 
										label="Additional notes. (Select if you wish to have Additional notes text box)"
										v-model="addNotes"
									></v-checkbox>							
								</v-flex>	
							</v-layout>	
							<v-layout>
								<v-flex class="text-xs-left">
									<v-checkbox 
										label="Footer text. (Select if you wish to have a footer with text)"
										v-model="addFooter"
									></v-checkbox>
									<transition name="fade">
										<vue-editor id="footerEditor" v-model="footerText" v-if="addFooter" class="mb-3"></vue-editor>							
									</transition>	
								</v-flex>	
							</v-layout>		
							<v-layout>
								<v-flex class="text-xs-left">
									<v-checkbox 
										label="Owner/Occupant and Company electronic signature. (Select if you wish to have electronic signature)"
										v-model="addSignature"
									></v-checkbox>							
								</v-flex>	
							</v-layout>	
						</v-container>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>		
	</v-container>
</template>

<script type="text/babel">
  import { VueEditor } from 'vue2-editor'
  export default {
    components: {
      VueEditor
    },
    data () {
      return {
        sideMenuName: 'Customer Responsibility',
        formTitle: 'Customer Responsibility',
        addNotes: false,
        addFooter: false,
        addSignature: false,
        bodyText: '<h1>some content</h1>',
        footerText: 'Please call in the event of an Emergency or if you have any questions. I have read and understand the information above.'
      }
    },
    methods: {
      test: function () {
        console.log(this.footerText)
      }
    }
  }
</script>

<style type="text/css">
	#bodyEditor {
		min-height: 500px;
	}
	#footerEditor {
		height: 150px;
	}
</style>