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
											<v-text-field v-model="formModel1[item.model]" class="pt-0" style="height:35px;"></v-text-field>
										</div>
										<v-layout row wrap class="mt-3">
											<v-flex d-flex v-for="item in jobTypes" :key="item.label" xs6>
												<v-checkbox :label="item.label" v-model="selectedJobType" :value="item.value"></v-checkbox>
											</v-flex>
										</v-layout>
										<div v-for="item in inputGroup2" :key="item.label">
											<label >{{ item.label }}</label>
											<v-text-field v-model="formModel2[item.model]" class="pt-0" style="height:35px;"></v-text-field>
										</div>
									</v-container>
								</v-flex>
								<v-flex md5>
									<v-container class="text-xs-left">
										<v-flex class="text-xs-center mb-3 mt-3">
											<h4>Owner/Insured Information</h4>
										</v-flex>
										<div v-for="item in inputGroup3" :key="item.label">
                      <v-checkbox label="Same as job address" v-model="sameJobAddress" v-if="item.model == 'address'" style="height:30px;"></v-checkbox>
                      <v-checkbox label="Same as contact name" v-model="sameContactName" v-if="item.model == 'ownerName'" style="height:30px;"></v-checkbox>
											<label >{{ item.label }}</label>
											<v-text-field v-model="formModel3[item.model]" class="pt-0" style="height:35px;"></v-text-field>
										</div>	
										<v-flex class="text-xs-center mt-3 mb-3">
											<h4>Insurance Information</h4>
										</v-flex>						
										<div v-for="item in inputGroup4" :key="item.label">
											<label >{{ item.label }}</label>
											<v-text-field v-model="formModel4[item.model]" class="pt-0" style="height:35px;"></v-text-field>
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
            label: 'Contact Name:',
            model: 'contactName'
          },
          {
            label: 'Contact Phone:',
            model: 'contactPhone'
          },
          {
            label: 'Site Phone:',
            model: 'sitePhone'
          },
          {
            label: 'Date Contacted:',
            model: 'contactedDate'
          },
          {
            label: 'Time Contacted:',
            model: 'contactedTime'
          },
          {
            label: 'Date of Loss:',
            model: 'lossDate'
          },
          {
            label: 'Point of Loss:',
            model: 'lossPoint'
          },
          {
            label: 'Date Completed:',
            model: 'completedDate'
          }
        ],
        formModel1: {
          contactName: null,
          contactPhone: null,
          sitePhone: null,
          contactedDate: null,
          contactedTime: null,
          lossDate: null,
          lossPoint: null,
          completedDate: null
        },
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
            label: 'Category:',
            model: 'category'
          },
          {
            label: 'Class:',
            model: 'class'
          },
          {
            label: 'Job Address:',
            model: 'jobAddress'
          },
          {
            label: 'City:',
            model: 'city'
          },
          {
            label: 'State:',
            model: 'state'
          },
          {
            label: 'Zip Code:',
            model: 'zipcode'
          },
          {
            label: 'Cross Streets:',
            model: 'crossStreet'
          },
          {
            label: 'Apartment Name:',
            model: 'apartmentName'
          },
          {
            label: 'Building #',
            model: 'buildingNumber'
          },
          {
            label: 'Apartment #',
            model: 'apartmentNumber'
          },
          {
            label: 'Gate Code:',
            model: 'gateCode'
          },
          {
            label: 'Assigned to:',
            model: 'assignedTo'
          }
        ],
        formModel2: {
          category: null,
          class: null,
          jobAddress: null,
          city: null,
          state: null,
          zipcode: null,
          crossStreet: null,
          apartmentName: null,
          buildingNumber: null,
          apartmentNumber: null,
          gateCode: null,
          assignedTo: null
        },
        sameJobAddress: false,
        sameContactName: false,
        inputGroup3: [
          {
            label: 'Owner/Insured Name:',
            model: 'ownerName'
          },
          {
            label: 'Billing Address:',
            model: 'address'
          },
          {
            label: 'City:',
            model: 'city'
          },
          {
            label: 'State:',
            model: 'state'
          },
          {
            label: 'Zip Code:',
            model: 'zipcode'
          },
          {
            label: 'Home Phone:',
            model: 'homePhone'
          },
          {
            label: 'Cell Phone:',
            model: 'cellPhone'
          },
          {
            label: 'Work Phone:',
            model: 'workPhone'
          },
          {
            label: 'Email:',
            model: 'email'
          },
          {
            label: 'Fax:',
            model: 'fax'
          }
        ],
        formModel3: {
          ownerName: null,
          address: null,
          city: null,
          state: null,
          zipcode: null,
          homePhone: null,
          cellPhone: null,
          workPhone: null,
          email: null,
          fax: null
        },
        inputGroup4: [
          {
            label: 'Claim #',
            model: 'claimNumber'
          },
          {
            label: 'Insurance Company:',
            model: 'insurance'
          },
          {
            label: 'Policy #',
            model: 'policy'
          },
          {
            label: 'Deductible:',
            model: 'deductible'
          },
          {
            label: 'Insurance Adjuster:',
            model: 'adjuster'
          },
          {
            label: 'Address',
            model: 'address'
          },
          {
            label: 'City:',
            model: 'city'
          },
          {
            label: 'State:',
            model: 'state'
          },
          {
            label: 'Zip Code:',
            model: 'zipcode'
          },
          {
            label: 'Work Phone:',
            model: 'workPhone'
          },
          {
            label: 'Cell Phone:',
            model: 'cellPhone'
          },
          {
            label: 'Email:',
            model: 'email'
          },
          {
            label: 'Fax:',
            model: 'fax'
          }
        ],
        formModel4: {
          claimNumber: null,
          insurance: null,
          policy: null,
          deductible: null,
          adjuster: null,
          address: null,
          city: null,
          state: null,
          zipcode: null,
          workPhone: null,
          cellPhone: null,
          email: null,
          fax: null
        }
      }
    },
    components: { FormHeader },
    watch: {
      sameJobAddress: function () {
        if (this.sameJobAddress) {
          this.formModel3.address = this.formModel2.jobAddress
          this.formModel3.city = this.formModel2.city
          this.formModel3.state = this.formModel2.state
          this.formModel3.zipcode = this.formModel2.zipcode
        } else {
          this.formModel3.address = ''
          this.formModel3.city = ''
          this.formModel3.state = ''
          this.formModel3.zipcode = ''
        }
      },
      sameContactName: function () {
        if (this.sameContactName) {
          this.formModel3.ownerName = this.formModel1.contactName
        } else {
          this.formModel3.ownerName = ''
        }
      }
    }
  }
</script>