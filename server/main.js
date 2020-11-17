RegisterCommand("mktn-sendNotif", async (source, args) => {
    if(IsPlayerAceAllowed(source, "mktNotifs:sendNotifications")) {
        
    }
    else {
        emit("mktNotifs:addNewNotification", "Insufficient permissions!", `${GetPlayerName(source)}, you cannot send notifications!`, "error", source);
    }
}, false);

onNet("mktNotifs:addNewNotification", async (title, content, type, receiver) => {
    console.log("SERVER EVENT: Received new notification request!");
    let notification = {};
    notification.title = title;
    notification.content = content;
    notification.type = type;
    console.log(notification + " | " + notification.title + " | " + notification.content + " | " + notification.type);
    console.log(receiver + " | " + typeof receiver);
    emitNet("mktNotifs:updateNotificationsClient", receiver, notification);
    console.log("SERVER EVENT: Passed data to client!");
});

exports("addNotification", async (title, content, type, receiver) => {
    console.log("SERVER EXPORT: Received new notification request!");
    emit("mktNotifs:addNewNotification", title, content, type, receiver);
});