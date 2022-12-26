const TeleBot = require('telebot');
const bot = new TeleBot('5625583933:AAG86PtLqYBv8ubDUVJf_rke6_ZUY_ckTXo');

bot.on('/start', (msg) => msg.reply.text('Selamat datang di Mantul BOT, tempatnya mantul mantul...'));
bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${ msg.from.first_name }!`);
});

bot.start();
