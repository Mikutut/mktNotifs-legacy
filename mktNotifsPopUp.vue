<template>
  <main 
    class="popup-holder"
    v-bind:class="{
      'popup-info': type === 'info',
      'popup-warn': type === 'warn',
      'popup-error': type === 'error',
      'popup-success': type === 'success'
    }"
  >
    <i 
      v-if="showIcon"
      v-bind:class="{
        'fas fa-exclamation-circle': type === 'error',
        'fas fa-exclamation-triangle': type === 'warn',
        'fas fa-envelope': type === 'info',
        'fas fa-check-circle': type === 'success'
      }"
    ></i>
    <section 
      class="popup-data"
    >
      <h1>
        {{ title }}
      </h1>
      <p>
        {{ description }}
      </p>
    </section>
    <span
      class="popup-countdown"
    >
      To okienko zniknie za {{ countdown }} sekund(y)...
    </span>
  </main>
</template>

<script lang="ts">
/* eslint-disable vue/no-dupe-keys */
import { defineComponent, Ref, ref, onMounted } from "vue";

export default defineComponent({
  name: 'mktNotifsPopUp',
  props: ["title", "description", "type", "duration", "showIcon"],
  setup(props) {

    const countdown: Ref<number> = ref(Math.round(props.duration / 1000));

    setInterval(() => {
      countdown.value--;
    }, 1000);

    return {
      title: props.title,
      description: props.description,
      type: props.type,
      countdown,
      showIcon: props.showIcon
    };
  }
})
</script>

<style lang="scss" scoped>
@import url("https://use.fontawesome.com/releases/v5.15.2/css/all.css");

@keyframes barAnim {
  from {
    transform: scaleX(1);
  }
  to {
    transform: scaleX(0);
  }
}

$colors: (
  "success": hsl(120, 100%, 30%),
  "warn": hsl(30, 100%, 50%),
  "error": hsl(0, 100%, 50%),
  "info": hsl(180, 100%, 35%)
);

.popup-holder {
  width: 80vw;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  border-radius: 8px;
  margin: 10px 0 20px;
  padding: 10px;

  &.popup-success {
    background: map-get($colors, "success");
  }
  &.popup-warn {
    background: map-get($colors, "warn");
  }
  &.popup-error {
    background: map-get($colors, "error");
  }
  &.popup-info {
    background: map-get($colors, "info");
  }

  & > i {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 20px;
  }
}
.popup-data {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  & > h1 {
    display: block;
    font-size: 30px;
    color: white;
    width: 100%;
    height: 30px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 16px;
  }
  & > p {
    display: block;
    color: white;
    font-size: 16px;
    width: 100%;
    text-align: center;
    overflow: hidden;
  }
}
.popup-countdown {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: block;
  width: 100%;
  height: 100%;
  font-size: 10px;
  margin-top: 10px;
  color: white;
  text-align: center;
}
</style>