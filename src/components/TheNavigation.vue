<template>
  <div id="nav">
    <AppLink id="logo" to="/">Vue School Travel App</AppLink>
    <AppLink
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
      >
        {{ destination.name }}
      </AppLink>
      <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
      <AppLink to="https://vueschool.io">Vue School</AppLink>
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