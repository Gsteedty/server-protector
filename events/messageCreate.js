module.exports = {
  name: 'messageCreate',
  execute: async (message) => {
    if (message.author.bot) return;

    const spamFilter = require('../utils/spamFilter');
    if (spamFilter(message)) {
      message.delete();
      message.channel.send('Stop spamming!');
    }
  },
};
