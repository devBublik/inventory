<template>
  <div class="modal" v-if="isOpen" :class="{ 'modal--active': isOpen }">
    <div class="modal__image">
      <CustomElement :color1="color1" :color2="color2" />
    </div>
    <div class="modal__inner">
      <div class="modal__row modal__row--l"></div>
      <div class="modal__row"></div>
      <div class="modal__row"></div>
      <div class="modal__row modal__row--m"></div>
      <div class="modal__row modal__row--s"></div>
    </div>
    <ButtonEl text="Удалить предмет" @click="clearItem(id)" />
    <div class="modal__close" @click="handleClick(id)">
      <CloseIcon />
    </div>
  </div>
</template>

<script lang="ts">
import CustomElement from '@/components/icons/Element.vue'
import ButtonEl from '@/components/ButtonEl/ButtonEl.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import { defineComponent } from 'vue'
// @ts-ignore
import { mapMutations } from 'vuex'

export default defineComponent({
  name: 'CustomModal',
  components: {
    CustomElement,
    ButtonEl,
    CloseIcon
  },
  props: {
    color1: {
      type: String,
      default: ''
    },
    color2: {
      type: String,
      default: ''
    },
    isOpen: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapMutations({
      deleteField: 'deleteField'
    }),
    handleClick(id: number) {
      this.$emit('close')
    },
    clearItem(id: number) {
      this.$store.commit('deleteField', id)
      this.$emit('close')
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config.scss';
.modal {
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  padding: 19px 16px;
  right: 32px;
  top: 32px;
  z-index: 2;
  background: $black;
  border: 1px solid $border;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  &--active {
    animation: popup 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }

  &__image {
    padding: 36px 0 30px 0;

    svg {
      max-width: 130px;
      width: 100%;
      height: 130px;
    }
  }

  &__inner {
    border-top: 1px solid $border;
    border-bottom: 1px solid $border;
    padding: 16px 0 24px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 18px 0;
  }

  &__row {
    width: 100%;
    height: 10px;
    width: 100%;
    background: $border;
    border-radius: 12px;
    margin: 0 0 16px 0;

    &--l {
      height: 30px;
      margin: 0 0 24px 0;
    }

    &--m {
      max-width: 180px;
    }

    &--s {
      max-width: 80px;
    }
  }

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }

  @keyframes popup {
    from {
      opacity: 0;
      transform: translateY(-200px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
