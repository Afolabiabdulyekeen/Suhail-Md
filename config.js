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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_01_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTYsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU4LFxuICAgICAgICA5NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDczLFxuICAgICAgICA2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAyMixcbiAgICAgICAgODIsXG4gICAgICAgIDIyMixcbiAgICAgICAgODYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICA1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTY2LFxuICAgICAgICA3MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNFhISHMvYXdTWUVJWlo4Nm5BNXJKMUpjd3FiaE5uazZNdW9JbG5qWUdGQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibUR0ZVVJc0ZRQkNjRUZNN2RPN01WUVwiLFxuICBcInBob25lSWRcIjogXCJmOGI4ZDIzMi0wZWVhLTQ0YTAtOWZmMi0yNTUwMWNmYWZmOTJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICAxNTEsXG4gICAgICAyMSxcbiAgICAgIDEzNyxcbiAgICAgIDIwMSxcbiAgICAgIDM1LFxuICAgICAgMjQ3LFxuICAgICAgMjQwLFxuICAgICAgMjU1LFxuICAgICAgNDcsXG4gICAgICAxNjgsXG4gICAgICA5MixcbiAgICAgIDIwOCxcbiAgICAgIDM5LFxuICAgICAgMTI4LFxuICAgICAgMTQ5LFxuICAgICAgNjQsXG4gICAgICAzMixcbiAgICAgIDIzMyxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNSxcbiAgICAgIDEzMSxcbiAgICAgIDUzLFxuICAgICAgNjksXG4gICAgICAxNTIsXG4gICAgICA5NyxcbiAgICAgIDk1LFxuICAgICAgMjA5LFxuICAgICAgNjIsXG4gICAgICA4NyxcbiAgICAgIDIxLFxuICAgICAgNTMsXG4gICAgICAyMzcsXG4gICAgICAxNTAsXG4gICAgICAxODcsXG4gICAgICAyNDUsXG4gICAgICAwLFxuICAgICAgMTIwLFxuICAgICAgMTAyLFxuICAgICAgMTgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1GSDJWQkJRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAzNTMzMTYxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJPVEMgRXhjaGFuZ2VcIixcbiAgICBcImxpZFwiOiBcIjE4MTQ3OTU5ODQ2NTA0OToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xDZWkrY0NFUGlSbUxVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUVhIK1pUMlVrOXpVV1hiUnVBMGRlTkRiVTNiTUh3NFVzNmtGUUpGa3VqWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJadE1CNDlzdVpaWW5kSk9YTE5hbWdGaVpqSGZZUjRQbnZKTkxKZEQ3V0MvTFJ2RmZWNXRaZFY4WlRNMWZ2MWlOUFhyb0RpNlRZWkt0THhaZE9VejRDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJROHhUb2gvL1BjdkluT2JiZkpHbzJZRnMxVnVUMmtQWTNLY25GMWRKWm14dUo2NTlDQkkvSmx0U05XNEFLaFZuZGFjK2xRcWdtZnhHUzZmbjgzdkxnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTAzNTMzMTYxOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjE1NzMwOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
