<template>
  <div class="table">
      <draggable
          class="table__space"
          :list="list2"
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
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable,
    Element
  },
  data() {
    return {
      list2: [
        { id: 1, color1: '#7FAA65', color2: '#B8D998'},
        { id: 2, color1:  '#AA9765', color2: '#D9BB98'},
        { id: 3 , color1: '#656CAA', color2: '#7481ED'},
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11},
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 25 },
      ]
    };
  },
  methods: {
    log: function(evt) {
      window.console.log(evt);
      console.log(this.list2)
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