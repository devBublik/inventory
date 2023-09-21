<template>
  <div class="table">
    <FieldEl />
    <draggable
      class="table__space"
      v-model="fields"
      group="people"
      @change="log"
      itemKey="element.id"
    >
      <template #item="{ element, index }">
        <div class="table__item" @click="open(element)">
          {{ element.name }}
          <span
            class="table__item-ind"
            :class="{ 'table__item-ind--ex': element.color1 || element.color2 }"
            >{{ element.color1 ? element.id : '' }}</span
          >
          <CustomElement :color1="element.color1" :color2="element.color2" />
        </div>
      </template>
    </draggable>
  </div>
</template>
<script lang="ts">
import draggable from 'vuedraggable'
import CustomElement from '@/components/icons/Element.vue'
import FieldEl from '@/components/Lists/FieldEl.vue'
import { type fieldInterface } from '@/types/index'
export default {
  name: 'InventoryFields',
  components: {
    draggable,
    CustomElement,
    FieldEl
  },
  computed: {
    fields: {
      get() {
        return this.$store.state.fields
      },
      set(value: fieldInterface) {
        this.$store.commit('updateFields', value)
      }
    }
  },
  methods: {
    log() {
      document.body.style.cursor = 'grabbig'
    },
    open(element: fieldInterface) {
      this.$emit('open', element)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config.scss';
.table {
  color: white;
  width: 100%;

  &__space {
    display: grid;
    grid-template-columns: repeat(5, minmax(50px, 105px));

    @include max-width($mobail) {
      grid-template-columns: repeat(3, minmax(50px, 105px));
    }

    @include max-width($sm-mobail) {
      grid-template-columns: repeat(5, 1fr);
    }
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

    &.sortable-chosen {
      border-radius: 8px;
      &.sortable-ghost {
        cursor: grabbing;
      }

      .table__item-ind {
        display: none;
      }
    }
  }

  &__item-ind {
    position: absolute;
    bottom: 0;
    right: 0;

    &--ex {
      font-size: 10px;
      border-top: 1px solid $border;
      border-left: 1px solid $border;
      border-right: 1px solid $border;
      padding: 2px 4px;
      color: $border;
      border-top-left-radius: 4px;
    }
  }
}
</style>
