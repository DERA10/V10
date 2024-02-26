//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @iamevilboy
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "GitHub: iamevilboy" //ur github or insta name
global.location = "Nigeria, Lagos, Abuja" //ur location

//new
global.botname = '𝐓𝐇𝐄 𝐉𝐎𝐊𝐄𝐑 𝐁𝐎𝐓' //ur bot name
global.ownernumber = '2347010039405' //ur owner number
global.ownername = '𝐀𝐍𝐓𝐈𝐒𝐎𝐂𝐈𝐀𝐋 𝐇𝐔𝐌𝐈𝐃𝐈𝐓𝐘‎' //ur owner name
global.websitex = "https://chat.whatsapp.com/EduR0psW2l41eonnvegRuk"
global.wagc = ""
global.themeemoji = '🎃'
global.wm = " joker Bot Inc."
global.botscript = 'https://github.com/Ednut001/ednutBot-MD10' //script link
global.packname = "𝑰𝒂𝒎𝒙𝒅𝒂"
global.author = "𝑻𝒉𝒆 𝑱𝒐𝒌𝒆𝒓 𝑩𝒐𝒕"
global.creator = "2347010039405@s.whatsapp.net"
global.xprefix = '='
global.premium = ["2347010039405"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v8'
global.typereply = 'v3' // reply type 'v1' => 'v3'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = true //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = true //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group',
    done: 'Done bruh✓',
    error: 'Error!',
    success: '𝑮𝒆𝒏𝒆𝒓𝒂𝒕𝒆𝒅 𝒃𝒚 𝑱𝒐𝒌𝒆 𝒃𝒐𝒕🥇!'
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
