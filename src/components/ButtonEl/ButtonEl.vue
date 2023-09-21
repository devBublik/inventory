<template>
  <button class="btn">{{ text }}</button>
</template>

<script lang="ts">
export default {
  name: 'ButtonEl',
  props: {
    text: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config.scss';
.btn {
  background: $btn;
  color: $white;
  padding: 12px;
  width: 100%;
  border: none;
  cursor: url(../../assets/images/svg/cursor.svg), pointer;
  transition: 0.3s background ease;
  border-radius: 8px;

  &:hover {
    background: $btn-hover;
  }
}
</style>
