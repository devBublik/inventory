<template>
  <div class="wrapper">
    <div class="content">
      <SidebarEl />
      <Lists @open="handleOpen" />
      <CustomModal
        @close="handleClose"
        :color1="el.color1"
        :color2="el.color2"
        :isOpen="isModalOpen"
        :id="el.id"
      />
    </div>
    <TheFooter />
  </div>
</template>

<script lang="ts">
import SidebarEl from '@/components/Sidebar/SidebarEl.vue'
import Lists from '@/components/Lists/Lists.vue'
import TheFooter from '@/components/Footer/TheFooter.vue'
import CustomModal from '@/components/CustomModal/CustomModal.vue'
import { ref, onMounted } from 'vue'
export default {
  name: 'App',
  components: {
    SidebarEl,
    Lists,
    TheFooter,
    CustomModal
  },

  setup() {
    const isModalOpen = ref(false)
    const el = ref({
      id: 0,
      color1: '',
      color2: ''
    })

    const handleOpen = (element: any) => {
      el.value = element
      isModalOpen.value = true
    }

    const handleClose = () => {
      isModalOpen.value = false
    }

    return {
      isModalOpen,
      el,
      handleOpen,
      handleClose
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/config.scss';
.wrapper {
  background: $black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content {
  display: flex;
  max-width: 849px;
  gap: 24px;
}
</style>
