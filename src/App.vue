<script setup lang="ts">
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Lists from "@/components/Lists/Lists.vue";
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <Sidebar/>
      <Lists/>
    </div>

    <div class="footer"></div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/vars.scss';
.wrapper {
  background: $black;
}
.content {
  display: flex;
  max-width: 849px;
  gap: 24px;
}
</style>
