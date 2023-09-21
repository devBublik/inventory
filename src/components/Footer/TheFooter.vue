<template>
  <div class="content content--footer">
    <footer class="footer">
      <div class="footer__content"></div>
      <div class="footer__close">
        <CloseIcon />
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import CloseIcon from '@/components/icons/CloseIcon.vue'
export default {
  name: 'TheFooter',
  components: {
    CloseIcon
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config.scss';

.footer {
  width: 100%;
  padding: 18px 64px 18px 18px;
  position: relative;
  border: 1px solid $border;
  border-radius: 12px;

  &__content {
    height: 36px;
    background: $border;
    border-radius: 12px;
  }

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
