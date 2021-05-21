<template>
  <TheNavigation/>
  <div class="container">
    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition> 
    </router-view>
    
  </div>
</template>

<script>
import TheNavigation from '@/components/TheNavigation.vue'
export default{
  components: {TheNavigation}
}
</script>
<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
