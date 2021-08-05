# mktNotifs

## Mikut's notifications system

---

# THIS ARCHIVE IS READ-ONLY AND WORK ON THIS PROJECT HAS BEEN ABANDONED.

---

## Installation

### When using with FiveM

1. Download latest release from `"Releases"` tab
2. Unpack contents of `"FiveM"` folder (inside the archive) anywhere in `/resources` folder
3. Add `ensure mktNotifs` in your `server.cfg` file.
4. Enjoy!

### When using in browser

COMING SOON

---

## Dependencies

As of today (17.11.2020) this resource does not require any additional dependencies.

---

## How to use it?

### In FiveM

- Use export function (works both on server and client) in your script  
  
    JS example:  
    ```exports.mktNotifs.addNotification(```  
    ```"Notification title",```  
    ```"This is the message that will be shown inside of the notification",```  
    ```"success",```  
    ```1,```  
    ```10000);```  
    1st argument - Notification title,  
    2nd argument - Notification content,  
    3rd argument - Notification type (currently there are `"success"`, `"warn"`, `"error"` and `"info"` types),  
    4th argument - ServerId of player notification should be shown to (`-1` can be used to make notification visible to all players currently connected)  
    5th argument - Notification duration (defaults to `10000` if not provided)

---

### Mikut 2020-2021
