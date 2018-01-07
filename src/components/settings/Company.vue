<template>
  <v-container>
    <v-layout row justify-space-around>
      <v-flex md10>
        <v-card>
          <v-card-title>
            <h2>{{ $route.meta.title }}</h2>
          </v-card-title>
          <v-card-text>
            <v-container>              
              <v-form v-model="valid" ref="companyForm" lazy-validation>
                <v-layout justify-space-around>
                  <v-flex md4>                  
                    <img :src="company.imageUrl" height="120" v-if="company.imageUrl">
                    <v-text-field label="Upload your Company Logo" @click="pickFile" v-model="company.imageName" prepend-icon="attach_file"></v-text-field>
                    <input type="file" style="display:none;" ref="image" accept="image/*" @change="onFilePicked">
                    <v-text-field label="Company Name" v-model="company.name" required></v-text-field>
                    <v-text-field label="Street Address" v-model="company.address" required></v-text-field>
                    <v-text-field label="City" v-model="company.city" required></v-text-field>
                    <v-text-field label="State" v-model="company.state" required></v-text-field>
                    <v-text-field label="Zip Code" v-model="company.zip" required></v-text-field>
                    <v-text-field label="Phone" v-model="company.phone" required></v-text-field>
                    <v-text-field label="Email" v-model="company.email" required></v-text-field>
                  </v-flex>
                  <v-flex md4>
                    <v-btn @click="">Update Credit Card Info</v-btn>
                    <v-text-field label="Cloud Link" v-model="company.cloudLink" required></v-text-field>
                  </v-flex>                
                </v-layout>
                <v-btn>submit</v-btn>
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