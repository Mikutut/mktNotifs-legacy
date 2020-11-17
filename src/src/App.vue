<template>
  <div id="notifications-container">
    <transition-group name="notification-fade">
      <notification v-for="notif in activeNotifications" :key="notif.count" :data="notif"/>
    </transition-group>
  </div>
</template>

<script>
import Notification from "./components/Notification.vue";
import {ref, onBeforeMount} from "vue";
export default {
  name: 'App',
  components: { Notification },
  setup() {

    const Wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let activeNotifications = ref([]);
    let notificationIndex = ref(0);
    const addNotification = async (notification) => {
      notificationIndex.value++;
      notification.count = notificationIndex.value;
      activeNotifications.value.push(notification);
      await Wait(10000);
      activeNotifications.value.shift();
      if(activeNotifications.value.length === 0) {
        notificationIndex.value = 0;
      }
    };

    onBeforeMount(() => {
      window.onload = () => {
        window.addEventListener("message", event => {
            let item = event.data;
            switch(item.cmd) {
                case "newNotification":
                  addNotification(item.notification);
                break;
            }
        });
      };
    });

    return {
      Wait,
      activeNotifications,
      addNotification,
      notificationIndex
    };
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
:root {
  font-size: 20px;
  font-family: sans-serif;
}
body, #app {
  width: 100vw;
  height: 100vh;
  background: transparent;
  overflow: none;
}
#notifications-container {
  width: 20%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  padding-right: 0.25rem;
}
.notification-fade-enter-active, .notification-fade-leave-active {
    transition: transform .2s, opacity .2s;
}
.notification-fade-enter-from {
    transform: translateY(100%);
    opacity: 0;
}
.notification-fade-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}
</style>
