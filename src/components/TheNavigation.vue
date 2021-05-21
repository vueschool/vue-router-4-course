<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
      >
        {{ destination.name }}
      </router-link>
      <router-link :to="{name: 'protected'}">Dashboard</router-link>
  </div>
</template>
<script>
import sourceData from '@/data.json'
export default {
  data(){
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>