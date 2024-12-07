//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia09zVGdoU0tXbDNJRnFoZnd6STEwa0gzbUU0Z1dXZ1pncXlNZ210Zkszdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxhZmtxQXQrbEVMejZpb1pQQ09URFU3dmVTc0V2L3Jqb1I1THpteVlCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTG5hSkQ2OU1veDZwMkllNDR1SDV1ZEM2NU9Jdk1vbnc0Q3pHWlc0Q2wwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHamJVSkw3bE9DVi9iMWtmOEZBNzAwVXRVNy84LzVhYWhWUXBHZ1RPbUVRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdIWU5zaXhIQUhDam9iSWxjelpBcnQ3UTFYZUkwYlFCQjlxaWFnZWRSMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVsR0ZVL2IvZ0JBN1Qvb0g2YVBrc05WN2dnQkdwSGtGem5PejFRS3dMWFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZNU2sySEplN2lIUEtlODFvaWo5aWs1a0Q0ditoQUEwZFJkUCs1QmlVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY3VnRnoxTzlaOHl0OHdTNm5jMFVjNTFsVHJzU3RRTHJlWklRbmw1alNuWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJKeXJ5b2gvVHhwUFJFSHJLMVdpR2Nwa25Sd0NjZUxBZGV3ZU45anQ4M1BkekdDWkZkbitmZGp1WnhXa2hzRCt0VlJhTmk2MVh1M2I4RWhJM1lFTUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcsImFkdlNlY3JldEtleSI6InhqTFRnR29TdS9JOURZdmJEUU5vVlN3Q09qNmdsanpVZTNoeVpUbmpvbTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjUzMzg3NDg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI1QjkxQTg2MUQzNjg3OTUyM0I2NjJFQkI0M0IzMEI5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM1OTc2OTV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI1MzM4NzQ4OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MEExREY5Nzg2RTAyRjI5MEU4RkEwNzI2MzRCQzcxRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzNTk3Njk1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMyNTMzODc0ODlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDc0REI0RDE4Rjc1N0I0Q0IwMDc0MUFGODk1NEU5QTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzU5NzY5N30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjUzMzg3NDg5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkUyOEMxQ0I1MkFGNUEwN0U4QzFCOENFMjY5NzM0NEMzIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM1OTc2OTd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imp0NGNiNVJWUzdPNDVKd1R5ZzJxRUEiLCJwaG9uZUlkIjoiMDI4MGU3OTQtM2Q3YS00NDEwLTgzNzQtNWRhZWExZjMwYzMxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpEK21KSmx2aWg4MHpiNlFqenhMQ1lOeGlQQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjaGxEU21SOFUyclV5Nlozd1FRNUplSXE5L009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNE01OEtFQjkiLCJtZSI6eyJpZCI6IjkyMzI1MzM4NzQ4OToyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCfmYjwn6qQ8J+Sq+KTqeKTpNCy8J2QgM6v0Y/Qusqw4pOE4ZSV8J+qvfCfmYkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01uNWpNZ0hFTyt6MHJvR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhGZWdwaUhmUW1GbldJS0FEODcvYXBhMG56YllVbjhrRlErYml2ejJCVXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlhWM290VVhxUGRyNzBJdXZBVUx0TlY4QUw3Ri9LYTBSMjVudnI2aUVtc1luVXJMMi9BWXVyMFptdWZZd01UMW1oRlRzSFYwOEttY1MxZm1GWktKRkR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJaSkRMSHJRQTlLSnhXZUhqWGtOQjUxQ0hRU0YrYXZDYUFwTm9QMjhPa1NmRXcycmZGeGN0Tjl0MHV6b2Y1bXFvK1V2V25xZGFRZlVCclkzUStQdXRDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI1MzM4NzQ4OToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNSWG9LWWgzMEpoWjFpQ2dBL08vMnFXdEo4MjJGSi9KQlVQbTRyODlnVk0ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM1OTc2OTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS00wIn0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
