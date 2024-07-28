const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348103533161";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_07_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTY5LFxuICAgICAgICA3OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUwLFxuICAgICAgICAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjksXG4gICAgICAgIDI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDc3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI3LFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA1NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MyxcbiAgICAgICAgOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY1LFxuICAgICAgICA3NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDksXG4gICAgICAgIDQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM1LFxuICAgICAgICA4MixcbiAgICAgICAgMjMsXG4gICAgICAgIDM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibG9ycERESWZrT0tjeHNpaGVmTUQyMUExTmpVTmIrOFN5N3FjRGFEVjRlST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUnZZTmFOcEhSWVdzWXNlMl9yV1U3QVwiLFxuICBcInBob25lSWRcIjogXCI1ZGEyMTBlNS01NzkyLTQyMDgtODYyYS0xZDVhMmZmMzNiMGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNjIsXG4gICAgICA5MixcbiAgICAgIDEwMCxcbiAgICAgIDEwNSxcbiAgICAgIDE1MCxcbiAgICAgIDExMSxcbiAgICAgIDE1NixcbiAgICAgIDg5LFxuICAgICAgMTE4LFxuICAgICAgNjQsXG4gICAgICAxMzUsXG4gICAgICA0MixcbiAgICAgIDEwNixcbiAgICAgIDE5OCxcbiAgICAgIDIxNCxcbiAgICAgIDcwLFxuICAgICAgOTEsXG4gICAgICA5MixcbiAgICAgIDExMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICA4MSxcbiAgICAgIDI1MyxcbiAgICAgIDEzMCxcbiAgICAgIDUxLFxuICAgICAgMjUsXG4gICAgICAyMyxcbiAgICAgIDIyLFxuICAgICAgOTAsXG4gICAgICAxMDIsXG4gICAgICA5OSxcbiAgICAgIDUyLFxuICAgICAgMTg4LFxuICAgICAgODIsXG4gICAgICAyNixcbiAgICAgIDI0NixcbiAgICAgIDIwOCxcbiAgICAgIDEwMCxcbiAgICAgIDEsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0E1TUU5VEpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDM1MzMxNjE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk9UQyBFeGNoYW5nZVwiLFxuICAgIFwibGlkXCI6IFwiMTgxNDc5NTk4NDY1MDQ5OjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTENlaStjQ0VOZXdtTFVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJRWEgrWlQyVWs5elVXWGJSdUEwZGVORGJVM2JNSHc0VXM2a0ZRSkZrdWpZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVxWFNMd3BXSmU2Y3U0Y3BXUWxSeERYZW0yVE04cyt0OG4vRWVRMVhlUUlJZk43d1BSRnhuc0ZxMVZSOFV3Z0c4TTBiUnB0WFI2Rnpyb0J6ZHlHQUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkp1Tk5CdGZUWGFpTnVZUFB6ZFJLaDh5elBMb202dGpXcTV2bWNnYkl2UjY2ZE1zMTZrTEZVRzBoblF2L1NGSnBQVUlUZVdVQWdsU2QyT25JWmZBeGpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDM1MzMxNjE6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTYxMjQyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRVl5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFWXkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJublVHM0k5MEY5aVJscG1CWG4xc3lFYjBTa3hwSWwzNnBwMVkxR09jSHBVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc1MzA2MTY4MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTU3MzIxNzAwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
