onNet("mktNotifs:updateNotificationsClient", async (notif) => {
    SendNuiMessage(JSON.stringify({
        cmd: "newNotification",
        notification: notif
    }));
});

exports("addNotification", (title, content, type, receiver, duration) => {
    emitNet("mktNotifs:addNewNotification", title, content, type, receiver, duration);
});