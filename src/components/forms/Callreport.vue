<template>
	<v-container>
		<v-layout row wrap>
			<v-flex class="text-xs-center">
				<v-card>
					<v-card-text>
						<form-header/>
						<h3>{{ $route.meta.title }}</h3>
						<v-divider></v-divider>
						<v-form>
							<v-layout row wrap justify-space-around>
								<v-flex d-flex md5>
									<v-container class="text-xs-left">
										<v-flex class="text-xs-center">
											<h4>Job Site</h4>
										</v-flex>										
										<v-layout row wrap class="mt-3">
											<v-flex d-flex v-for="item in customerTypes" :key="item.label" xs6>
												<v-checkbox :label="item.label" v-model="selectedCustomerType" :value="item.value"></v-checkbox>
											</v-flex>
										</v-layout>
										<div v-for="item in inputGroup1" :key="item.label">
											<label >{{ item.label }}</label>
											<v-text-field label="" class="pt-0" style="height:35px;"></v-text-field>
										</div>
										<v-layout row wrap class="mt-3">
											<v-flex d-flex v-for="item in jobTypes" :key="item.label" xs6>
												<v-checkbox :label="item.label" v-model="selectedJobType" :value="item.value"></v-checkbox>
											</v-flex>
										</v-layout>
										<div v-for="item in inputGroup2" :key="item.label">
											<label >{{ item.label }}</label>
											<v-text-field label="" class="pt-0" style="height:35px;"></v-text-field>
										</div>
									</v-container>
								</v-flex>
								<v-flex md5>
									<v-container class="text-xs-left">
										<v-flex class="text-xs-center mb-3 mt-3">
											<h4>Owner/Insured Information</h4>
										</v-flex>						
										<div v-for="item in inputGroup3" :key="item.label">
											<label >{{ item.label }}</label>
											<v-text-field label="" class="pt-0" style="height:35px;"></v-text-field>
										</div>	
										<v-flex class="text-xs-center mt-3 mb-3">
											<h4>Insurance Information</h4>
										</v-flex>						
										<div v-for="item in inputGroup4" :key="item.label">
											<label >{{ item.label }}</label>
											<v-text-field label="" class="pt-0" style="height:35px;"></v-text-field>
										</div>				
									</v-container>
								</v-flex>
							</v-layout>
							<v-layout row wrap class="text-xs-left mt-3" justify-space-around>
								<v-flex md8>
									<label>Additional notes:</label>
									<v-text-field label=""></v-text-field>
								</v-flex>
							</v-layout>							
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
        customerTypes: [
          {
            label: 'Residential',
            value: 'residential'
          },
          {
            label: 'Owner/Insured',
            value: 'owner'
          },
          {
            label: 'Commercial',
            value: 'commercial'
          },
          {
            label: 'Tenant',
            value: 'tenant'
          }
        ],
        selectedCustomerType: [],
        inputGroup1: [
          {
            label: 'Contact Name:'
          },
          {
            label: 'Contact Phone:'
          },
          {
            label: 'Site Phone:'
          },
          {
            label: 'Date Contacted:'
          },
          {
            label: 'Time Contacted:'
          },
          {
            label: 'Date of Loss:'
          },
          {
            label: 'Point of Loss:'
          },
          {
            label: 'Date Completed:'
          }
        ],
        jobTypes: [
          {
            label: 'Water',
            value: 'water'
          },
          {
            label: 'Sewage',
            value: 'sewage'
          },
          {
            label: 'Mold',
            value: 'mold'
          },
          {
            label: 'Fire',
            value: 'fire'
          }
        ],
        selectedJobType: [],
        inputGroup2: [
          {
            label: 'Category:'
          },
          {
            label: 'Class:'
          },
          {
            label: 'Job Address:'
          },
          {
            label: 'City:'
          },
          {
            label: 'State:'
          },
          {
            label: 'Zip Code:'
          },
          {
            label: 'Cross Streets:'
          },
          {
            label: 'Apartment Name:'
          },
          {
            label: 'Building #'
          },
          {
            label: 'Apartment #'
          },
          {
            label: 'Gate Code:'
          },
          {
            label: 'Assigned to:'
          }
        ],
        inputGroup3: [
          {
            label: 'Owner/Insured Name:'
          },
          {
            label: 'Billing Address:  same as job address'
          },
          {
            label: 'City:'
          },
          {
            label: 'State:'
          },
          {
            label: 'Zip Code:'
          },
          {
            label: 'Home Phone:'
          },
          {
            label: 'Cell Phone:'
          },
          {
            label: 'Work Phone:'
          },
          {
            label: 'Email:'
          },
          {
            label: 'Fax:'
          }
        ],
        inputGroup4: [
          {
            label: 'Claim #'
          },
          {
            label: 'Insurance Company:'
          },
          {
            label: 'Policy #'
          },
          {
            label: 'Deductible:'
          },
          {
            label: 'Insurance Adjuster:'
          },
          {
            label: 'Address'
          },
          {
            label: 'City:'
          },
          {
            label: 'State:'
          },
          {
            label: 'Zip Code:'
          },
          {
            label: 'Work Phone:'
          },
          {
            label: 'Cell Phone:'
          },
          {
            label: 'Email:'
          },
          {
            label: 'Fax:'
          }
        ]
      }
    },
    components: { FormHeader }
  }
</script>