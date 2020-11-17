<template>
    <div class="mkt-notif" :class="{'error': notificationType === 'error', 'success': notificationType === 'success', 'warn': notificationType === 'warn', 'info': notificationType === 'info'}">
        <div class="mkt-notif-header">
            {{ notificationTitle }}
        </div>
        <hr class="mkt-notif-divider"/>
        <div class="mkt-notif-body">
            {{ notificationContent }}
        </div>
        <hr class="mkt-notif-divider" style="margin-bottom: 0px; background: transparent;"/>
        <div class="mkt-notif-cooldown-bar"></div>
    </div>
</template>

<script>
import {ref} from "vue";
export default {
    name: "Notification",
    components: {},
    props: ["data"],
    setup(props) {
        let notificationType = ref(props.data.type);
        let notificationTitle = ref(props.data.title);
        let notificationContent = ref(props.data.content);
        return { 
            notificationType,
            notificationTitle,
            notificationContent
        };
    }
}
</script>

<style lang="scss">
@keyframes cooldownBarAnim {
    from {
        transform: scaleX(1);
    }
    to {
        transform: scaleX(0);
    }
}
.mkt-notif {
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    margin: 0.25rem 0;
    border-radius: 5px;
    &.error {
        background: red;
    }
    &.success {
        background: #1ca600;
    }
    &.warn {
        background: #afba0d;
    }
    &.info {
        background: #80bbff;
    }
}
.mkt-notif-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 1.2rem;
    color: white;
    align-items: center;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 0.25rem;
}
.mkt-notif-body {
    font-size: 0.75rem;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0.25rem;
}
.mkt-notif-divider {
    display: block;
    width: 100%;
    height: 2px;
    border: none;
    outline: none;
    background: white;
    margin: 0.25rem 0;
}
.mkt-notif-cooldown-bar {
    width: 100%;
    height: 12px;
    background: black;
    transform: scaleX(1);
    animation: cooldownBarAnim 10s linear forwards;
}
</style>