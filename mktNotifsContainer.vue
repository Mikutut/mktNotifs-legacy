<template>
  <div id="mkt-notifs-container">
    <transition-group
      name="popup-slide"
    >
      <mkt-notifs-pop-up 
        v-for="popUp in popUps" 
        v-bind:key="popUp.id"
        v-bind:title="popUp.title"
        v-bind:description="popUp.description"
        v-bind:showIcon="popUp.showIcon"
        v-bind:type="popUp.type"
      />  
    </transition-group>  
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import mktNotifsPopUp from "./mktNotifsPopUp.vue";
import { popUps } from "./mktNotifsHandler";

export default defineComponent({
  name: 'mktNotifsContainer',
  components: {
    mktNotifsPopUp
  },
  setup() {
    return {
      popUps
    };
  }
})
</script>

<style lang="scss" scoped>
#mkt-notifs-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  background: transparent;
  z-index: 99999;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  pointer-events: none;
  align-items: center;
}

/* VUE TRANSITIONS */
.popup-slide {
  &-enter-active, &-leave-active {
    transition: opacity .3s, transform .3s;
  }
  &-enter-from {
    transform: translateY(-100%);
    opacity: 0;
  }
  &-enter-to, &-leave-from {
    transform: translateY(0);
    opacity: 1;
  }
  &-leave-to {
    transform: translateY(100%);
    opacity: 0;
  }
}
/* END OF VUE TRANSITIONS */
</style>