const schedule = require('node-schedule');
const { app, bot } = require("./server");
const { ping } = require("./pingServer");
require("./pingCron");



// ====== CONFIGURATION ENV ======
const PORT = process.env.PORT || 3000;
const CANAL_ID = process.env.CANAL_ID;
const adminId = process.env.TELEGRAM_ADMIN_ID;
const channelId = process.env.TELEGRAM_CHANNEL_ID;
const ADMIN_IDS = process.env.ADMIN_IDS.split(",").map(Number);



