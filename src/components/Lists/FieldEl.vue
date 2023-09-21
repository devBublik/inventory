<template>
  <div class="field">
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
    <div class="field__item"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FieldEl'
}
</script>

<style lang="scss">
@import '@/assets/styles/config.scss';
.field {
  display: grid;
  position: absolute;
  grid-template-columns: repeat(5, minmax(50px, 105px));

  @include max-width($tablet) {
    width: calc(100% - 236px - 64px - 24px);
  }

  @include max-width($mobail) {
    grid-template-columns: repeat(3, minmax(50px, 105px));
  }

  @include max-width($sm-mobail) {
    grid-template-columns: repeat(5, 1fr);
    width: calc(100% - 64px);
  }

  &__item {
    max-width: 105px;
    height: 100px;
    width: 100%;
    border: 1px solid $border;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: url(../../assets/images/svg/cursor.svg), pointer;

    &:first-of-type {
      border-top-left-radius: 12px;
    }

    &:nth-of-type(5) {
      border-top-right-radius: 12px;
      @include max-width($mobail) {
        border-top-right-radius: 0;
      }
      @include max-width($sm-mobail) {
        border-top-right-radius: 12px;
      }
    }

    &:nth-of-type(3) {
      @include max-width($mobail) {
        border-top-right-radius: 12px;
      }
      @include max-width($sm-mobail) {
        border-top-right-radius: 0;
      }
    }

    &:nth-of-type(21) {
      border-bottom-left-radius: 12px;
      @include max-width($sm-mobail) {
        border-top-left-radius: 0;
      }
    }

    &:nth-of-type(25) {
      border-bottom-right-radius: 12px;
    }

    @include max-width($mobail) {
      border-radius: 0;
    }

    svg {
      @include max-width($sm-mobail) {
        width: 60%;
      }
    }
  }
}
</style>
