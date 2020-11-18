onNet("mktNotifs:addNewNotification", async (title, content, type, receiver, duration) => {
    let notification = {};
    notification.title = title;
    notification.content = content;
    notification.type = type;
    if(duration !== undefined && duration !== null) {
        notification.duration = duration;
    } else notification.duration = 10;
    emitNet("mktNotifs:updateNotificationsClient", receiver, notification);
});

exports("addNotification", async (title, content, type, receiver, duration) => {
    emit("mktNotifs:addNewNotification", title, content, type, receiver, duration);
});