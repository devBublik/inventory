<script setup>
import Skeleton from "@/components/icons/Skeleton.vue";
</script>
<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <img src="@/assets/images/img.jpg" class="sidebar__image" alt="изображение"/>
    </div>
    <div class="sidebar__info">
      <Skeleton/>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/vars.scss';
.sidebar {
  max-width: 236px;
  width: 100%;
  padding: 18px 14px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #4D4D4D;
  border-radius: 12px;
  max-height: 500px;

  &__top{
    margin: 0 0 20px 0;
    max-width: 208px;
    width: 100%;
    height: 240px;
  }

  &__image {
    border-radius: 12px;
    width: 100%;
    height: 100%;
  }
}
</style>
