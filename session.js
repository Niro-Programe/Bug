//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEdDU2ZZeDQ2dzNEeHJCWXNXVndYdnlmZDZXc2pLREFkQmtQSUFOb0FVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVlKcGtVRE5xNUFqbWlvb0twOGxKeTZ6bk9aQk9qVEVMaS9zRk5JdWxGcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnS0R0TnNTTVZtVG5nTkorcjFkWmhBdmJjM0UwaG95VEM3QkJBbnEvdW5nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMThWcmtaUll0M3U3aDI2K3JsR3N0U3loODd1bytQTW9POEhvN3dXVTIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVBYVVlS09Qa1ZTQkowMDJFLzV1elFFRlNBbWNmMmVCdDNhanZjMWlSM2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcxTWJGQWZ2cHFBRHE5TmdjRTFpTlVPcWZ2UjQ4TStmL3dhRjBJWXJ2RXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYURjT0EvSWlvNXJGellYNFN3Ujh4bEtDOXZ3ZHBrRitCSXFvRFd0UE9GYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZklsb3RxdnlSMmlySlFYclJCZVozTzRMaUNKeWI2a04zTFNwa1gwNDVGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhaM2VOQ1cvVGtkUzNueFNlZ3Q1ckY1SjRqSTFwMk93eTcvRmNVZXhqbjdNTGVkN2t6bFBWMDNMU1lVS3J2L0VGY0xINStYMlJjdm1VN2lVMUtzUUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6IkN4VjJiWm1INDdERzRtTEsvMm85T0dvd3N5cStYZXVScUJTaGZKazlsL3c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImtqQWd0TFJkVDZlME9Db01LWmJ3OFEiLCJwaG9uZUlkIjoiYTU3OGVkMjQtYWZhYi00YTc4LWFjOGUtNGQ4Y2M4ZDQxMzMwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhHU1dMOE1mL1BvSHpqVCtUYVBYT0c0ZEtMST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSWVVjaGZwc3czdGx4ckxoVTM5V05hdWdYMHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSEFIUVFNUTciLCJtZSI6eyJpZCI6Ijk0NzA1MzE5NTA1OjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiV2ViIERlc2lnbiIsImxpZCI6IjE3NDQyNzg0OTM2NzgwMzo4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSktKeDdvRUVOYXdvOE1HR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTWM1L2o3Nnc3R0ZWQ0syQXUrS1AvbEN4NUVacEs2OGhvSWhiUTZ1cHd6az0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRWhkMjJJVHR4bFAxSWpXMXJQZHoyRS9TUGZWelhYd0hJeC9oaWcveUJVNHlzUFI5ZnlBMURnRnJyRFJOaVpQMDVJWmZ6dFBueE1jWGg2dVN3cExaQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IlgyOXYzQXFqeC9oemxkRFFyVlFQQUJIeTdBT2Flc0pGUm4yenV2T2phRTFlajdTTm5pYVlCSTYrVlJSaVYxUDd4Tmk0cnM2YUlWeU5GL1RzQ3paUENBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3MDUzMTk1MDU6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSE9mNCsrc094aFZRaXRnTHZpai81UXNlUkdhU3V2SWFDSVcwT3JxY001In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTE3MDE2MDQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTVJzIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94705319505",
  PASSWORD: 
    process.env.PASSWORD || "Venom123@@",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};