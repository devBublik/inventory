<template>
  <div class="table">
      <draggable
          class="table__space"
          v-model="fields"
          group="people"
          @change="log"
          itemKey="id"
      >
        <template #item="{ element, index }">
          <div class="table__item"
            :class="{
            'table__item--top-left': index=== 0,
            'table__item--top-right': index === 4,
            'table__item--bottom-left': index === 20,
            'table__item--bottom-right': index === 24
            }"
          >{{ element.name }}
          <span class="table__item-ind"
          :class="{'table__item-ind--ex': element.color1 || element.color2}"
          >{{  element.color1? index + 1 : '' }}</span>
            <Element :color1="element.color1" :color2="element.color2"/>
          </div>

        </template>
      </draggable>
  </div>
</template>
<script>
import draggable from 'vuedraggable'
import Element from "@/components/icons/Element.vue";
import {useStore} from "vuex";
import { computed } from 'vue'
export default {
  name: "Fields",
  components: {
    draggable,
    Element
  },
  computed: {
    fields: {
      get() {
        return this.$store.state.fields
      },
      set(value) {
        this.$store.commit('updateFields', value)
      }
    }
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/assets/vars.scss';
.table {
  color: white;
  width: 100%;

  &__space {
    display: grid;
    grid-template-columns: repeat(5, 105px);
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

    &--top-right {
      border-top-right-radius: 12px;
    }

    &--top-left {
      border-top-left-radius: 12px;
    }

    &--bottom-left {
      border-bottom-left-radius: 12px;
    }

    &--bottom-right {
      border-bottom-right-radius: 12px;
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