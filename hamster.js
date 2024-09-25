const { Telegraf } = require('telegraf');
const bot = new Telegraf('7477024515:AAEIe6SNWeN6gZrruN2I5g_12pl7pd4K-X8');

bot.command('start', (ctx) => {
  ctx.reply('Bosishni boshlash uchun "Play" tugmasini bosing!', {
    reply_markup: {
      inline_keyboard: [[{ text: 'Play', web_app: { url: 'main.html' } }]],
    },
  });
});

bot.launch();
