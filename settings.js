//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: Ednut001" //ur github or insta name
global.location = "Nigeria, Lagos, Abuja" //ur location

//new
global.botname = 'Ednut' //ur bot name
global.ownernumber = '2347036214381' //ur owner number
global.ownername = '𝕹𝖆𝖙𝖍𝖆𝖓 𓇻‎' //ur owner name
global.websitex = "https://youtu.be/-Omye-W0pTE"
global.wagc = "https://chat.whatsapp.com/HeXOhgWhj2OEcTF1LPVzOv"
global.themeemoji = '🪀'
global.wm = " ednut Bot Inc."
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD10' //script link
global.packname = "Sticker By"
global.author = "Ednut"
global.creator = "× Ednut"
global.xprefix = '.'
global.premium = ["2347036214381"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
