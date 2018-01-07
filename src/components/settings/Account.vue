<template>
  <v-container>
    <v-layout row justify-space-around>
      <v-flex md10>
        <v-card>
          <v-card-title><h2>Change password</h2></v-card-title>
          <v-card-text>
            <v-container>
              <v-layout justify-space-around>
                <v-flex xs8>
                  <v-form v-model="valid" ref="passFrom" lazy-validation>
                    <v-text-field label="Old Password" v-model="passwordData.oldPassword" required></v-text-field>
                    <v-text-field label="New Password" v-model="passwordData.newPassword" required></v-text-field>
                    <v-text-field label="New Password Confirmation" v-model="passwordData.newPasswordConfirmation" required></v-text-field>
                    <v-btn @click="submitPass" :disabled="!valid">submit</v-btn>
                    <v-btn @click="clearPass">clear</v-btn>
                  </v-form>
                </v-flex>
              </v-layout>        
            </v-container>
          </v-card-text>
        </v-card>          
      </v-flex>
    </v-layout>    
    <v-layout row justify-space-around class="mt-5">
      <v-flex md10>
        <v-card>
          <v-card-title><h2>Change Email</h2></v-card-title>
          <v-card-text>
            <v-container>
              <v-layout justify-space-around>
                <v-flex xs8>
                  <v-form v-model="valid" ref="emailFrom" lazy-validation>
                    <v-text-field label="Old Email" v-model="emailData.oldEmail" required></v-text-field>
                    <v-text-field label="New Email" v-model="emailData.newEmail" required></v-text-field>
                    <v-btn @click="submitEmail" :disabled="!valid">submit</v-btn>
                    <v-btn @click="clearEmail">clear</v-btn>
                  </v-form>
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
  // import apiAccount from '../../api/account'

  export default {
    name: 'Settings',
    data () {
      return {
        valid: true,
        passwordData: {
          oldPassword: null,
          newPassword: null,
          newPasswordConfirmation: null
        },
        emailData: {
          oldEmail: null,
          newEmail: null
        }
      }
    },
    methods: {
      changeEmail () {
        // apiAccount.changeEmail(this.emailData)
        //   .then(response => {
        //       console.log(response)
        //   })
        //   .catch(error => {
        //       console.log(error.response)
        //   })
      },
      clearPass () {
        this.$refs.passFrom.reset()
      },
      clearEmail () {
        this.$refs.emailFrom.reset()
      }
    }
  }
</script>

<style type="text/css">
</style>