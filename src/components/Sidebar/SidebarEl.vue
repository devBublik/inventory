<script lang="ts" setup></script>
<template>
  <div class="sidebar">
    <div class="sidebar__top">
      <img src="@/assets/images/img.png" class="sidebar__image" alt="изображение" />
    </div>
    <div class="sidebar__info">
      <Skeleton />
    </div>
  </div>
</template>

<script lang="ts">
import Skeleton from '@/components/icons/Skeleton.vue'
export default {
  name: 'SidebarEl',
  components: {
    Skeleton
  }
}
</script>

<style lang="scss">
@import '@/assets/styles/config.scss';
.sidebar {
  max-width: 236px;
  width: 100%;
  padding: 18px 14px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #4d4d4d;
  border-radius: 12px;
  max-height: 500px;

  @include max-width($sm-mobail) {
    max-width: 100%;
  }

  &__top {
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
