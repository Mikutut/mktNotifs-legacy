onNet("mktNotifs:updateNotificationsClient", async (notif) => {
    console.log("CLIENT: Received notification!");
    SendNuiMessage(JSON.stringify({
        cmd: "newNotification",
        notification: notif
    }));
    console.log("CLIENT: Notification passed through to NUI!");
});

exports("addNotification", (title, content, type, receiver) => {
    console.log("CLIENT EXPORT: Received new notification request!");
    emitNet("mktNotifs:addNewNotification", title, content, type, receiver);
});

RegisterCommand("mktn-test", async (source, args) => {
    let notif = {};
    notif.title = "Test!";
    notif.content = "This notification has been sent through debug command!";
    notif.type = "success";
    emit("mktNotifs:updateNotificationsClient", notif);
});