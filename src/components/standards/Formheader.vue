<template>
	<v-layout row justify-space-between>
		<v-flex md4 class="text-xs-left">
			<img src="" alt="Company Logo">			
		</v-flex>
		<v-flex md4 class="text-xs-right">
			<p style="margin:0;">{{ title }}</p>
			<p style="margin:0;">{{ street }}</p>
			<p style="margin:0;">{{ city }} {{ state }} {{ zipcode }}</p>
			<p style="margin:0;">{{ phone }}</p>
			<p style="margin:0;">{{ email }}</p>
		</v-flex>
	</v-layout>
</template>

<script type="text/babel">
  export default {
    data () {
      return {
        title: 'Flood out',
        street: '8631 Rocky Ave',
        city: 'Las Vegas',
        state: 'Nevada',
        zipcode: '89143',
        phone: '702-591-8889',
        email: 'readyfloodrestoration@gmail.com'
      }
    }
  }
</script>

<style type="text/css" scoped>
</style>