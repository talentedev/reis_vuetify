<template>
  <v-container>
    <h1>{{ $route.meta.title }}</h1>
    <v-layout row justify-space-around class="mt-3">
      <v-flex md10>
        <v-card>
          <v-card-title></v-card-title>
          <v-card-text>
            <v-container>              
              <v-form v-model="valid" ref="companyForm" lazy-validation>
                <v-layout justify-space-around>
                  <v-flex md4>                  
                    <img :src="company.imageUrl" height="120" v-if="company.imageUrl">
                    <v-text-field label="Upload your Company Logo" @click="pickFile" v-model="company.imageName" prepend-icon="fa-cloud-upload"></v-text-field>
                    <input type="file" style="display:none;" ref="image" accept="image/*" @change="onFilePicked">
                    <v-text-field label="Company Name" v-model="company.name" required prepend-icon="fa-building-o"></v-text-field>
                    <v-text-field label="Street Address" v-model="company.address" required prepend-icon="fa-road"></v-text-field>
                    <v-text-field label="City" v-model="company.city" required prepend-icon="fa-hospital-o"></v-text-field>
                    <v-text-field label="State" v-model="company.state" required prepend-icon="fa-globe"></v-text-field>
                    <v-text-field label="Zip Code" v-model="company.zip" required prepend-icon="fa-map-marker"></v-text-field>
                    <v-text-field label="Phone" v-model="company.phone" required prepend-icon="fa-phone"></v-text-field>
                    <v-text-field label="Email" v-model="company.email" required prepend-icon="fa-envelope-o"></v-text-field>
                  </v-flex>
                  <v-flex md4>
                    <v-btn @click="">Update Credit Card Info</v-btn>
                    <v-text-field label="Cloud Link" v-model="company.cloudLink" required prepend-icon="fa-facebook"></v-text-field>
                  </v-flex>                
                </v-layout>
                <v-flex class="text-xs-center"><v-btn>submit</v-btn></v-flex>                
              </v-form>               
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>    
</template>

<script type="text/babel">
  // import apiCompanies from '../../api/companies'

  export default {
    name: 'Company',
    data () {
      return {
        company: {
          name: null,
          address: null,
          city: null,
          state: null,
          zip: null,
          phone: null,
          email: null,
          cloudLink: null,
          imageName: '',
          imageUrl: '',
          imageFile: ''
        }
      }
    },
    created () {

    },
    methods: {
      pickFile () {
        this.$refs.image.click()
      },
      onFilePicked (e) {
        const files = e.target.files
        if (files[0] !== undefined) {
          this.company.imageName = files[0].name
          if (this.company.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.company.imageUrl = fr.result
            this.company.imageFile = files[0]
          })
        } else {
          this.company.imageName = ''
          this.company.imageFile = ''
          this.company.imageUrl = ''
        }
      }
    }
  }
</script>

<style type="text/css">
</style>